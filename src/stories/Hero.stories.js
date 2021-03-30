import React from "react";

import Hero from "../components/Hero";

import bgLensImage from "./assets/bg-lens.jpg";
import bgBirdImage from "./assets/bg-bird.jpg";

export default {
  title: "Example/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgLensImage}>
    <h1>Sed voluptate tenetur adipisci exercitationem.</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgBirdImage}>
    <h1>
      Dolor sit amet <strong>consectetur</strong>
      <br />
      adipisicing elitit
    </h1>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>
    <button>Dolor sit amet</button>
  </Hero>
);
