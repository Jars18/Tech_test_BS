import { render, screen, waitFor } from "@testing-library/react";
import Task from "./Task";
import axios from "axios";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../../store/taskSlice";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

function renderWithProviders(ui, { preloadedState } = {}) {
  const store = configureStore({
    reducer: {
      tasks: taskReducer,
    },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
}
//Tests
test("renderiza tareas del usuario", async () => {
  const mockTasks = [
    { userId: 1, id: 1, title: "Tarea A", body: "...", completed: false },
    { userId: 1, id: 2, title: "Tarea B", body: "...", completed: false },
    { userId: 2, id: 3, title: "Tarea C", body: "...", completed: false },
  ];

  axios.get.mockResolvedValue({ data: mockTasks });

  const selectedUser = { id: "1", name: "Mariana Rico" };

  renderWithProviders(<Task selectedUser={selectedUser} />);

  await waitFor(() => {
    expect(screen.getByText(/1. Tarea A/)).toBeInTheDocument();
    expect(screen.getByText(/2. Tarea B/)).toBeInTheDocument();
    expect(screen.queryByText(/Tarea C/)).not.toBeInTheDocument();
  });
});
