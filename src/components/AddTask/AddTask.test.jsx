import { render, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

describe("AddTask", () => {
  //Configuro la alerta y prompt, despues limpio la configuracion
  beforeAll(() => {
    window.alert = jest.fn();
  });

  beforeEach(() => {
    jest.spyOn(window, "prompt");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  //Tests
  test("agrega tarea con inputs válidos", () => {
    const onAddTask = jest.fn();
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("Tarea 1")
      .mockReturnValueOnce("Descripción 1");

    const { getByRole } = render(<AddTask onAddTask={onAddTask} />);
    fireEvent.click(getByRole("button"));
    expect(onAddTask).toHaveBeenCalledWith("Tarea 1", "Descripción 1");
  });

  test("no permite agregar tarea vacía", () => {
    const onAddTask = jest.fn();
    window.prompt = jest.fn().mockReturnValueOnce(" ");
    const { getByRole } = render(<AddTask onAddTask={onAddTask} />);
    fireEvent.click(getByRole("button"));
    expect(onAddTask).not.toHaveBeenCalled();
  });
});
