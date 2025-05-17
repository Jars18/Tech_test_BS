import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const options = [
    { userId: "1", userName: "Edson Villarroel" },
    { userId: "2", userName: "Jhonny Lopez" },
    { userId: "3", userName: "Estefania de los Angeles Canelas" },
    { userId: "4", userName: "Mariana Rico" },
  ];
  //Tests
  test("renderiza las opciones y cambia usuario", () => {
    const handleChange = jest.fn();
    render(<Dropdown selectedUser={{ id: "" }} onUserChange={handleChange} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2" } });

    expect(handleChange).toHaveBeenCalledWith("2", "Jhonny Lopez");
  });

  test("muestra el usuario seleccionado correctamente", () => {
    render(<Dropdown selectedUser={{ id: "3" }} onUserChange={jest.fn()} />);
    const select = screen.getByRole("combobox");
    expect(select.value).toBe("3");
  });
});
