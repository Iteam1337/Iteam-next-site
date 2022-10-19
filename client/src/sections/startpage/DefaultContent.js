import React from 'react'

import { Clients } from './Clients'
import { CTA } from './CTA'
import { Faq } from './Faq'
import { Offerings } from './Offerings'
import { Testimonial } from '../../sections/Testimonial'
import { Pricing } from '../../sections/Pricing'

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
