import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

test("renders the footer component", () => {
  render(<Footer />);
  const footerComponent = screen.getByTestId("footer");
  expect(footerComponent).toBeInTheDocument();
});
