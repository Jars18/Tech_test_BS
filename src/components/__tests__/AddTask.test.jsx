import { render, fireEvent } from "@testing-library/react";
import AddTask from "../AddTask";

describe("AddTask", () => {
  beforeAll(() => {
    // Simular alert para evitar errores en Jest
    window.alert = jest.fn();
  });

  beforeEach(() => {
    jest.spyOn(window, "prompt");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("agrega tarea con inputs válidos", () => {
    const onAddTask = jest.fn();
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("Tarea 1") // 1er prompt: título
      .mockReturnValueOnce("Descripción 1"); // 2do prompt: descripción

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
