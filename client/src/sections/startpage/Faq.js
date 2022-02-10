import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import BlockContent from '../../components/BlockContent'
import { Title, Section, Box, Text } from '../../components/Core'

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
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }

  a {
    font-weight: 500;
  }
`

const FaqTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
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
                      <FaqTitle>{faq.title}</FaqTitle>
                      <Text variant="small" color="light" opacity={0.7}>
                        <BlockContent
                          anchorColor="secondary"
                          blocks={faq.blockText.blockText}
                          color="light"
                        />
                      </Text>
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
