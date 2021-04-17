import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgContent from "../../assets/image/png/l4-content-img.png";

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    width={360}
    bg="light"
    border="1px solid"
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
      <Title variant="card" mb={0}>
        {title}
      </Title>

      <Text>{children}</Text>
    </div>
  </Box>
);

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
                  <Title>
                    Get noise free <br className="d-none d-sm-block" /> sound
                    everytime
                  </Title>
                  <Text mb={4}>
                    Create custom landing pages with Omega that converts more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
                  </Text>
                </div>
                <div className="mt-5">
                  <ContentCard
                    title="50+ Unique Design Blocks"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                    with Carefully Coded
                  </ContentCard>
                  <ContentCard
                    title="Mobile First Design
"
                    color="secondary"
                    iconName="icon-phone-charging-3-2"
                  >
                    on Every Devices
                  </ContentCard>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
