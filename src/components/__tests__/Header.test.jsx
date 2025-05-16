import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

test("muestra nombre y mensaje", () => {
  render(
    <BrowserRouter>
      <Header
        isLoggedIn={true}
        setIsLoggedIn={() => {}}
        selectedUserId="1"
        selectedNameId="Mariana Rico"
      />
    </BrowserRouter>
  );

  expect(screen.getByText("Hola Mariana Rico")).toBeInTheDocument();
  expect(screen.getByText(/tareas pendientes/i)).toBeInTheDocument();
});
