import { useState } from "react";
import "./CounterManager.css";

const CounterManager = (props) => {
  const [currentTicket, setCurrentTicket] = useState();

  const generate = () => {
    setCurrentTicket(props.ticketsList[0] + 1);
    props.updateTicketsList(props.ticketsList[0] + 1);
  };

  return (
    <section>
      <h1>Your Number: {currentTicket}</h1>
      <div>
        <h2>Now Serving:</h2>
        <span>{props.ticketsList[0]}</span>
      </div>
      <div>
        <h2>Last Number:</h2>
        <span>{props.ticketsList[1]}</span>
      </div>
      <button onClick={generate}>Take a Number</button>
    </section>
  );
};

export default CounterManager;
