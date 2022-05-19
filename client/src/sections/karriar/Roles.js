import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section } from '../../components/Core'
import styled from 'styled-components'
import BlockContent from '../../components/BlockContent'

const Card = styled.a`
  justify-content: flex-start;
  min-height: 100%;
  box-shadow: 0 2px 4px rgba(14, 86, 124, 0.17);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  transition: 0.4s;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 32px 84px rgba(14, 86, 124, 0.17);
    text-decoration: none;
  }
`

const Location = styled.span`
  color: #8c97ac;
  font-size: 16px;
  font-weight: 300;
  margin-right: 5px;
  display: flex;
  align-items: flex-start;

  > i {
    margin-top: 4px;
  }
`

const RolesCard = ({
  color = 'primary',
  title,
  location,
  type,
  children,
  link,
  ...rest
}) => (
  <Link href={link}>
    <Card className="card-job top-only" {...rest}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Location>
          <i className="icon icon-pin-3 mr-1" /> {location}
        </Location>
      </div>
      <Title variant="card" className="title" fontWeight={500}>
        {title}
      </Title>
    </Card>
  </Link>
)

const Roles = ({ content, openPositions }) => (
  <>
    <Section bg="#f7f7fb" id="openings">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <div>
              <Title>{content.title}</Title>
              <BlockContent
                variant="thin"
                blocks={content.subtitle.blockText}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5 justify-content-center">
          {openPositions.map((openPosition, index) => (
            <Col lg="4" md="6" className="pt-4" key={index}>
              <RolesCard
                color="warning"
                title={openPosition.title}
                type="Full-time"
                location={openPosition.position}
                link={`/karriar/${openPosition.slug.current}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  </>
)

export default Roles
