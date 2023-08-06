import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../features/counterSlice";
import crudServiceSlice from "../features/crudServiceSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        crudProducts: crudServiceSlice,
    },

})