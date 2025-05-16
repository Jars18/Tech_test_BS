import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Importar el Router

test("renders welcome message", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Buscar el texto que sí existe en App
  const welcomeElement = screen.getByText(/bienvenido a to do's list/i);
  expect(welcomeElement).toBeInTheDocument();
});
