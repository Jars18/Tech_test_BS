import { render, screen, waitFor } from "@testing-library/react";
import Task from "../Task";
import axios from "axios";

jest.mock("axios");

test("renderiza tareas del usuario", async () => {
  const mockTasks = [
    { userId: 1, id: 1, title: "Tarea A", body: "..." },
    { userId: 1, id: 2, title: "Tarea B", body: "..." },
  ];

  axios.get.mockResolvedValue({ data: mockTasks });

  render(<Task selectedUserId="1" />);
  await waitFor(() => {
    expect(screen.getByText(/1. Tarea A/)).toBeInTheDocument();
    expect(screen.getByText(/2. Tarea B/)).toBeInTheDocument();
  });
});
