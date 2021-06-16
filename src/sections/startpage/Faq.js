import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Box, Text } from "../../components/Core"

const SectionStyled = styled(Section)`
  padding-top: 90px;
`

const FaqCard = styled(Box)`
  padding-left: 55px;
  position: relative;
  &::before {
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.light} !important;
  }
`

const FaqTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
`

const Faq = () => (
  <>
    {/* <!-- Faq section --> */}
    <SectionStyled bg="dark" pb="0 !important">
      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>
                  Hur lång är uppsägningstiden på löpande/fast avtal?
                </FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Om ni tecknar löpande avtal med oss är uppsägningstiden 1
                  månad för båda parter. Har ni ett fast avtal definieras
                  avtalsperioden av tidsbestämda avrop som inte går att häva
                  under pågående avrop, dock förlängs inte ett avrop automatiskt
                  utan sker endast enligt överenskommelse.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>
                  Kan vi byta konsult/kompetens under pågående avtal?
                </FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  Ja, om uppdraget ändrar karaktär och ni behöver annan expertis
                  kan vi utifrån tillgänglighet byta resurs under pågående
                  avtal.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>
                  Varför kan jag inte boka en konsult 40 timmar/vecka?
                </FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  På Iteam är fredagar vikta till kompetensutveckling,
                  bolagsstrategi och interna kulturbyggande aktiviteter.
                </Text>
              </div>
            </FaqCard>
          </Col>
          <Col lg="6" className="mb-5">
            <FaqCard>
              <div>
                <FaqTitle>
                  Var kan jag läsa mer om era team och konsulter?
                </FaqTitle>
                <Text variant="small" color="light" opacity={0.7}>
                  <a href="/about" color="light">
                    Här hittar du mer information om oss
                  </a>
                </Text>
              </div>
            </FaqCard>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Faq
