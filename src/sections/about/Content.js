import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/Daily-Vimla-Turing-1-Lowres.jpg";
import imgContent2 from "../../assets/image/jpeg/Lounge-Martin-Mikael-Christian-Lowres.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              Digitalisering kräver erfarenhet och mod att sätta igång
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
            Digitalisering till sin natur är oförutsägbar och komplex och att gamla metoder för framtagning av fysiska produkter och tjänster inte gäller här, tvärtom leder dom ofta till höga kostnader och ett dåligt resultat.
            </Text>
            <Text>
            Vi har under 25 års tid förfinat en process som faktiskt fungerar i för att tämja denna komplexitet och skapa lyckade projekt. 
Grunden handlar om att våga sätta igång. Att inte avvakta till att man har alla svaren. Det bygger på ett förtroende och därför satsar vi mycket på våra kundrelationer. Vi vill lita på dig och du lita på oss. Kärnan i det är att vi har kul ihop och att vi är ärliga mot varandra.
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
