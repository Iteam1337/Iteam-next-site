import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box } from "../../components/Core";
import { device } from "../../utils";

import imgBorderShape from "../../assets/image/png/cta-border-shape.png";
import imgCTA from "../../assets/image/png/cta-shape.png";

const ShapeBorder = styled(Box)`
  position: absolute;
  display: none;

  @media ${device.md} {
    display: block;
    top: 4%;
    right: -13%;
  }
  @media ${device.xl} {
    right: -2%;
  }
`;

const ShapeCTA = styled(Box)`
  position: absolute;
  bottom: 0;
  left: -5%;
`;

const CTA = () => (
  <>
    <Section bg="#1e1e20" className="position-relative">
      <ShapeBorder>
        <img src={imgBorderShape} alt="" className="img-fluid" />
      </ShapeBorder>
      <ShapeCTA className="">
        <img src={imgCTA} alt="" className="img-fluid" />
      </ShapeCTA>
      <Container>
        <Row>
          <Col lg="9" md="8">
            <div className="py-4">
              <Title color="light">
                Save tons of time. <br className="d-none d-sm-block" />
                Get new landing page.
              </Title>
            </div>
          </Col>
          <Col
            lg="3"
            md="4"
            className="d-flex align-items-center justify-content-lg-end mt-4 mt-md-0"
          >
            <div>
              <Button>Get Beta Access</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CTA;
