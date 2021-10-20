import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Text, Anchor } from '../../components/Core'
import { formatPhoneNumber } from '../../utils/helpers'

const InfoSection = ({ text, title }) => (
  <Row className="py-5">
    <Col md={8} lg={6}>
      <Title variant="card">{title}</Title>
    </Col>
    <Col md={8} lg={6}>
      <Text>{text}</Text>
    </Col>
  </Row>
)

const Medarbetare = ({ info }) => (
  <Container>
    <Section>
      <Row className="py-5">
        <Col md={8} lg={6}>
          <Title variant="card">Kontakt</Title>
        </Col>
        <Col md={8} lg={6}>
          {info.phoneNumber && (
            <Text>
              <Anchor href={`tel:${info.phoneNumber}`} color="info">
                {formatPhoneNumber(info.phoneNumber)}
              </Anchor>
            </Text>
          )}
          <Text>
            <Anchor href={`mailto:${info.email}`} color="info">
              {info.email}
            </Anchor>
          </Text>
          <Text>
            {info.socialMedia &&
              Object.entries(info.socialMedia).map(([key, value], index) => {
                return (
                  <Fragment key={index}>
                    {index !== 0 && ' | '}
                    {key !== 'website' ? (
                      <Anchor
                        href={value}
                        color="info"
                        aria-label={`${key} - ${info.fullname}`}
                      >
                        <i
                          className={`fab fa-${key}`}
                          aria-hidden="true"
                          title={`${key} - ${info.fullname}`}
                        />
                      </Anchor>
                    ) : (
                      <Anchor
                        href={value}
                        color="info"
                        aria-label={`Webbsida - ${info.fullname}`}
                      >
                        <i className="fas fa-globe" />
                      </Anchor>
                    )}
                  </Fragment>
                )
              })}
          </Text>
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

export default Medarbetare
