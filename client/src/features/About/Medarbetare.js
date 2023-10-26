import React from 'react'

import { Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { formatPhoneNumber } from '../../utils/helpers'
import { SocialMediaLinks } from './SocialMediaLinks'

const InfoSection = ({ text, title }) => (
  <Flex className="tw-py-5">
    <div>
      <Typography.H3>{title}</Typography.H3>
    </div>
    <div>
      <Typography.Paragraph>{text}</Typography.Paragraph>
    </div>
  </Flex>
)

export const Medarbetare = ({ info }) => (
  <Container>
    <Section>
      <Typography.H2 className="sr-only">Info</Typography.H2>
      <Flex className="tw-py-5">
        <div>
          <Typography.H3>Kontakt</Typography.H3>
        </div>
        <div>
          {info.phoneNumber && (
            <Typography.Paragraph>
              <Typography.Anchor href={`tel:${info.phoneNumber}`}>
                {formatPhoneNumber(info.phoneNumber)}
              </Typography.Anchor>
            </Typography.Paragraph>
          )}
          <Typography.Paragraph>
            <Typography.Anchor href={`mailto:${info.email}`}>
              {info.email}
            </Typography.Anchor>
          </Typography.Paragraph>
          <Typography.Paragraph>
            {info.socialMedia && (
              <SocialMediaLinks
                socialMedia={info.socialMedia}
                fullname={info.fullname}
                color="info"
              />
            )}
          </Typography.Paragraph>
        </div>
      </Flex>
      {info.answerTech && (
        <InfoSection title={info.whyTech} text={info.answerTech} />
      )}
      {info.backgroundAnswer && (
        <InfoSection title={info.background} text={info.backgroundAnswer} />
      )}
      {info.competenceAnswer && (
        <InfoSection title={info.competence} text={info.competenceAnswer} />
      )}
    </Section>
  </Container>
)
