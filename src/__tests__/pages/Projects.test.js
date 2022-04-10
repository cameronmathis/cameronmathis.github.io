import { render, screen } from "@testing-library/react";
import Projects from "../../pages/Projects";

test("renders the projects section", () => {
  render(<Projects />);
  const projectsComponent = screen.getByTestId("projects");
  expect(projectsComponent).toBeInTheDocument();
});
