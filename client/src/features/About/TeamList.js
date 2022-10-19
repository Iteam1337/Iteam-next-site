import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Typography } from '../../components/Core'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'

export const TeamList = ({ content, coworkers }) => {
  const sortedTeam = coworkers.sort(function (a, b) {
    if (a.fullname < b.fullname) {
      return -1
    }
    if (a.fullname > b.fullname) {
      return 1
    }
    return 0
  })

  return (
    <>
      {/* <!-- Team section --> */}
      <Section className="position-relative pt-5" id="medarbetare">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" className="text-center pb-3">
              <div id="medarbetare" className="">
                <Typography.H2>{content.title}</Typography.H2>
                <Typography.Paragraph>{content.subtitle}</Typography.Paragraph>
              </div>
            </Col>
          </Row>
          <CardList.CardListGrid>
            {sortedTeam.map((coworker) => {
              const {
                slug,
                profilePic,
                fullname,
                status,
                role,
                phoneNumber,
                email,
                socialMedia,
              } = coworker
              return (
                <Card.TeamCard
                  key={slug.current}
                  link={`/about/${slug.current}`}
                  img={profilePic?.image}
                  title={fullname}
                  status={status}
                  role={role}
                  phoneNumber={phoneNumber}
                  email={email}
                  socialMedia={socialMedia}
                  customImgAlt={`Profilbild på ${fullname}`}
                  bgDark={false}
                />
              )
            })}
          </CardList.CardListGrid>
        </Container>
      </Section>
    </>
  )
}
