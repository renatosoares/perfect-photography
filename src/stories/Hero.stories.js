import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "../components/Hero";
import Heading from "../components/Heading";

import bgLensImage from "./assets/bg-lens.jpg";
import bgBirdImage from "./assets/bg-bird.jpg";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgLensImage}>
    <h1>{text("Title", "Sed voluptate tenetur adipisci exercitationem.")} </h1>
    <p>
      {text(
        "Text",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      )}
    </p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgBirdImage}>
    <Heading>
      <h1>
        Dolor sit amet <strong>consectetur</strong>
        <br />
        adipisicing elitit
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>
    <button>Dolor sit amet</button>
  </Hero>
);
