import React from 'react'
import { Container } from 'react-bootstrap'

import { Box } from '../../components/Core'
import Card from '../../components/Card'
import CardList from '../../components/CardList'

const CaseStudies = ({ cases }) => {
  const formatPreviewDescription = (description) => {
    let trimmedDescription = description.slice(0, 150)
    trimmedDescription = trimmedDescription.slice(
      0,
      Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' '))
    )
    return `${trimmedDescription} (…)`
  }

  const formatTags = (tags) =>
    tags && tags.map((tag, i) => `${tag}${i < tags.length - 1 ? ', ' : ''}`)

  return (
    <>
      {/* <!-- Content section --> */}
      <Box bg="dark">
        <Container className="pt-5">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <CardList>
              {cases.map((item) => {
                return (
                  <Card.PostCard
                    key={item.title}
                    link={`/case/${item.slug.current}`}
                    img={item.preview.imageCard.image}
                    preTitle={formatTags(item.tags)}
                    title={item.title}
                    variant="secondary"
                    bgDark={true}
                  >
                    {formatPreviewDescription(
                      item.preview.imageCard.description
                    )}
                  </Card.PostCard>
                )
              })}
            </CardList>
          </div>
        </Container>
      </Box>
    </>
  )
}

export default CaseStudies
