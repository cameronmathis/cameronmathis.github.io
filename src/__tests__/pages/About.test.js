import { render, screen } from "@testing-library/react";
import About from "../../sections/About";

test("renders the heading component", () => {
  render(<About />);
  const headingComponent = screen.getByRole("heading");
  expect(headingComponent).toBeInTheDocument();
});

test("renders the job title", () => {
  render(<About />);
  const jobTitleComponent = screen.getByTestId("job__title");
  expect(jobTitleComponent).toBeInTheDocument();
});

test("renders the first paragraph", () => {
  render(<About />);
  const paragraphOneComponent = screen.getByTestId("paragraph__one");
  expect(paragraphOneComponent).toBeInTheDocument();
});

test("renders the second paragraph", () => {
  render(<About />);
  const paragraphTwoComponent = screen.getByTestId("paragraph__two");
  expect(paragraphTwoComponent).toBeInTheDocument();
});

test("renders the third paragraph", () => {
  render(<About />);
  const paragraphThreeComponent = screen.getByTestId("paragraph__three");
  expect(paragraphThreeComponent).toBeInTheDocument();
});

test("renders the image", () => {
  render(<About />);
  const imgComponent = screen.getByRole("img");
  expect(imgComponent).toBeInTheDocument();
});
