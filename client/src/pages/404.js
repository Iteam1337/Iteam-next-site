import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { rgba } from 'polished'
import Section from '../components/Section'
import PageWrapper from '../components/PageWrapper'

import imgIcon from '../assets/image/png/heart-shape.png'
import { Typography } from '../components/Core'

const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`

const ButtonStyled = styled.button`
  min-width: 250px;
  min-height: 60px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  transition: 0.4s;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: none;
    outline: none;
  }
`

const NotFoundPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <div className="text-center">
              <ContentIcon>
                <img src={imgIcon} alt="" className="img-fluid" />
              </ContentIcon>
              <div>
                <Typography.H1>404 Error!</Typography.H1>
                <Typography.Paragraph>
                  The page you are looking for is not available or doesn’t
                  <br className="d-none d-md-block" /> belong to this website!
                </Typography.Paragraph>
              </div>
              <div className="mt-5">
                <Link href="/">
                  <a>
                    <ButtonStyled>Go back to home</ButtonStyled>
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}

export default NotFoundPage
