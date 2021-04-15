import React from "react";
import {
  FaChargingStation,
  FaCameraRetro,
  FaImage,
  FaUserClock,
} from "react-icons/fa";

import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <div>
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
  </div>
);
