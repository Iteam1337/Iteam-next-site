import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
import { Container, Grid } from '../../components/Layout'

export const Feature = ({ content }) => {
  return (
    <>
      <Section pt="0!important">
        <Container>
          <Grid>
            {content.texts.map((item, index) => (
              <Box width={'100%'} bg="light" key={index}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Typography.H3>{item.title}</Typography.H3>
                    <Typography.Paragraph>{item.text}</Typography.Paragraph>
                  </div>
                </div>
              </Box>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}
