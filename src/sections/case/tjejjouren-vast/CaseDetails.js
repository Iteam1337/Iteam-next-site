import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
} from "../../../components/Core"

import imgCase1 from "../../../assets/image/case/tjejjouren-vast1.png"
import imgCase2 from "../../../assets/image/case/tjejjouren-vast-case-phone.png"

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
          <img src={imgCase1} alt="" className="img-fluid" />
        </ImgContainer>

        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Om Tjejjouren Väst
              </Title>
              <Text variant="small">
                Tjejjouren Väst är en ideell förening som arbetar för att stärka
                tjejers rättigheter och motarbeta den ökande psykiska ohälsan
                bland unga tjejer. Man arbetar med nätbaserat stöd i form chat
                och mail, men har identifierat att man skulle kunna nå fler unga
                tjejer och erbjuda stöd i fler former genom en egen mobilapp.
                Därför vände sig Tjejjouren Väst till Iteam för att ta fram den
                nya appen Stella.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Hjälp nu
              </Title>
              <Text variant="small">
                Som ideell förening hade man förstås en begränsad budget, och
                därför var också teamet från Iteam litet. För att kunna skapa
                mesta möjliga värde arbetade vi utifrån att ta fram en MLP -
                “Minimum Loveable Product”. Vårt största fokus var att allt vi
                gjorde skulle vara värdefullt för användarna. Det var av
                yttersta vikt att kunna släppa tjänsten så snart som möjligt,
                eftersom behovet är stort och hjälpen inte kan vänta.
              </Text>
            </Box>{" "}
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Ett stöd när jouren är stängd
              </Title>
              <Text variant="small">
                Resultatet är appen Stella, som kan erbjuda stöd även då chatten
                inte är öppen. Med hjälp av appen kan tjejer få hjälp dygnet
                runt. I appen finns information, stöd och hjälp kring ämnen som
                kan vara svåra att prata om. Där kan de läsa om var de kan vända
                sig om någon gör dem illa, om de mår dåligt eller om de behöver
                annat stöd.
                <br />
                <br />I appen kan användarna föra dagbok och direkt använda
                chatten under Tjejjouren Västs öppettider. Det finns övningar
                som syftar till att öka känslan av trygghet, till exempel om man
                har svårt att sova, känner oro eller panik.
              </Text>
            </Box>{" "}
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Fokus på värde{" "}
              </Title>
              <Text variant="small">
                Den största utmaningen i projektet var att kunna göra mesta
                möjliga med begränsade medel. Vi följde en agil arbetsprocess
                där man fokuserar på att hela tiden fokusera på en funktion i
                taget och alltid slutföra något som är värdefullt för
                användarna. När det som i detta projekt finns en stor osäkerhet
                i hur långt man kommer hinna på en begränsad tid garanterar
                detta arbetssätt att man säkerställer att all tid leder till ett
                ökat värde.
              </Text>
            </Box>
            <Box>
              <ImgContainer className="text-center">
                <img src={imgCase2} alt="" className="img-fluid" />
              </ImgContainer>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CaseDetails
