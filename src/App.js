import "./App.css";
import { useState } from "react";
import CounterManager from "./CounterManger/CounterManager";
import CustomerView from "./CustomerView/CustomerView";

function App() {
  const [tickets, setTickets] = useState([]);
  const [serving, setServing] = useState([]);
  const [last, setLast] = useState([0]);

  const counters = [1, 2, 3, 4];

  const updateTickets = (e) => {
    setTickets([...tickets, e]);
  };

  const counterCall = () => {
    setServing([...tickets]);
    setLast([tickets[0], ...last]);
    setTickets((prevNumbers) => prevNumbers.slice(1));
  };

  return (
    <main className="cont">
      <h1>Customer View</h1>
      <CounterManager
        servingList={serving}
        lastServing={last}
        updateTicketsList={updateTickets}
      ></CounterManager>
      <section className="counters">
        {counters.map((e, index) => (
          <CustomerView
            counterCall={counterCall}
            queue={tickets}
            counter={e}
            key={index}
          ></CustomerView>
        ))}
      </section>
    </main>
  );
}

export default App;
