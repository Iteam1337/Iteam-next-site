import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Span } from "../../components/Core";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="dark">
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col md="11" lg="10" xl="9">
              <Box py={4}>
                <Text
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  Iteam X - när du inte vet vad som är möjligt
                </Text>
                <Title
                  my={4}
                  variant="hero"
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  Experimentell utveckling
                  <br className="d-none d-lg-block" />
                  med exponentiell teknik
                </Title>
                <Box
                  pt="12px"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1300"
                >
                  <Button color="dark" bg="secondary">Boka en sprint</Button>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
