import React from "react";

import Card from "./Card";
import Section from "components/molecules/Section";

export default {
  title: "Components/Atoms/Card",
  component: Card,
};

export const usage = () => (
  <Section inverse>
    <Card></Card>
  </Section>
);
