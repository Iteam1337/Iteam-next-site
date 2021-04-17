import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgPlay from "../../assets/image/png/app-store.png";
import imgAppStore from "../../assets/image/png/google-play.png";

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #eae9f2;
`;

const ButtonContainer = styled(Box)`
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

const ButtonApp = styled.a`
  padding: 0 9px;
  transition: 0.4s;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-8px);
  }
`;

const CTA = () => (
  <>
    <SectionStyled className="position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7" xl="6">
            <div className="text-center">
              <Title>Get the app now</Title>

              <Text>
                Create custom landing pages with Omega that converts more
                visitors than any website.
              </Text>
              <ButtonContainer>
                <ButtonApp href="">
                  <img src={imgPlay} alt="" className="img-fluid" />
                </ButtonApp>
                <ButtonApp href="">
                  <img src={imgAppStore} alt="" className="img-fluid" />
                </ButtonApp>
              </ButtonContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default CTA;
