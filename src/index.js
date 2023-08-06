import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./roles_auth/App";
import { Provider } from "react-redux";
import { store } from "./roles_auth/redux/app/store";
import {AuthProvider} from "./roles_auth/context/AuthProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </Provider>
);