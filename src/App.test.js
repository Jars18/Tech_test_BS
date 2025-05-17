import { render, screen } from "@testing-library/react";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import LogReducer from "./store/logSlice";

const mockInitialState = {
  user: {
    id: 1,
    name: "Test User",
  },
  auth: {
    isLoggedIn: true,
    userId: 1,
  },
};

const testStore = configureStore({
  reducer: {
    user: (state = mockInitialState.user) => state,
    auth: LogReducer,
  },
  preloadedState: mockInitialState,
});

test("renders welcome message", () => {
  render(
    <HashRouter>
      <Provider store={testStore}>
        <App />
      </Provider>
    </HashRouter>
  );

  const welcomeElement = screen.getByText(/bienvenido a to do's list/i);
  expect(welcomeElement).toBeInTheDocument();
});
