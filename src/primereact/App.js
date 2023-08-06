import Counter from "./components/plus_button_count/Counter";
import Crud from "./components/crud/Crud";
import Forms from "./components/forms/Forms";

import { Provider } from "react-redux";
import { store } from "./redux/app/store";

export default function App() {

    return(
        <Provider store={store}>
            <Forms />
        </Provider>
    );
}