import React from 'react'
import styled from 'styled-components'

import { Box, Section, Typography } from '../../components/Core'
import { Container } from '../../components/Layout'

const SectionStyled = styled(Section)`
  padding: 90px 0;
`

const FaqCard = styled(Box)`
  padding-left: 55px;
  position: relative;
  &::before {
    content: '\f061';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.dark};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }
`

export const Faq = ({ content }) => {
  return (
    <>
      {/* <!-- Faq section --> */}
      <SectionStyled bg="dark">
        <Container>
          <div className="tw-flex tw-grid-flow-row tw-gap-8 md:tw-grid-cols-2 [@supports(display:grid)]:tw-grid">
            {content.map((faq, index) => {
              return (
                <div className="tw-w-50" key={index}>
                  <FaqCard>
                    <Typography.H3 className="tw-text-xl tw-text-white">
                      {faq.title}
                    </Typography.H3>
                    <Typography.BlockContent
                      light
                      blocks={faq.blockText.blockText}
                    />
                  </FaqCard>
                </div>
              )
            })}
          </div>
        </Container>
      </SectionStyled>
    </>
  )
}
