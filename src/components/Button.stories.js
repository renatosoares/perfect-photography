import React from "react";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Button",
  component: Button,
};

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <Toolbar>
    <Button>DEFAULT</Button>
    <Button color="primary">PRIMARY</Button>
    <Button color="danger">DANGER</Button>
  </Toolbar>
);
