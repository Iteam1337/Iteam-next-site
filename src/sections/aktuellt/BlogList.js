import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box } from "../../components/Core";
import PostCard from "../../components/PostCard";

const Column = (props) => <Col sm={6} lg={4} className="mb-4" {...props} />;

export default function BlogList ({ posts })
{
  return (
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          {posts?.map(({image, date, id, title, intro,}) => (
            <Column key={id}>
              <PostCard img={image} title={title} preTitle={date} link={`/aktuellt/${id}`}>
                {intro}
              </PostCard>
            </Column>
          ))}
        </Row>
      </Container>
    </Section>
  )
}