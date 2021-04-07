import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Button",
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
