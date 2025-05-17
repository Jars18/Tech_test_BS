import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
};

const DropdownReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const { id, name } = action.payload;
      state.id = id;
      state.name = name;
    },
    clearUser(state) {
      state.id = "";
      state.name = "";
    },
  },
});

export const { setUser, clearUser } = DropdownReducer.actions;
export default DropdownReducer.reducer;
