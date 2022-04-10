import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the top section", () => {
  render(<App />);
  const topComponent = screen.getByTestId("top");
  expect(topComponent).toBeInTheDocument();
});

test("renders the header section", () => {
  render(<App />);
  const headerComponent = screen.getByTestId("header");
  expect(headerComponent).toBeInTheDocument();
});

test("renders the about section", () => {
  render(<App />);
  const aboutComponent = screen.getByTestId("about");
  expect(aboutComponent).toBeInTheDocument();
});

test("renders the resume section", () => {
  render(<App />);
  const resumeComponent = screen.getByTestId("resume");
  expect(resumeComponent).toBeInTheDocument();
});

test("renders the projects section", () => {
  render(<App />);
  const projectsComponent = screen.getByTestId("projects");
  expect(projectsComponent).toBeInTheDocument();
});

test("renders the footer section", () => {
  render(<App />);
  const footerComponent = screen.getByTestId("footer");
  expect(footerComponent).toBeInTheDocument();
});

test("renders the back to top button", () => {
  render(<App />);
  const backToTopComponent = screen.getByTestId("back__to__top__button");
  expect(backToTopComponent).toBeInTheDocument();
});
