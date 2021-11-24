import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import HeroImg from '../../assets/image/jpeg/working-hero.jpg'
import { Container } from 'react-bootstrap'
import { Title, Text, Button, Section } from '../../components/Core'
import { getRouteNameFromPageType } from '../../utils/helpers'
const Wrapper = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${HeroImg}) no-repeat center;
  background-position: center;
  background-size: cover;
  height: 100vh;
`

const TextContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 780px) {
    width: 80%;
    height: 88%;
  }
`

const TextBg = styled.span`
  display: inline;
  background: rgba(0, 0, 0, 0.6);
  padding: 7px;
  white-space: pre-wrap;
  box-decoration-break: clone;
`

const RecruteHero = ({ content }) => {
  return (
    <div>
      <Wrapper>
        <Section>
          <Container
            css={`
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
            `}
          >
            <TextContainer>
              <Title variant="hero" color="light">
                {content.title}
              </Title>
              <Text color="light">
                <TextBg>{content.subtitle}</TextBg>
              </Text>
              <Link
                href={getRouteNameFromPageType(content?.cta?.reference?._ref)}
              >
                <Button
                  css={`
                    margin-top: 20px;
                    width: fit-content;
                  `}
                  bg="primary"
                  color="light"
                >
                  {content.cta.title}
                </Button>
              </Link>
            </TextContainer>
          </Container>
        </Section>
      </Wrapper>
    </div>
  )
}

export default RecruteHero
