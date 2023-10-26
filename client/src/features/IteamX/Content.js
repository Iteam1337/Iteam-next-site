import React from 'react'
import styled from 'styled-components'

import { ContentCard } from '../../components/ContentCard'
import { Section, Span, Typography } from '../../components/Core'
import { Container, Grid } from '../../components/Layout'

const SectionStyled = styled(Section)``

const tech = [
  'Blockkedjor',
  'Applicerad AI',
  'Data pipelines',
  'Krypteringslösningar',
  'Digitala tvillingar',
  'Machine Learning',
  'Drönarteknik',
  'VR/AR',
  'Datavisualisering',
]

export const Content = ({ content }) => {
  const title = content.title.split('en hypotes.')
  return (
    <>
      {/* <!-- Content section --> */}
      <SectionStyled bg="dark">
        <Container>
          <Typography.H2 className="tw-text-center tw-text-white">
            {title[0]}
            <Span color="secondary">en hypotes.</Span> {title[1]}
          </Typography.H2>
          <Grid className="tw-mt-20 tw-justify-center">
            {tech.map((item, i) => (
              <ContentCard key={i} title={item} dark />
            ))}
          </Grid>
        </Container>
      </SectionStyled>
    </>
  )
}
