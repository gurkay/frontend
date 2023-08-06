import {Button} from "primereact/button";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {increment} from "../../redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
    const counter = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    return(
        <div className="text-center">
            <Button label="Click" icon="pi pi-plus" onClick={() => dispatch(increment())} />
            <div className="text-2xl text-900 mt-3">{counter}</div>
        </div>
    );
}