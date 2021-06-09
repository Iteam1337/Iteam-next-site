import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../../components/Core";

const services = [
  "API",
  "Appar",
  "Plattformar",
  "Widgets",
  "Interna portaler",
  "Webbapplikationer",
  "Integrationer för nya tjänster",
  "Chatbottar",
  "Automatiseringar",
];

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex align-items-center ${className}`}
    {...rest}
    css={`
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow};`};
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          `rgba(${theme.colors[color]}, 0.1)`};
      `}
      mr={3}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>

    <Title variant="card" mb={0}>
      {title}
    </Title>
  </Box>
);

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>
                Vi bygger det
                <br />
                du behöver
              </Title>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {services.map((service) => (
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="50"
            >
              <ContentCard title={service} color="primary" />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature2;
