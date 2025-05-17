import { render, screen, waitFor } from "@testing-library/react";
import Comments from "./Comments";
import axios from "axios";

jest.mock("axios");

describe("Comments", () => {
  //Establezco un comentario, después de cada test se resetea
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Comentario 1",
          email: "a@a.com",
          body: "Contenido",
        },
      ],
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  //Tests
  test("muestra comentario tras carga", async () => {
    render(<Comments selectedUser={{ id: 1 }} />);

    await waitFor(() => {
      expect(screen.getByText("Comentario 1")).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
  });
});
