import { createSlice } from "@reduxjs/toolkit";

//No esta loggeado ni hay usuario seleccionado
const initialState = {
  isLoggedIn: false,
  userId: null,
};

const LogReducer = createSlice({
  name: "auth",
  initialState,
  //Cambios de estado si se loggea o desloguea
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
    },
  },
});

export const { login, logout } = LogReducer.actions;
export default LogReducer.reducer;
