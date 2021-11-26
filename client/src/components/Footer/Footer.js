import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Box } from '../Core'
import Logo from '../Logo'

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) =>
    dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

  padding: 15px 0;
  p {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.light : theme.colors.dark};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`

const Footer = ({ isDark = true, content }) => {
  return (
    <Box bg={isDark ? 'dark' : 'light'}>
      <Container>
        <Box
          css={`
            padding: 80px 0 60px;
          `}
        >
          <Row className="justify-content-center">
            <Col lg="2" md="4">
              <Logo white={isDark} vertical />
            </Col>
            <Col lg="10" md="8" className="mt-5 mt-lg-0">
              <Row>
                <Col xs="6" lg="3">
                  <div className="mb-5 mb-lg-4">
                    <TitleStyled
                      variant="card"
                      color={isDark ? 'light' : 'dark'}
                    >
                      {content?.follow}
                    </TitleStyled>
                    <UlStyled color={isDark ? 'light' : 'dark'}>
                      <li>
                        <a href={content.linkedinLink} target="_blank">
                          <i className="icon icon-logo-linkedin"></i>&nbsp;
                          {content.linkedin}
                        </a>
                      </li>
                      <li>
                        <a href={content.twitterLink} target="_blank">
                          <i className="icon icon-logo-twitter"></i>&nbsp;
                          {content.twitter}
                        </a>
                      </li>
                      <li>
                        <a href={content.facebookLink} target="_blank">
                          <i className="icon icon-logo-facebook"></i>&nbsp;
                          {content.facebook}
                        </a>
                      </li>
                      <li>
                        <a href={content.instagramLink} target="_blank">
                          <i className="icon icon-logo-instagram"></i>&nbsp;
                          {content.instagram}
                        </a>
                      </li>
                    </UlStyled>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="mb-5 mb-lg-4">
                    <TitleStyled
                      variant="card"
                      color={isDark ? 'light' : 'dark'}
                    >
                      {content.visitUs}
                      <br />
                    </TitleStyled>
                    <UlStyled color={isDark ? 'light' : 'dark'}>
                      <li>
                        <a href={content.addressLink} target="_blank">
                          {content.address}
                        </a>
                      </li>
                      <li>
                        <a href={content.org}>{content.orgNumber}</a>
                      </li>
                    </UlStyled>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="mb-lg-4">
                    <TitleStyled
                      variant="card"
                      color={isDark ? 'light' : 'dark'}
                    >
                      {content.contact}
                    </TitleStyled>
                    <UlStyled color={isDark ? 'light' : 'dark'}>
                      <li>
                        <a href={content.contactLink}>{content.contactTitle}</a>
                      </li>
                      <li>
                        <a href={content.applyForJobLink}>
                          {content.applyForJob}
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${content.mailToApplyJob}`}>
                          {content.applyJob}
                        </a>
                      </li>
                    </UlStyled>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Box>
        <CopyRightArea dark={isDark ? 1 : 0}>
          <Row className="align-items-center">
            <Col sm="6" className="text-sm-left text-center mb-2 mb-sm-0">
              <p>
                &copy; 2021 Iteam, All Rights Reserved. Our{' '}
                <a href="/privacy">privacy policy</a>.
              </p>
            </Col>
            <Col sm="6" className="text-sm-right text-center">
              <ul className="social-icons">
                <li>
                  <a href={content.linkedinLink} target="_blank">
                    <i className="icon icon-logo-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href={content.twitterLink} target="_blank">
                    <i className="icon icon-logo-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={content.facebookLink} target="_blank">
                    <i className="icon icon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={content.instagramLink} target="_blank">
                    <i className="icon icon-logo-instagram"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </CopyRightArea>
      </Container>
    </Box>
  )
}

export default Footer
