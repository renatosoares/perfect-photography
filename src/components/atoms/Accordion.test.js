import { fireEvent } from "@testing-library/dom";
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

test("triggers onChange when it is clicked", async () => {
  const title = "My Title";
  const handleChange = jest.fn();
  render(<Accordion title={title} onChange={handleChange}></Accordion>);
  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});
