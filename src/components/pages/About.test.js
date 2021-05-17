import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("renders about page", () => {
  render(<About></About>);
  expect(screen.getByText("Meet our photographers")).toBeInTheDocument();
});

test("scrolls to top in first render", () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
