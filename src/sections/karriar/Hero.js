import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";
import imgBg from "../../assets/image/jpeg/career-hero.jpeg";

const SectionStyled = styled(Section)`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.127), rgba(0, 0, 0, 0.8)),
    url(${imgBg}) no-repeat center;
  background-size: cover;
`;

const Hero = ({ title, children, ...rest }) => {
  return (
    <>
      <SectionStyled
        pt={["120px!important", null, "190px!important"]}
        pb={["50px!important", null, "180px!important"]}
        bg="dark"
        // {...rest}
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
};
export default Hero;
