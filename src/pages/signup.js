import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, Input, Checkbox } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Logo from "../components/Logo";
import { device } from "../utils";

const BoxStyled = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BoxInner = styled(Box)`
  margin-top: -65px;
  min-height: 100vh;
`;

const FormStyled = styled.form`
  padding: 40px 30px;
  @media ${device.sm} {
    padding: 53px 58px 50px;
  }
  box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
`;

const AForgot = styled.a`
  color: ${({ theme }) => theme.colors.secondary} !important;
  text-decoration: none !important;
`;

const SignUp = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="7" xl="6">
                  <Box pt="40px" className="text-center">
                    <Logo />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <BoxInner>
            <Container className="text-center">
              <Box my="150px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled>
                      <div className="mb-5">
                        <Title className="mb-2">Sign Up</Title>
                        <Text>No credit card required</Text>
                      </div>
                      <Box mb={3}>
                        <Input type="email" placeholder="Email address" />
                      </Box>
                      <Box mb={3}>
                        <Input type="text" placeholder="Company name" />
                      </Box>
                      <Box mb={4} className="position-relative">
                        <Input type="password" placeholder="Password" />
                      </Box>
                      <Box mb={3} className="text-left">
                        <Checkbox>
                          I agree to the{" "}
                          <Link href="/">
                            <AForgot>Terms & Condition</AForgot>
                          </Link>
                        </Checkbox>
                      </Box>

                      <Button width="100%" type="submit" borderRadius={10}>
                        Get Started
                      </Button>
                      <Box mt={3}>
                        Already have an account?{" "}
                        <Link href="/signin">
                          <AForgot>Sign in</AForgot>
                        </Link>
                      </Box>
                    </FormStyled>
                  </Col>
                </Row>
              </Box>
            </Container>
          </BoxInner>
        </BoxStyled>
      </PageWrapper>
    </>
  );
};
export default SignUp;
