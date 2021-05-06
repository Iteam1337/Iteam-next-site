import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/common/Hero";

const FormStyled = styled.form``;

const Contact1 = () => {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Klart vi ska ses!">
          Vi träffar gärna er och lyssnar in vad ni har för utmaningar som kan lösas med lite smart digitalisering. 
          Nedan kan du enkelt boka in ett distansmöte direkt i din och vår kalender. 
        </Hero>
        <Section>
          <Container>
            <Row className="align-items-center">
              <Col lg="10">
                <FormStyled
                  name="contact1"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* You still need to add the hidden input with the form name to your JSX form */}
                  <input type="hidden" name="form-name" value="contact1" />

                  <Box mb={5}>
                    <Title>Boka intromöte direkt i kalendern</Title>
                  </Box>
                  <div class="meetings-iframe-container" data-src="https://meetings.hubspot.com/jonna-hjern/intromote-iteam?embed=true"></div>

                </FormStyled>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col
                lg={10}
                className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
              >
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Ring oss
                  </Title>

                  <Title variant="card" fontSize="18px">
                    Jonna Hjern, Försäljning
                    <Text><a href="callto:+46729755366">+46-729-755 366</a></Text>
                  </Title>
                  <Title variant="card" fontSize="18px">
                    Christian Landgren, VD
                    <Text><a href="callto:+46707755831">+46-707-755 831</a></Text>
                  </Title>
                  <Title variant="card" fontSize="18px">
                    Hans Rollman, COO
                    <Text><a href="callto:+46738133787">+46 738-1337 87</a></Text>
                  </Title>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Maila?
                  </Title>
                  <Text>info@iteam.se</Text>
                  <Text>joinus@iteam.se</Text>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Besök oss och ta en kaffe
                  </Title>
                  <Text>Järntorgsgatan 12-14</Text>
                  <Text>413 01 Göteborg</Text>
                </Box>
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Vi finns numera på många orter men utan kontor
                  </Title>
                  <Text>Stockholm</Text>
                  <Text>Göteborg</Text>
                  <Text>Skåne</Text>
                  <Text>Fler?</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact1;
