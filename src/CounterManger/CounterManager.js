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
    <section>
      <h1>Your Number: {currentTicket}</h1>
      <div>
        <h2>Now Serving:</h2>
        <span>{props.servingList[0]}</span>
      </div>
      <div>
        <h2>Last Number:</h2>
        <span>{props.lastServing[1]}</span>
      </div>
      <button onClick={generate}>Take a Number</button>
    </section>
  );
};

export default CounterManager;
