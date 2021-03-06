import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

test("renders Product Detail page", () => {
  render(<ProductDetail product={buildProduct()}></ProductDetail>);
  expect(
    screen.getByText("Sleek Wooden Pizza", { selector: "h1" })
  ).toBeInTheDocument();
});
