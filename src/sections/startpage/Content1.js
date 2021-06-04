import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContent from "../../assets/image/jpeg/Johan-Christian-Working-Lowres.jpg";

const ImgContainer = styled.div`
  margin-top: 50px;
  @media ${device.lg} {
    margin-top: 0px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(55%, -50%);
  }
  @media ${device.xl} {
    transform: translate(40%, -50%);
  }
  @media (min-width: 1400px) {
    transform: translate(15%, -50%);
  }
`;

const ULStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 15px;
  padding-left: 0;

  @media ${device.sm} {
    padding-top: 35px;
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.lg} {
    justify-content: space-between;
  }

  li {
    &:nth-child(odd) {
      @media ${device.sm} {
        margin-right: 40px;
      }
    }
    color: #19191b;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
    line-height: 50px;
    display: flex;
    margin-bottom: 5px;
  }
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section
      bg="#F7F7FB"
      className="position-relative"
      py={["50px", null, "130px", null, "230px"]}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className=" position-static order-lg-2">
            <ImgContainer className=" pl-lg-5">
              <img
                src={imgContent}
                alt=""
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-once="true"
                css={`
                  margin-right: -800px;
                  box-shadow: ${({ theme }) =>
                    `0 12px 84px ${theme.colors.shadow}`};
                  border-radius: 0;
                `}
              />
            </ImgContainer>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div>
                <Title>
                  Börja genom{" "}
                  <br className="d-none d-sm-block d-md-none d-lg-block" /> att
                  bara börja
                </Title>
                <Text mb={4}>
                  Det som inte är i produktion skapar inget värde. Det är bara en kostnad. Därför tror vi inte på långa förarbeten som slutar i en rapport på någons skrivbord. Istället är vi övertygade om att för att komma igång behöver vi börja. Vi gör research kring er och era kunders behov, sätter upp hypoteser och utvecklar något litet. Därefter testar och utvecklar vi kontinuerligt utifrån nya insikter. På detta sätt kommer tjänsten snabbt ut i produktion och skapar användarnytta.
                </Text>


              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
