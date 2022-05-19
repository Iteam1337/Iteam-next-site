import React from 'react'
import styled from 'styled-components'
import Gravatar from 'react-gravatar'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text, Anchor } from '../../components/Core'
import Link from 'next/link'
import { formatPhoneNumber, urlFor } from '../../utils/helpers'
import SocialMediaLinks from './SocialMediaLinks'

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
    .image {
      max-width: 170px;
      min-width: 170px;
      min-height: 170px;
      max-height: 170px;
    }
  }
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
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
      <Wrapper>
        <Anchor href={`/about/${slug.current}`} aria-label={fullname} textDecoration="none">
          <div>
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
              <Title
                variant="card"
                fontSize="24px"
                letterSpacing={-0.75}
                my={1}
              >
                {fullname}
              </Title>
              <Text fontSize={2} pt="9px" lineHeight={1.2}>
                {status}
              </Text>
              <Text fontSize={2} pt="4.5px" pb="9px" lineHeight={1.2}>
                {role}
              </Text>
            </div>
          </div>
        </Anchor>
        <div className="text-center">
          {phoneNumber && (
            <div>
              <Anchor href={`tel:${phoneNumber}`} fontSize="14px" lineHeight="1" textDecoration="none">
                {formatPhoneNumber(phoneNumber)}
              </Anchor>
            </div>
          )}
          {email && (
            <div>
              <Anchor href={`mailto:${email}`} fontSize="14px" lineHeight="1" textDecoration="none">
                {email}
              </Anchor>
            </div>
          )}
          {socialMedia && (
            <SocialMediaLinks socialMedia={socialMedia} fullname={fullname} />
          )}
        </div>
      </Wrapper>
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
                <Text>{content.subtitle}</Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {sortedTeam.map((coworker, index) => (
              <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4" key={index}>
                <TeamCard coworker={coworker} />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Team
