import Image from 'next/image'
import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
import { Container } from '../../components/Layout'
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
    className={`d-flex flex-column tw-items-center ${className}`}
    {...rest}
    aos="fade-left"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <Box className="tw-w-[180px] tw-justify-center">
      <Image
        src={urlFor(logo.asset._ref)}
        alt={logo.alt}
        width={277}
        height={150}
        layout="responsive"
      />
    </Box>
    <Typography.Paragraph className="tw-text-light tw-mb-8 tw-mt-8 tw-text-center tw-text-white">
      {children}
    </Typography.Paragraph>
    <Box className={`mt-auto`}>
      <Box className="tw-flex tw-justify-center">
        <div className="tw-relative tw-h-[100px] tw-w-[100px] tw-overflow-hidden tw-rounded-full">
          <Image
            src={urlFor(image.asset._ref)}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Box>
      <Box className="flex-grow-1 text-center" mt={3}>
        <Typography.H3 className="tw-mb-1 tw-text-white">{name}</Typography.H3>
        <Typography.ParagraphSmall className="tw-text-white">
          {role}
        </Typography.ParagraphSmall>
      </Box>
    </Box>
  </Box>
)

export const Reviews = ({ quote }) => {
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
