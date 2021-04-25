import React from "react";
import { render, screen } from "test-utils";

import Accordion from "./Accordion";

test("renders the title", () => {
  const title = "My Title";
  render(<Accordion title={title}></Accordion>);
  expect(screen.queryByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  const text = "My children text";
  render(<Accordion>{text}</Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});
