import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 200px;
  }
`;

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <h1>{title}</h1>
        </Heading>
        <p>{description}</p>
      </div>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
