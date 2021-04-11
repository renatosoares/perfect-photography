import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>DEFAULT</Button>
      <Button color="primary" {...events}>
        PRIMARY
      </Button>
      <Button color="danger" {...events}>
        DANGER
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...events}>
        DEFAULT
      </Button>
      <Button disabled color="primary" {...events}>
        PRIMARY
      </Button>
      <Button disabled color="danger" {...events}>
        DANGER
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" {...events}>
        DEFAULT
      </Button>
      <Button variant="outlined" color="primary" {...events}>
        PRIMARY
      </Button>
      <Button variant="outlined" color="danger" {...events}>
        DANGER
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" disabled {...events}>
        DEFAULT
      </Button>
      <Button variant="outlined" disabled color="primary" {...events}>
        PRIMARY
      </Button>
      <Button variant="outlined" disabled color="danger" {...events}>
        DANGER
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" {...events}>
        DEFAULT
      </Button>
      <Button variant="link" color="primary" {...events}>
        PRIMARY
      </Button>
      <Button variant="link" color="danger" {...events}>
        DANGER
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" disabled {...events}>
        DEFAULT
      </Button>
      <Button variant="link" disabled color="primary" {...events}>
        PRIMARY
      </Button>
      <Button variant="link" disabled color="danger" {...events}>
        DANGER
      </Button>
    </Toolbar>
  </div>
);
