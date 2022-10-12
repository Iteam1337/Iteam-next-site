import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Button, Section, Box, Typography } from '../../components/Core'

const FeatureCard = ({ title, children, ...rest }) => (
  <Box width={'100%'} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <Typography.H3>{title}</Typography.H3>
        <Typography.Paragraph>{children}</Typography.Paragraph>
      </div>
    </div>
  </Box>
)

const Feature = () => (
  <>
    <Section bg="ash">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Typography.H2 className="tw-text-white">
                Leapfrog as a service
              </Typography.H2>
              <Typography.Paragraph className="tw-text-white">
                Du vill gå om dina konkurrenter med ny teknik. När man ska jobba
                inom okända områden finns det sällan en plan eller färdiga
                processer att följa. Därför satsar vi på att skapa team som
                vågar utforska. Du får löpande se resultat och kan styra
                riktningen.
              </Typography.Paragraph>
              <a href="#sprintMeeting">
                <Button color="dark" mt={4}>
                  Boka ett X team
                </Button>
              </a>
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row className="justify-content-center">
                <Col
                  md="12"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard color="primary" title="Purpose">
                    Drivkraften i våra X team är alltid ett högre syfte.
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard color="ash" title="Mastery">
                    Vi bygger rätt från början. Vi använder rätt verktyg.
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard color="secondary" title="Autonomy">
                    Vi strävar efter att teamet ska kunna ta helt egna beslut.
                  </FeatureCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Feature
