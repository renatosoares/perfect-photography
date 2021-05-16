import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test("renders Product Detail page", () => {
  render(<ProductDetail></ProductDetail>);
  expect(
    screen.getByText("Make your registration right now!")
  ).toBeInTheDocument();
});
