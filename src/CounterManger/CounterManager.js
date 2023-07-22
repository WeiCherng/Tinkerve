import { useState } from "react";
import "./CounterManager.css";

const CounterManager = (props) => {
  const [currentTicket, setCurrentTicket] = useState();

  const generate = () => {
    const number = Math.floor(Math.random() * 10000);
    setCurrentTicket(number);
    props.updateTicketsList(number);
  };

  return (
    <>
      <h1>
        Your Number: <span className="customer-ticket">{currentTicket}</span>
      </h1>
      <section className="customer-view-cont">
        <div className="customer-num-cont">
          <h2>
            Now Serving:
            <span className="customer-num">{props.servingList[0] ? props.servingList[0] : "0000"}</span>
          </h2>
        </div>
        <div className="customer-num-cont">
          <h2>
            Last Number:
            <span className="customer-num">{props.lastServing[1] ? props.lastServing[1] : "0000"}</span>
          </h2>
        </div>
        <button className="customer-btn" onClick={generate}>Take a Number</button>
      </section>
    </>
  );
};

export default CounterManager;
