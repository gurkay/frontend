import "./Expenses.css";

import { ExpenseItem } from "../expense_item/ExpenseItem";

export function Expenses(props) {
  const content = props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <div className="expenses">{content}</div>;
}
