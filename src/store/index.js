import { configureStore } from "@reduxjs/toolkit";
import LogReducer from "./logSlice";
import DropdownReducer from "./dropdownSlice";
import TaskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    auth: LogReducer,
    user: DropdownReducer,
    tasks: TaskReducer,
  },
});

export default store;
