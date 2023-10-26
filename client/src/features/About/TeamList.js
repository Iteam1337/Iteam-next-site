import React from 'react'

import { Section, Typography } from '../../components/Core'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { Container } from '../../components/Layout'

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
        <Container className="tw-justify-center tw-text-center">
          <div id="medarbetare" className="tw-mb-8">
            <Typography.H2>{content.title}</Typography.H2>
            <Typography.Paragraph>{content.subtitle}</Typography.Paragraph>
          </div>
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
