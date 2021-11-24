import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { Title, Section, Text, Button } from '../../components/Core'
import { getRouteNameFromPageType } from '../../utils/helpers'
const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
`

const TextContainer = styled.div`
  display: flex;
  width: 60%;
  height: 88%;
  flex-direction: column;
  justify-content: center;
`
const OpenSouceHero = ({ content }) => {
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
              <Text color="dark">{content.subtitle}</Text>
              <Link
                href={getRouteNameFromPageType(content?.cta?.reference?._ref)}
              >
                <Button
                  css={`
                    margin-top: 20px;
                    width: fit-content;
                  `}
                  bg="info"
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

const Wrap = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ top }) => top};
  right: ${({ right }) => right};

  h3 {
    position: absolute;
    font-size: 24px;
    padding: 12.5%;
    text-align: left;
    color: #000;
  }

  svg {
    overflow: visible;
  }

  line {
    stroke-width: 5;
    stroke-linecap: round;
    stroke: ${({ theme }) => theme.colors.info};
  }

  line:nth-of-type(1) {
    stroke-dasharray: 66;
    stroke-dashoffset: 66;
    animation: one 0.5s ease-out forwards;
  }

  line:nth-of-type(2) {
    stroke-dasharray: 254;
    stroke-dashoffset: 254;
    animation: two 0.5s 0.29s ease-out forwards;
  }

  line:nth-of-type(3) {
    stroke-dasharray: 139;
    stroke-dashoffset: 139;
    animation: to-zero 0.5s 0.54s ease-out forwards;
  }

  line:nth-of-type(4) {
    stroke-dasharray: 255;
    stroke-dashoffset: -255;
    animation: to-zero 0.5s 0.98s ease-out forwards;
  }

  line:nth-of-type(5) {
    stroke-dasharray: 68;
    stroke-dashoffset: -68;
    animation: to-zero 0.5s 1.4s linear forwards;
  }

  line:nth-of-type(6) {
    stroke-dasharray: 71;
    stroke-dashoffset: 71;
    animation: to-zero 0.5s 1.89s ease-out forwards;
  }

  line:nth-of-type(7) {
    stroke-dasharray: 207;
    stroke-dashoffset: 207;
    animation: seven 0.5s 2.3s ease-out forwards;
  }

  @keyframes one {
    to {
      stroke-dashoffset: -66;
    }
  }

  @keyframes to-zero {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes seven {
    to {
      stroke-dashoffset: 50;
    }
  }

  @keyframes two {
    to {
      stroke-dashoffset: -210;
    }
  }
`

const BoxSvg = ({ text, top = 0, right = 0 }) => {
  return (
    <Wrap top={top} right={right}>
      <h3>{text}</h3>
      <svg
        width="260"
        height="145"
        viewBox="0 0 260 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="257.5" y1="68.5" x2="257.5" y2="2.5" />
        <line x1="257.5" y1="2.5" x2="3.5" y2="2.50003" />
        <line x1="3.5" y1="2.5" x2="3.5" y2="141.5" />
        <line x1="257.493" y1="142.224" x2="3.49292" y2="141.507" />
        <line x1="257.5" y1="73.5" x2="257.5" y2="141.5" />
        <line x1="257.5" y1="73.5" x2="257.5" y2="2.5" />
        <line x1="257.5" y1="2.5" x2="50.5" y2="2.5" />
      </svg>
    </Wrap>
  )
}

export default OpenSouceHero
