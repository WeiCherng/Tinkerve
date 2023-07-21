import "./App.css";
import { useState } from "react";
import CounterManager from "./CounterManger/CounterManager";
import CustomerView from "./CustomerView/CustomerView";

function App() {
  const [tickets, setTickets] = useState([0]);
  const counters = [1, 2, 3, 4];

  const updateTickets = (e) => {
    setTickets([e, ...tickets]);
  };

  const counterCall = () => {
     setTickets((prevTickets) => prevTickets.slice(1))
  }

  return (
    <main>
      <h1>Customer View</h1>
      <CounterManager
        ticketsList={tickets}
        updateTicketsList={updateTickets}
      ></CounterManager>
      <section>
        {counters.map((e, index) => (
          <CustomerView call={counterCall} queue={tickets} counter={e} key={index}></CustomerView>
        ))}
      </section>
    </main>
  );
}

export default App;

