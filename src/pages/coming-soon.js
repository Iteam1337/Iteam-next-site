import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Logo from "../components/Logo";
import imgBg from "../assets/image/jpeg/coming-soon-bg.jpg";

const BoxStyled = styled(Box)`
  background-image: url(${imgBg});
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled(Box)`
  justify-content: flex-end;
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  padding: 0;
  a {
    display: inline-block;
    color: #f7f7fb !important;
    font-size: 23px;
    transform: translateY(0);

    padding: 0 3px;
    margin: 0 12px;
    transition: all 0.4s ease-out;
    &:hover {
      transform: translateY(-3px);
      color: #f7f7fb !important;
    }
    &:visited {
      text-decoration: none;
    }
  }
`;

const ComingSoon = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled>
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="10" xl="8">
                  <Box className="text-center" pt="40px">
                    <Logo white />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="10" xl="8">
                  <Section>
                    <div>
                      <Title color="light">
                        Get beautiful landing{" "}
                        <br className="d-none d-md-block" /> page templates for
                        free.
                      </Title>
                      <Text color="lightShade">
                        Create custom landing pages with Omega that converts
                        more visitors than any website. With lots of unique
                        blocks, you can easily build a page.
                      </Text>
                    </div>
                    <div className="mt-5">
                      <Text color="lightShade">
                        Stay tuned, early subscribers will receive goodies.
                      </Text>
                      <form
                        css={`
                          margin: 0 auto;
                          max-width: 413px;
                        `}
                      >
                        <Box my={3}>
                          <Input
                            type="email"
                            placeholder="Email address"
                            className="text-center"
                          />
                        </Box>
                        <Box mb={3}>
                          <Button width="100%">Notify Me!</Button>
                        </Box>
                      </form>
                    </div>
                  </Section>
                </Col>
              </Row>
            </Container>
          </Box>

          <Footer pb="70px">
            <Container>
              <SocialList>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-google-plus-square"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </SocialList>
            </Container>
          </Footer>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default ComingSoon;
