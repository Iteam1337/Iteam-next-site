import React from 'react'

import { Clients } from './Clients'
import { CTA } from './CTA'
import { Faq } from './Faq'
import { Offerings } from './Offerings'
import { Testimonial, Pricing } from '../../sections/common'

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
