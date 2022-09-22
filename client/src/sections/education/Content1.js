import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { rgba } from 'polished'

import { Title, Section, Box, Typography } from '../../components/Core'
import { device } from '../../utils'

import imgContent from '../../assets/image/png/Floppy-disk-Large.png'

const ContentCard = ({
  color = 'primary',
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    width={360}
    bg="light"
    border="none"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex ${className}`}
    {...rest}
    css={`
      min-width: 100%;
      width: 100%;
      @media ${device.sm} {
        width: 360px;
        min-width: 360px;
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
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Typography.H3 mb={0}>{title}</Typography.H3>

      <Typography.Paragraph>{children}</Typography.Paragraph>
    </div>
  </Box>
)

const Content2 = () => (
  <>
    {/* <!-- Content section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg="5" md="9" sm="10" className="mb-5 mb-lg-0 order-lg-2">
            <div
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <img src={imgContent} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="7" className="order-lg-1">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div className="content-text pl-lg--50">
                <div className="section-title">
                  <Typography.H2>
                    Vad innebär <br className="d-none d-sm-block" /> öppen
                    källkod?
                  </Typography.H2>
                  <Typography.Paragraph>
                    Lär dig begreppen, koncepten och arbetssätten. Betyder öppen
                    källkod att systemet blir sårbart eller osäkert? Kan man
                    verkligen tjäna pengar på öppen källkod? Lär dig GIT och
                    Github även om du inte programmerar.
                  </Typography.Paragraph>
                </div>
                <div className="mt-5">
                  <ContentCard
                    title="1. Vision och filosofi"
                    color="secondary"
                    mb={3}
                  >
                    med Christian Landgren
                  </ContentCard>
                  <ContentCard
                    title="2. Modern Appliktationsutveckling"
                    color="secondary"
                    mb={3}
                  >
                    med Adam Näslund
                  </ContentCard>
                  <ContentCard
                    title="3. Agil Metodik med öppen källkod"
                    color="secondary"
                    mb={3}
                  >
                    med Emma-Klara Wächter
                  </ContentCard>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Content2
