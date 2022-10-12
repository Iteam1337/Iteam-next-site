import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import HeroImg from '../../assets/image/jpeg/working-hero.jpg'
import { Container } from 'react-bootstrap'
import { Typography, Button, Section } from '../../components/Core'
import { getExternalOrInternalLink } from '../../utils/helpers'

const Wrapper = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${HeroImg.src}) no-repeat center;
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
              <Typography.H1 className="tw-text-white">
                {content.title}
              </Typography.H1>
              <Typography.Paragraph className="tw-text-white">
                <span className="tw-inline tw-whitespace-pre-wrap tw-bg-[rgb(0,0,0,0.7)] tw-box-decoration-clone tw-p-2 tw-leading-[2.46rem]">
                  {content.subtitle}
                </span>
              </Typography.Paragraph>
              {content?.link?.link && (
                <Link href={getExternalOrInternalLink(content.link.link)}>
                  <Button
                    css={`
                      margin-top: 20px;
                      width: fit-content;
                    `}
                    bg="secondary"
                  >
                    {content.link.title}
                  </Button>
                </Link>
              )}
            </TextContainer>
          </Container>
        </Section>
      </Wrapper>
    </div>
  )
}

export default RecruteHero
