import { render, screen, waitFor } from "@testing-library/react";
import Comments from "../Comments";

describe("Comments", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Comentario 1",
              email: "a@a.com",
              body: "Contenido",
            },
          ]),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("muestra comentario tras carga", async () => {
    render(<Comments selectedUserId="1" />);

    await waitFor(() => {
      expect(screen.getByText("Comentario 1")).toBeInTheDocument();
    });
  });
});
