import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";

const SectionStyled = styled(Section)`
  background: ${({ heroImage }) =>
      heroImage
        ? `url(${require(`../../assets/image/heros/${heroImage}`)})`
        : "linear-gradient(147deg, rgba(141, 141, 236, 0.17) 0%, rgba(84, 84, 212, 0) 100%)"},
    no-repeat center 60%;
  background-size: cover;
`;

const Hero = ({ title, children, heroImage }) => (
  <>
    <SectionStyled
      pt={["120px!important", null, "190px!important"]}
      pb={["50px!important", null, "180px!important"]}
      bg="dark"
      heroImage={heroImage}
    >
      <Container
        css={`
          z-index: 10;
          margin-left: 0px;
        `}
      >
        <Row>
          <Col lg="6">
            <div>
              <Title color="light" variant="hero">
                {title}
              </Title>
              <Text color="light">{children}</Text>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Hero;
