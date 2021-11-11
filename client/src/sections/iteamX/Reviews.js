import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Box, Text } from '../../components/Core'
import { urlFor } from '../../utils/helpers'

const ContentCard = ({
  className,
  logo,
  image,
  name,
  role,
  children,
  ...rest
}) => (
  <Box
    minHeight={['320px', null, `400px`]}
    borderColor="border"
    borderRadius={10}
    className={`d-flex flex-column ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <Box className="text-center">
      <img
        src={urlFor(logo.asset._ref)}
        alt={logo.alt}
        className="img-fluid"
        css={'filter: opacity(30%); height: 100px;'}
      />
    </Box>
    <Text color="light" mt={4} className="text-center mb-4">
      {children}
    </Text>
    <Box className={`mt-auto`}>
      <Box className="text-center">
        <img
          src={urlFor(image.asset._ref)}
          alt={image.alt}
          className="img-fluid"
          css={`
            height: 100px;
            border-radius: 500px;
          `}
        />
      </Box>
      <Box className="flex-grow-1 text-center" mt={3}>
        <Title color="light" variant="card" mb={1}>
          {name}
        </Title>
        <Text variant="small" color="lightShade" opacity={0.5}>
          {role}
        </Text>
      </Box>
    </Box>
  </Box>
)

const Reviews = ({ quote }) => {
  return (
    <>
      <Section bg="dark">
        <Container>
          <Row className="justify-content-center mt-3">
            <Col lg="4" md="6" className="mb-5 mb-lg-0">
              <ContentCard
                name={quote.name}
                role={quote.role}
                image={quote.image}
                logo={quote.logo}
              >
                {quote.quote}
              </ContentCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Reviews
