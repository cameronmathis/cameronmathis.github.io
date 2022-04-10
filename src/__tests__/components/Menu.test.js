import { render, screen } from "@testing-library/react";
import Menu from "../../components/Menu";

test("renders all three links in the menu", () => {
  render(<Menu />);
  const linksArray = screen.getAllByRole("link", { hidden: true });
  expect(linksArray).toHaveLength(3);
});

test("renders about text in the menu", () => {
  render(<Menu />);
  const aboutText = screen.getByText("About");
  expect(aboutText).toBeInTheDocument();
});

test("renders resume text in the menu", () => {
  render(<Menu />);
  const resumeText = screen.getByText("Resume");
  expect(resumeText).toBeInTheDocument();
});

test("renders projects text in the menu", () => {
  render(<Menu />);
  const projectsText = screen.getByText("Projects");
  expect(projectsText).toBeInTheDocument();
});
