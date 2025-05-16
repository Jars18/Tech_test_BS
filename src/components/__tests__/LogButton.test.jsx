import { render, fireEvent, screen } from "@testing-library/react";
import LogButton from "../LogButton";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("LogButton", () => {
  test("muestra texto según login", () => {
    renderWithRouter(
      <LogButton
        isLoggedIn={false}
        setIsLoggedIn={() => {}}
        selectedUserId={"1"}
      />
    );
    expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
  });

  test("alerta si no se selecciona usuario", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    renderWithRouter(
      <LogButton
        isLoggedIn={false}
        setIsLoggedIn={() => {}}
        selectedUserId={""}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(alertMock).toHaveBeenCalledWith(
      "Por favor selecciona un usuario primero"
    );
    alertMock.mockRestore();
  });
});
