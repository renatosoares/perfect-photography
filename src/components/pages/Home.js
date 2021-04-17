import React from "react";
// import PropTypes from "prop-types";
import {
  FaChargingStation,
  FaCameraRetro,
  FaImage,
  FaUserClock,
} from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";

import BirdImage from "assets/bg-bird.jpg";

const Home = () => (
  <>
    <Hero image={BirdImage}>
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
      <Button color="primary" variant="outlined">
        Dolor sit amet
      </Button>
    </Hero>
    <Grid sm={2} md={4}>
      <Feature
        icon={<FaChargingStation />}
        title="Adipisicing elit, consectetur"
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Feature>
      <Feature icon={<FaCameraRetro />} title="Ipsum dolor sit consectetur">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Feature>
      <Feature icon={<FaImage />} title="Ipsum dolor">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Feature>
      <Feature icon={<FaUserClock />} title="Lorem ipsum dolor sit">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Feature>
    </Grid>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
