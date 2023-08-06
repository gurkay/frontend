import "./styles.css";

import { Expenses } from "./components/expenses/Expenses";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    { id: "e2", title: "New Tv", amount: 899.45, date: new Date(2021, 2, 28) },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 7, 14)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}
