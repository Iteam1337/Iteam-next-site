import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section } from "../../components/Core";

const CTA = () => (
  <>
    <Section bg="secondary" className="position-relative">
      <Container>
        <Row>
          <Col lg="8" xl="7">
            <div>
              <Title color="dark">
                Enjoy every beat.<br className="d-none d-sm-block"></br> Get a
                new headphone.
              </Title>
            </div>
          </Col>
          <Col
            lg="4"
            xl="5"
            className="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0"
          >
            <div>
              <Button bg="warning" color="dark">
                Buy Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CTA;
