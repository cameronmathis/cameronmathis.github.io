import { render, screen } from "@testing-library/react";
import FooterOption from "../../components/FooterOption";

test("renders the anchor component", () => {
  render(<FooterOption />);
  const anchorComponent = screen.getByTestId("footer__option");
  expect(anchorComponent).toBeInTheDocument();
});
