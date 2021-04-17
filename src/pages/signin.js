import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, Input, Checkbox } from "../components/Core";

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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: ${({ theme }) => theme.colors.secondary} !important;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  text-decoration: none !important;
`;

const SignIn = () => {
  return (
    <>
      <PageWrapper>
        <BoxStyled bg="#f7f8fa">
          <Box>
            <Container>
              <Row className="justify-content-center">
                <Col lg="7" xl="6">
                  <Box className="text-center" pt="40px">
                    <Logo />
                  </Box>
                </Col>
              </Row>
            </Container>
          </Box>
          <BoxInner className="d-flex align-items-center">
            <Container className="text-center">
              <Box my="100px" mx="auto">
                <Row className="justify-content-center">
                  <Col lg="7" xl="6">
                    <FormStyled>
                      <div className="mb-5">
                        <Title className="mb-2">Sign In</Title>
                        <Text>Enter your account details below</Text>
                      </div>
                      <Box mb={3}>
                        <Input type="email" placeholder="Company Email" />
                      </Box>
                      <Box mb={4} className="position-relative">
                        <Input
                          type="password"
                          placeholder="Password"
                          css={`
                            padding-right: 9.25rem;
                          `}
                        />
                        <Link href="/reset-pass">
                          <AForgot>Forgot Password?</AForgot>
                        </Link>
                      </Box>
                      <Box mb={3} className="text-left">
                        <Checkbox>Keep me signed in</Checkbox>
                      </Box>

                      <Button width="100%" type="submit" borderRadius={10}>
                        Get Started
                      </Button>
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
export default SignIn;
