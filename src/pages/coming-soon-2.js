import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  InputGroup,
} from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device, addDays } from "../utils";
import Logo from "../components/Logo";
import CountDown from "../components/CountDown";

const BoxStyled = styled(Box)`
  min-height: 100vh;
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
    color: ${({ theme }) => theme.colors.dark} !important;
    font-size: 23px;
    transform: translateY(0);

    padding: 0 3px;
    margin: 0 12px;
    transition: all 0.4s ease-out;
    &:hover {
      transform: translateY(-3px);
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
    &:visited {
      text-decoration: none;
    }
  }
`;

const ComingSoon2 = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled>
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="10" xl="8">
                  <Box className="text-center" pt="40px">
                    <Logo />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="8">
                  <Section>
                    <div>
                      <Title>
                        We are coming with <br className="d-none d-md-block" />{" "}
                        something big for you!
                      </Title>
                      <Text>
                        Create custom landing pages with Omega that converts
                        more visitors than any website. You can easily build a
                        page now.
                      </Text>
                    </div>
                    <Box mt={4}>
                      <CountDown date={addDays(12)} />
                    </Box>
                    <Box mt={4}>
                      <Text fontSize="18px" color="dark">
                        Stay tuned, early subscribers will receive goodies.
                      </Text>
                      <form action="/">
                        <Box
                          maxWidth="480px"
                          mx="auto"
                          mt={3}
                          className="position-relative"
                        >
                          <InputGroup
                            icon={<i className="icon icon-email-84" />}
                            placeholder="Email address"
                            css={`
                              @media${device.sm} {
                                padding-right: 210px;
                              }
                            `}
                          />
                          <Button
                            css={`
                              margin-top: 1rem;
                              @media${device.sm} {
                                margin-top: 0;
                                position: absolute;
                                top: 50%;
                                right: 5px;
                                transform: translateY(-50%);
                              }
                            `}
                          >
                            Notify Me!
                          </Button>
                        </Box>
                      </form>
                    </Box>
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
export default ComingSoon2;
