import "./CounterManager.css";
import { useState } from "react";

const CounterManager = () => {
  const [ticket, setTicket] = useState(0);
  const [last, setLast] = useState(0);
  const generate = () => {
    const number = Math.floor(Math.random() * 10000);
    setTicket(number);
    setLast(ticket);
  };
  return (
    <section>
      <div>
        <h2>Now Serving:</h2>
        <span>{ticket === 0 ? "0000" : ticket.toString().padStart(4, '0')}</span>
      </div>
      <div>
        <h2>Last Number:</h2>
        <span>{last.toString().padStart(4, '0')}</span>
      </div>
      <button onClick={generate}>Take a Number</button>
    </section>
  );
};

export default CounterManager;
