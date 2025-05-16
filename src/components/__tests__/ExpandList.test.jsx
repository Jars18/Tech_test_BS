import { render, screen, fireEvent } from "@testing-library/react";
import ExpandList from "../ExpandList";

const items = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];

test("muestra y oculta lista expandible", () => {
  render(
    <ExpandList
      items={items}
      initialItems={1}
      renderItem={(item) => <p>{item.name}</p>}
    />
  );

  expect(screen.getByText("Item 1")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByText("Item 3")).toBeInTheDocument();
});
