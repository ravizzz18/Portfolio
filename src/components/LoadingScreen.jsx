import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ visible }) => {
  const [exiting, setExiting] = useState(false);
  const [exited, setExited] = useState(false);

  useEffect(() => {
    if (visible) {
      setExiting(false);
      setExited(false);
    } else if (!exited) {
      setExiting(true);
    }
  }, [visible, exited]);

  if (exited) return null;

  return (
    <div
      className={`loading-screen${exiting ? ' loading-screen--exit' : ''}`}
      role="status"
      aria-label="Loading Ravindra portfolio"
      onAnimationEnd={(event) => {
        if (exiting && event.animationName === 'loading-exit') setExited(true);
      }}
    >
      <div className="loading-mark" aria-hidden="true">
        <span className="loading-monogram">R</span>
        <i className="loading-line" />
      </div>
      <p className="loading-wordmark">RAVINDRA</p>
      <div className="loading-indicator" aria-hidden="true" />
    </div>
  );
};

export default LoadingScreen;
