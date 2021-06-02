import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
} from "../../../components/Core";
import Quote from "../../../components/Quote";

import imgCase2 from "../../../assets/image/case/trr-laptop-transparent.png";

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Stöd i förändring
              </Title>
              <Text variant="small">
                Vi hjälper TRR att ta en proaktiv roll på arbetsmarknaden och
                svara på kundernas behov om kompetensförsörjning. Detta kommer
                på sikt att resultera i en plattform där TRRs kundföretag kan ta
                del av hela serviceerbjudandet. Syftet är att detta både ska
                höja servicenivån och frigöra tid för TRRs medarbetare för att
                prioritera personliga möten istället för administration. De
                första stegen i denna resa är tjänster för att hitta nya
                rekryteringar utifrån unika kravprofiler samt stöd och
                rådgivning vid omställning.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Tydliga mål och snabbrörlighet
              </Title>
              <Text variant="small">
                Vårt arbete med att utveckla Kundplattformen genomsyras av
                Design Thinking och ett hypotesdrivet arbetssätt där vi vägleds
                av användarnas behov. Vi började med att identifiera
                målgruppernas behov genom intervjustudier. Därefter definierades
                Kundplattform effektmål som hjälpte oss att prioritera
                funktioner som ska utvecklas. På så sätt synliggörs hela
                resonemangskedjan, från de effekter vi vill uppnå till hur vi
                konkret tillgodoser behoven.
                <br />
                <br />
                Utvecklingen av funktionalitet har sedan skett i korta cykler.
                Vi har använt oss av metoden designsprint där vi tillsammans
                utforskat och utvärderat olika lösningar. Vi har iterativt
                definierat och testat hypoteser mot verkliga användare.
              </Text>
            </Box>

            <Box>
              <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
                <img src={imgCase2} alt="" className="img-fluid" />
              </ImgContainer>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                En ny arbetsmarknad
              </Title>
              <Text variant="small">
                Tiden då anställda belönas med en guldklocka efter år av trogen
                tjänst är förbi. Samhället rör sig ständigt och ställer högre
                krav på företagens förmåga att anpassa sig till nya
                förutsättningar. Ny teknik och digitala system automatiserar
                rutinarbeten.
                <br />
                <br />
                Vad kommer digitalisering, gig-ekonomi och automatisering få för
                konsekvenser för HR-avdelningarna? Och hur kommer jobbmatchning
                se ut i en värld som är helt digitaliserad? TRR står inför nya
                utmaningar. Den svenska omställningsmodellen behöver anpassas
                och företag efterfrågar större proaktivitet.
              </Text>
            </Box>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={["40px", null, "65px"]}>
              <Quote
                text={`Iteam har varit en självklar stöttepelare i projektet, och i
                ett arbetssätt som gör oss mer användarcentrerade. Som
                rådgivande konsulter kan jag lita på att de alltid tänker på
                projektets bästa före allt annat.`}
                author="Jonas Kowalski"
                authorTitle="Produktägare"
              />
            </Box>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Om TRR
              </Title>
              <Text variant="small">
                TRR är en aktör inom omställning och arbetslivscoachning. De
                öppnar dörrar till framtidens arbetsliv genom att stötta
                uppsagda tjänstemän på vägen mot en ny anställning, studier
                eller att starta eget företag. De hjälper även arbetsgivare som
                kompetensväxlar på grund av arbetsbrist. TRR har 35 000 anslutna
                medlemsföretag där totalt 950 000 tjänstemän arbetar.
                <br />
                <br />
                Målet är att vägen från ett jobb till en annan positiv lösning
                ska vara så kvalitativ, effektiv och meningsfull som möjligt.
                TRR ägs av parterna på den privata arbetsmarknaden,
                arbetsgivarförbunden inom Svenskt Näringsliv och fackförbunden
                inom PTK. Läs mer på <a href="https://www.trr.se/">trr.se</a>.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseDetails;
