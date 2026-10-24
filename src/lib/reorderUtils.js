const POSTGRES_INTEGER_MIN = -2147483648;

export function createReorderPlan(orderedItems) {
  const occupiedOrders = new Set(
    orderedItems
      .map((item) => item.display_order)
      .filter((displayOrder) => Number.isInteger(displayOrder)),
  );
  const temporaryOrders = [];
  let candidate = -1;

  for (let index = 0; index < orderedItems.length; index += 1) {
    while (occupiedOrders.has(candidate)) candidate -= 1;
    if (candidate < POSTGRES_INTEGER_MIN) {
      throw new Error('Unable to allocate temporary content order values.');
    }
    temporaryOrders.push(candidate);
    occupiedOrders.add(candidate);
    candidate -= 1;
  }

  return {
    originalOrders: new Map(orderedItems.map((item) => [item.id, item.display_order])),
    temporaryUpdates: orderedItems.map((item, index) => ({ id: item.id, display_order: temporaryOrders[index] })),
    finalUpdates: orderedItems.map((item, index) => ({ id: item.id, display_order: index })),
  };
}

export async function persistReorder(type, orderedItems, updateItem, getError) {
  const plan = createReorderPlan(orderedItems);

  try {
    await Promise.all(plan.temporaryUpdates.map(({ id, display_order }) => (
      updateItem(type, id, { display_order })
    )));
    await Promise.all(plan.finalUpdates.map(({ id, display_order }) => (
      updateItem(type, id, { display_order })
    )));
  } catch (error) {
    try {
      await Promise.all(Array.from(plan.originalOrders, ([id, display_order]) => (
        updateItem(type, id, { display_order })
      )));
    } catch (rollbackError) {
      console.error('Unable to restore the previous content order.', rollbackError);
      throw new Error(`${getError(error, 'Unable to save the content order.')} The previous order could not be restored.`);
    }
    throw new Error(getError(error, 'Unable to save the content order.'));
  }
}
