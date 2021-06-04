import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/_DSC6527_.jpg";
import imgContent2 from "../../assets/image/jpeg/Lounge-Martin-Mikael-Christian-Lowres.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
  height: 100%;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              Digitalisering kräver mod att sätta igång
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
            Digitalisering är till sin natur oförutsägbar och komplex. Gamla metoder för framtagning av fysiska produkter och tjänster gäller inte längre. Tvärtom leder dom ofta till höga kostnader och dåliga resultat.
            </Text>
            <Text>
            Vi har tillbringat 25 år med att lära oss hur man gör på ett bättre sätt. 
Grunden handlar om att våga sätta igång. Att inte avvakta till att man har alla svaren. Det bygger på tillit. Vi litar på dig och du kan lita på oss.
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
