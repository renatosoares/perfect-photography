import React from "react";
import { render, screen } from "test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

test.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("with %i products show only %i items", (size, expected) => {
  render(<ProductGrid products={buildProducts(size)} />);

  expect(screen.getAllByRole("heading").length).toBe(expected);
});
