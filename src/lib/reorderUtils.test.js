import assert from 'node:assert/strict';
import test from 'node:test';
import { createReorderPlan, persistReorder } from './reorderUtils.js';

const item = (id, display_order) => ({ id, display_order });

test('allocates unique in-range temporary orders for duplicate existing orders', () => {
  const plan = createReorderPlan([item('a', 2), item('b', 2), item('c', -1)]);
  const temporaryOrders = plan.temporaryUpdates.map(({ display_order }) => display_order);

  assert.deepEqual(temporaryOrders, [-2, -3, -4]);
  assert.equal(new Set(temporaryOrders).size, temporaryOrders.length);
  assert(temporaryOrders.every((displayOrder) => displayOrder >= -2147483648 && displayOrder <= 2147483647));
});

test('assigns final orders in the requested up or down order', () => {
  const plan = createReorderPlan([item('c', 2), item('a', 0), item('b', 1)]);

  assert.deepEqual(plan.finalUpdates, [
    { id: 'c', display_order: 0 },
    { id: 'a', display_order: 1 },
    { id: 'b', display_order: 2 },
  ]);
});

test('restores original orders when persistence fails', async () => {
  const calls = [];
  let finalUpdateCount = 0;
  const updateItem = async (type, id, changes) => {
    calls.push({ type, id, changes });
    if (changes.display_order >= 0) {
      finalUpdateCount += 1;
      if (finalUpdateCount === 2) throw new Error('persistence failed');
    }
  };

  await assert.rejects(
    persistReorder('project', [item('a', 4), item('b', 4)], updateItem, (error) => error.message),
    { message: 'persistence failed' },
  );

  assert.deepEqual(calls.slice(-2).map(({ id, changes }) => ({ id, display_order: changes.display_order })), [
    { id: 'a', display_order: 4 },
    { id: 'b', display_order: 4 },
  ]);
});
