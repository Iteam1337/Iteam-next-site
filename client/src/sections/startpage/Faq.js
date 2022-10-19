import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'

const SectionStyled = styled(Section)`
  padding-top: 90px;
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
      <SectionStyled bg="dark" pb="0 !important">
        <Container>
          <Row>
            {content.map((faq, index) => {
              return (
                <Col lg="6" className="mb-5" key={index}>
                  <FaqCard>
                    <div>
                      <Typography.H3 className="tw-text-xl tw-text-white">
                        {faq.title}
                      </Typography.H3>
                      <Typography.BlockContent
                        light
                        blocks={faq.blockText.blockText}
                      />
                    </div>
                  </FaqCard>
                </Col>
              )
            })}
          </Row>
        </Container>
      </SectionStyled>
    </>
  )
}
