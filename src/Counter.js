import React from 'react';

const Counter = ({ counterName, currentNumber, counterStatus, onCompleteServing }) => {
  const completeServing = () => {
    onCompleteServing(counterName);
  };

  return (
    <div>
      <h3>Counter {counterName}</h3>
      <p>Now Serving: {counterStatus === 'Online' ? currentNumber : 'Offline'}</p>
      <p>
        {counterStatus === 'Online' ? (
          <span>
            <span style={{ color: 'green' }}>&#x25cf;</span> Counter Online
          </span>
        ) : (
          <span>
            <span style={{ color: 'grey' }}>&#x25cf;</span> Counter Offline
          </span>
        )}
      </p>
      <button disabled={counterStatus === 'Offline'} onClick={completeServing}>
        Complete Serving
      </button>
    </div>
  );
};

export default Counter;
