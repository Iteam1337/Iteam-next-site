import React from 'react'
import styled from 'styled-components'

import { Box, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { device } from '../../utils'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #2d2d30;
  padding-bottom: 30px;
  padding-top: 0;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`

export const Fact = ({ content }) => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="dark">
      <Container>
        <Flex>
          {content.texts.map((item, index) => (
            <div className="tw-mb-4 md:tw-mb-0" key={index}>
              <Box>
                <Typography.H2 className="tw-mb-6 tw-text-white">
                  {item.title}
                </Typography.H2>
                <Typography.Paragraph className="tw-text-white">
                  {item.text}
                </Typography.Paragraph>
              </Box>
            </div>
          ))}
        </Flex>
      </Container>
    </SectionStyled>
  </>
)
