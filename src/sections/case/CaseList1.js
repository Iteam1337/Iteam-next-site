import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { caseItems } from "../../data/caseItems"
import { Section } from "../../components/Core"
import PostCard from "../../components/PostCard"

const Column = (props) => <Col sm={6} lg={4} className="mb-4" {...props} />
const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row>
          {caseItems.map((item, i) => (
            <Column key={i}>
              <PostCard img={item.img} title={item.client} link={item.link}>
                {item.intro}
              </PostCard>
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  </>
)

export default CaseList
