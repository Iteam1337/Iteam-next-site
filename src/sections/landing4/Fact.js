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
              <Title color="secondary">1M+</Title>
              <Text>
                Customers visit Omega every month to get their service done.
              </Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">92%</Title>
              <Text>Satisfaction rate comes from our awesome customers.</Text>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Title color="secondary">4.9/5.0</Title>
              <Text>
                Average customer ratings we have got all over internet.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
