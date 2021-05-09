import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import AboutImage from "draws/about.svg";

import BirdImage from "assets/bg-bird.jpg";

const Image = styled.img`
  width: 100%;
  max-width: 380px;
`;

const About = () => (
  <>
    <Hero image={BirdImage}>
      <Heading>
        <h1>Perfect Photography</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            molestiae modi veniam, provident numquam facilis quia rerum!
            Veritatis explicabo ullam architecto laudantium, rerum assumenda cum
            expedita maxime aspernatur non totam.
          </p>
          <p>
            Dolorem officiis dicta ducimus sed ipsam, unde recusandae. Dolores
            illo, aliquid qui delectus ipsum quae unde ab ipsa blanditiis nihil,
            quia, maxime voluptas nesciunt asperiores voluptates cupiditate ea
            reprehenderit in?
          </p>
          <p>
            Animi harum in perferendis eius error odit. Ipsam ea deserunt
            reiciendis voluptas dignissimos dolores voluptate libero aut eveniet
            at necessitatibus, rerum, nobis natus consequuntur velit. Voluptatum
            tempore ipsam nostrum autem?
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            </li>
            <li>
              Incidunt libero dolorum quaerat obcaecati eius dicta ducimus
            </li>
            <li>
              Minima provident facilis omnis delectus quis nulla doloremque
            </li>
            <li>
              Accusantium doloremque aperiam eveniet, a mollitia iure ipsum
            </li>
            <li>
              Provident sed adipisci, impedit necessitatibus libero, neque odit
            </li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur quisquam architecto commodi tempore minus. Quod
            voluptatum unde ullam cumque voluptatibus esse magnam aliquid illum
            nam asperiores. Sed nam repellendus consequatur.
          </p>
          <center>
            <Image src={aboutImage} alt="Image camera and photos" />
          </center>
        </div>
      </Grid>
    </Section>
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
