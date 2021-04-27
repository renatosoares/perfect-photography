import React from "react";
import { render, screen } from "test-utils";

import AccordionGroup from "./AccordionGroup";
import Accordion from "./Accordion";

const title = "Accordion Title";

test("renders with one child", () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders with 3 children", () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getAllByText(title)).toHaveLength(3);
});
