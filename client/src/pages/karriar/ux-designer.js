import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import MetaTags from "../../components/MetaTags/MetaTags"
import PageWrapper from "../../components/PageWrapper"
import {
  Section,
  Title,
  Text,
  Box,
  ImgContainer,
  Anchor,
} from "../../components/Core"
import imgRole from "../../assets/image/jpeg/design-sprint.jpeg"

const OpeningDetails = () => {
  return (
    <PageWrapper footerDark>
      <MetaTags
        title={"Iteam söker UX-designer!"}
        description={
          "Som UX-designer på Iteam är din roll att hjälpa våra kunder med digitala lösningar som skapar värde på riktigt. Som gör något bra både för kunden, slutanvändaren och för samhället i stort. Du delar med dig av din kunskap inom user experience och verkar för ett användarcentrerat arbetssätt."
        }
        image={imgRole}
      />
      <Section className="pb-0">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Box className="text-center" mb={4}>
                Ledig tjänst
              </Box>
              <Title variant="hero">UX Designer</Title>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          <Row>
            <Col lg="12" xl="10" className="offset-xl-1">
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Iteam söker UX Designer!
                </Title>
                <Text variant="small">
                  Iteam består av ett 25 utvecklare, UX-designers och team coacher som brinner för
                  skapa fantastiska användarupplevelser och lösa verkliga problem. Vi är konsulter
                  och jobbar i team där en blandning av olika erfarenheter och bakgrunder är en
                  bidragande faktor till vår framgång.
                  <br />
                  <br />
                  Vi hjälper våra kunder med allt inom UX. Från kvalitativa och kvantitativa
                  användarstudier till att facilitera workshops, ta fram prototyper och genomföra
                  användningstest. Vi strävar mot att UX aldrig ska få vara bara en fas eller en
                  eftertanke. Det ska genomsyra hela projektet. Alltid. 
                  <br />
                  <br />
                  Nu behöver vi bli fler och vi är på jakt efter vår nästa UX-designer som kan
                  omvandla insikter om användare till träffsäkra designlösningar. Vi letar efter dig
                  som har en stark designförmåga, är kreativ och nyfiken till våra spännande uppdrag.
                </Text>
              </Box>
              <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
                <img src={imgRole} alt="" className="img-fluid" />
              </ImgContainer>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Rollen
                </Title>
                <Text variant="small">
                  Som UX-designer på Iteam är din roll att hjälpa våra kunder med
                  digitala lösningar som skapar värde på riktigt. Som gör något bra
                  både för kunden, slutanvändaren och för samhället i stort. Du delar
                  med dig av din kunskap inom user experience och verkar för ett
                  användarcentrerat arbetssätt. 
                </Text>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Du behöver
                </Title>
                <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                  <li>
                    Ha relevant designutbildning och minst 3 års relevant erfarenhet av UX-design
                  </li>
                  <li>
                    Vana vid att facilitera workshops
                  </li>
                  <li>
                    Ha erfarenhet av att jobba med designverktyg som till exempel Figma, Sketch och InVision
                  </li>
                  <li>
                    Ha designförmåga och vana att designa i olika steg, från klickbara prototyper till visuell design
                  </li>
                  <li>
                    Ha erfarenhet av att arbeta i agila team
                  </li>
                  <li>
                    Vara självgående och har förmågan att planera och driva ux-aktiviteter i projekt
                  </li>
                  <li>Behärska svenska och engelska i tal och skrift</li>

                </ul>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Ansökan
                </Title>
                <Text variant="small">
                  Anställningsform: Tillsvidareanställning. 6 månaders
                  provanställning, sedan fast anställning
                  <br />
                  Start: Omgående
                  <br />
                  Plats: Göteborg eller Stockholm eller Remote inom Sverige
                  <br />
                  Ansök genom att maila ditt CV & några rader om dig till{" "}
                  <Anchor color="info" href="mailto:joinus@iteam.se">
                    {" "}
                    joinus@iteam.se{" "}
                  </Anchor>
                </Text>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Undrar du något om tjänsten?
                </Title>
                <Text variant="small">
                  Skicka din fråga till{" "}
                  <Anchor color="info" href="mailto:johanna.grahn@iteam.se">
                    johanna.grahn@iteam.se{" "}
                  </Anchor>
                  (Head of People and Culture) eller{" "}
                  <Anchor
                    color="info"
                    href="mailto:rebecca.noren@iteam.se"
                  >
                    rebecca.noren@iteam.se{" "}
                  </Anchor>
                  (Head of UX Design)
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </PageWrapper>
  )
}
export default OpeningDetails
