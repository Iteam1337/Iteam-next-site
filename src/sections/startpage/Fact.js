import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)`
  background-color: #f7f7fb;
  border-bottom: 1px solid #ededf4;
  padding-bottom: 30px;
  padding-top: 0;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`;

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="#f7f7fb" pt={0}>
      <Container>
        <Row className="text-center">
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">26 år</Title>
              <Text>
                Sedan starten.
              </Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">95%</Title>
              <Text>Lyckade digitaliseringsprojekt. [Jonna fyller på]</Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">5.0</Title>
              <Text>
                Betyg på FB och Google
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
