import Image from 'next/image'
import React from 'react'

import imgCtaBG from '../../assets/image/jpeg/Fanny-Flowers-Lowres.jpg'
import { Section } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { HubspotForm } from '../../features/HubspotForm'

export const CTA = () => (
  <Section bg="ash" id="book">
    <Container>
      <Flex center>
        <div className="tw-relative tw-mb-6 tw-w-full lg:tw-mb-0">
          <div className="tw-overflow-hidden tw-rounded-md">
            <Image
              src={imgCtaBG.src}
              alt="En person med en stor bukett blommor"
              width={1001}
              height={1500}
              layout="responsive"
            />
          </div>
        </div>
        <HubspotForm value="scaleup" title="Hur kan vi hjälpa dig?" />
      </Flex>
    </Container>
  </Section>
)
