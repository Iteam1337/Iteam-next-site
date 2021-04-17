import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";
import MapGoogle from "../components/MapGoogle";

import PageWrapper from "../components/PageWrapper";

const FormStyled = styled.form``;

const Contact2 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container className="position-relative">
            <Row>
              <Col lg={6} className="mb-5 mb-lg-0">
                <div className="banner-content mb-5">
                  <Title variant="hero">Contact us</Title>
                  <Text>
                    Create custom landing pages with Omega that converts{" "}
                    <br className="d-none d-md-block" /> more visitors than any
                    website.{" "}
                  </Text>
                </div>
                <div>
                  <FormStyled
                    name="contact3"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact3" />
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="nameput"
                      >
                        Your name
                      </Title>
                      <Input
                        type="text"
                        placeholder="i.e. James Cameron"
                        id="nameput"
                        name="name"
                        required
                      />
                    </Box>
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="emailput"
                      >
                        Email address
                      </Title>
                      <Input
                        type="email"
                        placeholder="i.e. james@email.com"
                        id="emailput"
                        name="email"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="serviceput"
                      >
                        Service
                      </Title>
                      <Input
                        type="text"
                        placeholder="i.e. I want to know about your service"
                        id="serviceput"
                        name="service"
                        required
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="messageput"
                      >
                        Message
                      </Title>
                      <Input
                        type="text"
                        as="textarea"
                        placeholder="Write your message here"
                        rows={4}
                        id="messageput"
                        name="message"
                        required
                      />
                    </Box>

                    <Button width="100%" type="submit" borderRadius={10}>
                      Send Message
                    </Button>
                  </FormStyled>
                </div>
              </Col>
              <Col lg={8} className="position-static">
                <MapGoogle />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact2;
