import { useState } from "react";
import "./CustomerView.css";

const CustomerView = (props) => {
  const [status, setStatus] = useState("Offline");
  const [serving, setServing] = useState("0000");

  const setCounter = (e) => {
    setStatus(e);
  };

  const callToCounter = () => {
    if (props.queue[0] !== 0) {
      setServing(props.queue[0]);
      setStatus("Serving");
      props.call();
    }
  };

  return (
    <div>
      <p>
        {status === "Online" && (
          <span>
            <span style={{ color: "green" }}>&#x25cf;</span>
          </span>
        )}
        {status === "Serving" && (
          <span>
            <span style={{ color: "red" }}>&#x25cf;</span>
          </span>
        )}
        {status === "Offline" && (
          <span>
            <span style={{ color: "grey" }}>&#x25cf;</span>
          </span>
        )}
      </p>
      <h3>Counter {props.counter}</h3>
      <span>{status === "Offline" ? "Counter Offline" : serving}</span>
      {status !== "Offline" ? (
        <button
          disabled={status === "Offline"}
          onClick={() => setCounter("Offline")}
        >
          Close Counter
        </button>
      ) : (
        <button onClick={() => setCounter("Online")}>Open Counter</button>
      )}
      <button disabled={status === "Offline"} onClick={callToCounter}>
        Call to Counter
      </button>
    </div>
  );
};

export default CustomerView;
