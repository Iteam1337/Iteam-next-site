import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Button, Section, Box, Text, Span } from '../../components/Core'

import { device } from '../../utils'

import imgHero from '../../assets/image/png/l6-hero-image.png'
import imgAuthor from '../../assets/image/jpeg/l6-author-image.jpg'

const ImgRight = styled(Box)`
  max-width: 80%;
  margin-left: -35px;
  @media ${device.sm} {
    max-width: unset;
    margin-left: -35px;
    position: relative;
    left: -35px;
  }
  @media ${device.md} {
    margin-left: -85px;
    position: relative;
    left: -35px;
  }
`

const ULStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 0;
  padding-left: 0;

  li {
    &:nth-child(odd) {
      @media ${device.sm} {
        margin-right: 40px;
      }
    }
    color: #19191b;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
    line-height: 50px;
    display: flex;
    margin-bottom: 5px;

    &:before {
      content: '\f00c';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      display: inline-block;
      font-size: 13px;
      width: 30px;
      min-width: 30px;
      height: 30px;
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 500px;
      color: ${({ theme }) => theme.colors.secondary};
      position: relative;
      top: 10px;
      margin-right: 13px;
    }
  }
`

const BoxStyled = styled(Box)`
  border-bottom: 1px solid #eae9f2;
  padding-top: 17px;
  padding-bottom: 45px;

  @media ${device.md} {
    padding-top: 90px;
    padding-bottom: 85px;
  }
`

const AuthorWidget = styled(Box)`
  display: flex;
  flex-direction: column;

  @media ${device.sm} {
    flex-direction: row;
  }

  @media ${device.lg} {
    padding-left: 90px;
    padding-right: 90px;
  }
`

const AuthorImage = styled(Box)`
  min-width: 111px;
  max-width: 111px;
  height: 111px;
  border-radius: 500px;
  overflow: hidden;
`

const AuthorText = styled(Box)`
  padding-top: 20px;

  @media ${device.sm} {
    padding-left: 30px;
    padding-top: 0px;
  }
`

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/shell.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const form = useRef()

  const openForm = () => {
    hbspt.forms.create({
      region: 'na1',
      portalId: '5211588',
      target: '#' + form.current.id,
      formId: '7d3129b6-d7ff-48e7-8a84-4b69aa00e03c',
    })
  }

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="#f6f6f8" className="position-relative" pb="30px !important">
        <div className="pt-5"></div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col
              lg="4"
              xl="5"
              className="position-static"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <ImgRight>
                <img src={imgHero} alt="" className="img-fluid" />
              </ImgRight>
            </Col>
            <Col lg="8" xl="7">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box pt={[4, null, null, 0]} pl={5}>
                  <Title>
                    Guide till <br className="d-none d-sm-block" />
                    Agil Coachning.
                  </Title>
                  <Box mb={3}>
                    <ULStyled>
                      <li>Hur ska produktägare agera när teamet stormar?</li>
                      <li>Agila Teamets utvecklingsfaser</li>
                      <li>Summering av agila metoder (XP, Scrum, Kanban)</li>
                      <li>Konflikthantering för att xx yy</li>
                    </ULStyled>
                  </Box>
                  <div className="d-flex flex-column align-items-start pt-2">
                    <Button onClick={openForm} mb={2}>
                      Ladda ner PDF
                    </Button>
                    <div ref={form}></div>

                    <Text fontSize={'18px'} color="ash" fontWeight={500}>
                      Osäker?{' '}
                      <a href="/" target="blank">
                        <Span color="secondary">Ladda ner förhandsvisning</Span>
                      </a>
                    </Text>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <BoxStyled bg="#f6f6f8">
        <Container>
          <Row className="align-items-center justify-content-center position-relative">
            <Col lg="12" xl="10">
              <AuthorWidget>
                <AuthorImage
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  <img src={imgAuthor} alt="" className="img-fluid" />
                </AuthorImage>
                <AuthorText
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  <Text color="dark" className="font-italic">
                    “OMG! I cannot believe that I have got a brand new landing
                    page after getting Omega. It was super easy to edit and
                    publish.”
                  </Text>
                  <Title variant="card" mt={3}>
                    Jonathan Taylor
                  </Title>
                </AuthorText>
              </AuthorWidget>
            </Col>
          </Row>
        </Container>
      </BoxStyled>
    </>
  )
}

export default Hero
