import React from "react";

import Hero from "../components/Hero";

export default {
  title: "Example/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Sed voluptate tenetur adipisci exercitationem.">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Dolor sit amet consectetur adipisicing elit">
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>
    <button>Dolor sit amet</button>
  </Hero>
);
