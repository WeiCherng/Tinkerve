import { useState } from "react";
import "./App.css";
import CounterManager from "./CounterManger/CounterManager";
import CustomerView from "./CustomerView/CustomerView";

function App() {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <h1>Customer View</h1>
      <CounterManager></CounterManager>
      <CustomerView></CustomerView>
    </div>
  );
}

export default App;
