import { render, screen } from "@testing-library/react";
import BackToTopButton from "../../components/BackToTopButton";

test("renders the anchor component", () => {
  render(<BackToTopButton />);
  const anchorComponent = screen.getByRole("link");
  expect(anchorComponent).toBeInTheDocument();
});
