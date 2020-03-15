import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Git Hub Hot Repo Heading", () => {
  const { getByText } = render(<App />);
  const headElement = getByText(/Git Hub Hot Repos/i);
  expect(headElement).toBeInTheDocument();
});

test("renders Git Hub Prolific users Heading", () => {
  const { getByText } = render(<App />);
  const headElement = getByText(/Git Hub Prolific Users/i);
  expect(headElement).toBeInTheDocument();
});
