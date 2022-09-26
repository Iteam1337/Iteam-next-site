import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import BlockContent from '../../components/BlockContent'
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

const Faq = ({ content }) => {
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
                      <Typography.H3 additionalClassName="tw-text-white tw-text-xl">
                        {faq.title}
                      </Typography.H3>
                      <BlockContent
                        additionalClassName="tw-text-white"
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

export default Faq
