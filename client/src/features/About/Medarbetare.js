import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Section, Typography } from '../../components/Core'
import { Container } from '../../components/Layout'
import { formatPhoneNumber } from '../../utils/helpers'
import { SocialMediaLinks } from './SocialMediaLinks'

const InfoSection = ({ text, title }) => (
  <Row className="py-5">
    <Col md={8} lg={6}>
      <Typography.H3>{title}</Typography.H3>
    </Col>
    <Col md={8} lg={6}>
      <Typography.Paragraph>{text}</Typography.Paragraph>
    </Col>
  </Row>
)

export const Medarbetare = ({ info }) => (
  <Container>
    <Section>
      <Typography.H2 className="sr-only">Info</Typography.H2>
      <Row className="py-5">
        <Col md={8} lg={6}>
          <Typography.H3>Kontakt</Typography.H3>
        </Col>
        <Col md={8} lg={6}>
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
        </Col>
      </Row>
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
