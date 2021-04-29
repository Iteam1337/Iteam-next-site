import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../../components/Core";

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
    <Section bg="ash">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title color="light">
                It’s everything
                <br />
                you’ll ever need.
              </Title>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="50+ Unique Design Blocks"
              color="primary"
              iconName="icon-cards-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Multiple Layouts"
              color="secondary"
              iconName="icon-layout-11"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Mobile First Design"
              color="warning"
              iconName="icon-phone-charging-3-2"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Fully Responsive"
              color="secondary"
              iconName="icon-sidebar-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Bootstrap 4 Framework"
              color="primary"
              iconName="icon-grid-45"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Rich Documentation"
              color="secondary"
              iconName="icon-bookmark-2-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Humanly Support"
              color="success"
              iconName="icon-voice-recognition-2"
            />
          </Col>
          <Col
            lg="4"
            md="6"
            className="mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="50"
          >
            <ContentCard
              title="Lifetime Updates"
              color="primary"
              iconName="icon-infinite"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature2;
