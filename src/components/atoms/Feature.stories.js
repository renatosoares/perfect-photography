import React from "react";
import {
  FaChargingStation,
  FaCameraRetro,
  FaImage,
  FaUserClock,
} from "react-icons/fa";

import Grid from "components/atoms/Grid";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaChargingStation />} title="Título">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaChargingStation />} title="Título">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaCameraRetro />} title="Título">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaImage />} title="Título">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaUserClock />} title="Título">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </Feature>
  </Grid>
);
