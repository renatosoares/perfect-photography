import React from "react";
import PropTypes from "prop-types";
import {
  FaChargingStation,
  FaCameraRetro,
  FaImage,
  FaUserClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductType from "models/types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import BirdImage from "assets/bg-bird.jpg";
import CameraVideo from "assets/camera.mp4";

const Home = ({ products }) => (
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
        Mostre-se agora
      </Button>
    </Hero>
    <Section>
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
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Photography auto click</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            totam eius autem esse cumque neque vero enim quisquam iure nulla
            delectus dolore facere, nam labore, ipsam quae omnis amet ad.{" "}
          </p>
          <div>
            <Button as={Link} to="/about" color="primary">
              Know more
            </Button>
          </div>
        </div>
        <div>
          <video
            src={CameraVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="How do I use flash during the day?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          sunt. Tempora cumque provident et unde maxime nam, deserunt iusto
          corporis, porro obcaecati neque, nulla reprehenderit quaerat quia
          nostrum ipsa at!
        </Accordion>
        <Accordion title="What is the best portrait lens?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          sunt. Tempora cumque provident et unde maxime nam, deserunt iusto
          corporis, porro obcaecati neque, nulla reprehenderit quaerat quia
          nostrum ipsa at!
        </Accordion>
        <Accordion title="Transporting machinery how do I do it?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          sunt. Tempora cumque provident et unde maxime nam, deserunt iusto
          corporis, porro obcaecati neque, nulla reprehenderit quaerat quia
          nostrum ipsa at!
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
