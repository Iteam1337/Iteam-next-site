import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device } from "../utils";

import Logo from "../components/Logo";

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

const ResetPass = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa" minHeight="100vh">
          <Box>
            <Container className="text-center">
              <Row className="justify-content-center">
                <Col lg="8" xl="7">
                  <Box pt="40px" className="text-center">
                    <Logo />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <BoxInner className="d-flex align-items-center">
            <Container>
              <Box my="100px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="8" xl="7">
                    <FormStyled>
                      <div className="mb-5 text-center">
                        <Title className="mb-2">Forgot password?</Title>
                        <Text>Enter your details to recieve a reset link</Text>
                      </div>
                      <Box mb={3}>
                        <Input type="email" placeholder="Email address" />
                      </Box>

                      <Button width="100%" type="submit" borderRadius={10}>
                        Send Reset Link
                      </Button>
                      <Box mt={3}>
                        Remember password?{" "}
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
export default ResetPass;
