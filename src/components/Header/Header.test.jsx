import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

jest.mock("../LogButton/LogButton", () => () => (
  <div data-testid="log-button-mock"></div>
));

describe("Header", () => {
  test("muestra nombre y mensaje correctamente", () => {
    const mockUser = {
      name: "Mariana Rico",
      id: "1",
    };

    render(
      <BrowserRouter>
        <Header selectedUser={mockUser} />
      </BrowserRouter>
    );

    expect(screen.getByText("Hola Mariana Rico")).toBeInTheDocument();
    expect(
      screen.getByText(/Estas son tus tareas pendientes/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("log-button-mock")).toBeInTheDocument();
  });
});
