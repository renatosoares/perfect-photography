import React from "react";

import Hero from "../components/Hero";

import bgLensImage from "./assets/bg-lens.jpg";
import bgBirdImage from "./assets/bg-bird.jpg";

export default {
  title: "Example/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero
    title="Sed voluptate tenetur adipisci exercitationem."
    image={bgLensImage}
  >
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </Hero>
);

export const withList = () => (
  <Hero
    title="Dolor sit amet consectetur adipisicing elitit"
    image={bgBirdImage}
  >
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>
    <button>Dolor sit amet</button>
  </Hero>
);
