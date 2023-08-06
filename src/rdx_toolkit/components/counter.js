import { increment, decrement } from "../redux/features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <div>
        <button aria-label="Increment" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{counter}</span>
        <button aria-label="Decrement" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}
