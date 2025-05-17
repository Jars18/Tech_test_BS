import { render, fireEvent, screen } from "@testing-library/react";
import LogButton from "./LogButton";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../store/logSlice";

//Configuro el store para usarlo en los tests
function renderWithProviders(ui, { preloadedState } = {}) {
  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
}

//Tests
describe("LogButton", () => {
  test("muestra 'Iniciar Sesión' si no está logueado", () => {
    renderWithProviders(<LogButton selectedUserId={"1"} />, {
      preloadedState: { auth: { isLoggedIn: false } },
    });
    expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
  });

  test("muestra 'Cerrar Sesión' si está logueado", () => {
    renderWithProviders(<LogButton selectedUserId={"1"} />, {
      preloadedState: { auth: { isLoggedIn: true } },
    });
    expect(screen.getByText("Cerrar Sesión")).toBeInTheDocument();
  });

  test("alerta si no se selecciona usuario", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    renderWithProviders(<LogButton selectedUserId={""} />, {
      preloadedState: { auth: { isLoggedIn: false } },
    });

    fireEvent.click(screen.getByRole("button"));
    expect(alertMock).toHaveBeenCalledWith(
      "Por favor selecciona un usuario primero"
    );

    alertMock.mockRestore();
  });
});
