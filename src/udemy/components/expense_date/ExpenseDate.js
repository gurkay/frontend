import "./ExpenseDate.css";

export function ExpenseDate(props) {
  const day = props.date.toLocaleString("tr-TR", { month: "numeric" });
  const month = props.date.toLocaleString("tr-TR", { month: "short" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
