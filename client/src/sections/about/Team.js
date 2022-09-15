import React from 'react'
import styled from 'styled-components'
import Gravatar from 'react-gravatar'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Anchor, Typography } from '../../components/Core'
import { formatPhoneNumber, urlFor } from '../../utils/helpers'
import SocialMediaLinks from './SocialMediaLinks'
import Card from '../../components/Card'

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`

const Wrapper = styled.div`
  height: auto;
  &:hover {
    cursor: pointer;
  }
`

const ContactAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
  }
`

const StyledCol = styled(Col)`
  &:hover {
    box-shadow: ${({ theme }) => `0 5px 25px ${theme.colors.shadow}`};
  }
  &:focus-within {
    box-shadow: ${({ theme }) => `0 5px 25px ${theme.colors.shadow}`};
  }
`

const TeamCard = ({ coworker }) => {
  const {
    phoneNumber,
    email,
    fullname,
    status,
    role,
    slug,
    profilePic,
    socialMedia,
  } = coworker
  return (
    <Box className="text-center" pt="15px" px="30px" borderRadius={10} mb={4}>
      <ContactAnchor href={`/about/${slug.current}`} aria-label={fullname}>
        <Wrapper>
          <CardImage className="image">
            {profilePic ? (
              <img
                src={urlFor(profilePic.image.asset._ref)}
                alt={`Profilbild på ${fullname}`}
                className="img-fluid"
                style={{ width: 200, height: 200, objectFit: 'cover' }}
              />
            ) : (
              <Gravatar email={email} className="img-fluid" size={200} />
            )}
          </CardImage>
          <div className="text-center">
            <Title variant="card">{fullname}</Title>
            <Typography.Caption additionalClassName="tw-p-1">
              {status}
            </Typography.Caption>
            <Typography.Caption additionalClassName="tw-pb-2">
              {role}
            </Typography.Caption>
          </div>
          <div className="text-center d-flex flex-column">
            {phoneNumber && (
              <ContactAnchor
                href={`tel:${phoneNumber}`}
                fontSize="14px"
                lineHeight="1.3"
              >
                {formatPhoneNumber(phoneNumber)}
              </ContactAnchor>
            )}
            {email && (
              <ContactAnchor
                href={`mailto:${email}`}
                fontSize="14px"
                lineHeight="1.3"
              >
                {email}
              </ContactAnchor>
            )}
            {socialMedia && (
              <div className="pt-2">
                <SocialMediaLinks
                  socialMedia={socialMedia}
                  fullname={fullname}
                />
              </div>
            )}
          </div>
        </Wrapper>
      </ContactAnchor>
    </Box>
  )
}

const Team = ({ content, coworkers }) => {
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
                <Title>{content.title}</Title>
                <Typography.Paragraph>{content.subtitle}</Typography.Paragraph>
              </div>
            </Col>
          </Row>
          <ul className="justify-content-center">
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
                />
              )
            })}
          </ul>
        </Container>
      </Section>
    </>
  )
}

export default Team
