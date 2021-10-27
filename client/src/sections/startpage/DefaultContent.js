import React from 'react'
import Clients from './Clients'
import CTA from './CTA'
import Faq from './Faq'
import Offerings from './Offerings'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const DefaultContent = ({ data, carousel, ourPricing }) => {
  return (
    <>
      <Offerings data={data.ourOffers} />
      <Testimonial content={carousel} />
      <Clients clients={data.clients} />
      <Pricing content={ourPricing} />
      <Faq content={data.faq} />
      <CTA content={data.titleWithCta} />
    </>
  )
}

export default DefaultContent
