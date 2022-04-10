import { render, screen } from "@testing-library/react";
import Project from "../../components/Project";

test("renders the anchor component", () => {
  render(<Project />);
  const anchorComponent = screen.getByTestId("project__item");
  expect(anchorComponent).toBeInTheDocument();
});

test("renders the project image", () => {
  render(<Project />);
  const projectImg = screen.getByRole("img");
  expect(projectImg).toBeInTheDocument();
});
