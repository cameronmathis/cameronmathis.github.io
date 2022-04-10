import { render, screen } from "@testing-library/react";
import MenuButton from "../../components/MenuButton";

test("renders the button component", () => {
  render(<MenuButton />);
  const buttonComponent = screen.getByRole("button");
  expect(buttonComponent).toBeInTheDocument();
});

test("renders all three span objects", () => {
  render(<MenuButton />);
  const spanArray = screen.getAllByTestId("span");
  expect(spanArray).toHaveLength(3);
});
