import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";

test("renderiza las opciones y cambia usuario", () => {
  const handleChange = jest.fn();
  render(<Dropdown selectedUserId="" onUserChange={handleChange} />);
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "2" } });
  expect(handleChange).toHaveBeenCalledWith("2", "Jhonny Lopez");
});
