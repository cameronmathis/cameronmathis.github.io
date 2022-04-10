import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

test("renders the header component", () => {
  render(<Header />);
  const headerComponent = screen.getByTestId("header");
  expect(headerComponent).toBeInTheDocument();
});

test("renders the menu button", () => {
  render(<Header />);
  const menuButtonComponent = screen.getByTestId("menu__button");
  expect(menuButtonComponent).toBeInTheDocument();
});

test("renders the menu", () => {
  render(<Header />);
  const menuComponent = screen.getByTestId("menu");
  expect(menuComponent).toBeInTheDocument();
});
