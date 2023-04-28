import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-react");
  expect(linkElement).toBeInTheDocument();
});

test("Link to right href", () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-react");
  expect(linkElement.href).toContain("reactjs.org");
});
