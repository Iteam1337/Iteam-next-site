import React from 'react'

import { Pricing } from '../Pricing'
import { Testimonial } from '../Testimonial'
import { Clients } from './Clients'
import { CTA } from './CTA'
import { Faq } from './Faq'
import { Offerings } from './Offerings'

export const DefaultContent = ({ data, carousel, ourPricing }) => {
  return (
    <>
      <Offerings data={data.ourOffers} />
      <Testimonial bg content={carousel} />
      <Clients clients={data.clients} />
      <Pricing content={ourPricing} />
      <Faq content={data.faq} />
      <CTA content={data.titleWithCta} />
    </>
  )
}
