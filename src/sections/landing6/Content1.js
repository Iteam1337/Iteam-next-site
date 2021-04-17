import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPhone from "../../assets/image/png/l7-mobile.png";

const SectionStyled = styled(Section)``;

const WidgetContainer = styled(Box)`
  counter-reset: widget-counter;
`;

const WidgetStyled = styled(Box)`
  padding-left: 70px;
  position: relative;
  max-width: 411px;
  &:before {
    counter-increment: widget-counter;
    content: counter(widget-counter);
    position: absolute;
    left: 0;
    min-width: 49px;
    width: 49px;
    height: 49px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 500px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light};
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
`;

const Widget = ({ num = 1, title = "", children = "", ...rest }) => {
  return (
    <WidgetStyled {...rest}>
      <Title variant="card" mb={2}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </WidgetStyled>
  );
};

const Content1 = () => {
  return (
    <>
      {/* <!-- Content1 section --> */}
      <SectionStyled>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <img src={imgPhone} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <Title>
                  Fits everything on{" "}
                  <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                  your devices.
                </Title>
                <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <WidgetContainer mt={5}>
                  <Widget title="Find your trip partner" mb={4}>
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page quickly.
                  </Widget>
                  <Widget title="Plan trip with easy steps">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page quickly.
                  </Widget>
                </WidgetContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content1;
