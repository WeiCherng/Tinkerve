import { useState } from "react";
import "./CustomerView.css";

const CustomerView = (props) => {
  const [status, setStatus] = useState("Offline");
  const [serving, setServing] = useState("0000");

  const setCounter = (e) => {
    setStatus(e);
  };

  const callToCounter = () => {
    if (props.queue[0] !== undefined) {
      setServing(props.queue[0]);
      setStatus("Serving");
      props.counterCall();
    }
  };

  return (
    <div className="counter-cont">
      <section className="counter-indicator">
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
      </section>

      <h3 className="counter-num">Counter {props.counter}</h3>
      <span>{status === "Offline" ? "Counter Offline" : serving}</span>

      <section className="customer-btn-cont">
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
      </section>
    </div>
  );
};

export default CustomerView;
