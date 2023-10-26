import React from 'react'

import { Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'
import { CaseFooterSection } from './CaseFooterSection'

export const CaseFooter = ({ sectionCards }) => {
  return (
    <>
      {/* <!-- Feature section --> */}
      <Section bg="#F7F7FB" className="position-relative">
        <Container>
          <Typography.H2 className="sr-only">Mer information</Typography.H2>
          <Flex>
            {sectionCards.map((card, i) => {
              return (
                <div className="tw-mb-5 lg:tw-mb-0" key={i}>
                  <CaseFooterSection
                    alt={card.imageWithAlt.alt}
                    img={urlFor(card.imageWithAlt.asset._ref)}
                    title={card.title}
                    blocks={card.blockText}
                  />
                </div>
              )
            })}
          </Flex>
        </Container>
      </Section>
    </>
  )
}
