import React from 'react'
import Clients from './Clients'
import CTA from './CTA'
import Faq from './Faq'
import Offerings from './Offerings'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const DefaultContent = ({ data, carousel }) => {
  console.log(carousel)
  return (
    <>
      <Offerings data={data.ourOffers} />
      <Testimonial content={carousel} />
      <Clients />
      <Pricing />
      <Faq />
      <CTA />
    </>
  )
}

export default DefaultContent
