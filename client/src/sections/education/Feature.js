import React from 'react'
import { rgba } from 'polished'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Typography } from '../../components/Core'

const ContentCard = ({
  color = 'success',
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

    <Typography.H3>{title}</Typography.H3>
  </Box>
)

const Feature2 = () => (
  <>
    <Section bg="ash">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Typography.H2 additionalClassName="tw-text-white">
                Du får med dig
                <br />
                allt du behöver.
              </Typography.H2>
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
              title="Vad är Pull Request?"
              color="success"
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
              title="Autonoma team"
              color="success"
              iconName="icon-infinite"
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
              title="Modern apputveckling"
              color="success"
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
              title="Vad är DevOps?"
              color="success"
              iconName="icon-cycling-2"
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
              title="Värdet av automatiska tester"
              color="success"
              iconName="icon-check-simple"
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
              title="UX-design"
              color="success"
              iconName="icon-check-simple"
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
              title="Continous Improvement"
              color="success"
              iconName="icon-chart-bar-52"
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
              title="Team Agreement"
              color="success"
              iconName="icon-users-wm"
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
              title="Säkerhet med öppen källkod"
              color="success"
              iconName="icon-touch-id"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Feature2
