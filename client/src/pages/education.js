import React from 'react'
import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/education/Hero'
import Content1 from '../sections/education/Content1'
import Feature from '../sections/education/Feature'
import Content2 from '../sections/education/Content2'
import Content3 from '../sections/education/Content3'
import Testimonial from '../sections/education/Testimonial'
import CTA from '../sections/education/CTA'

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Content1 />
        <Feature />
        <Content2 />
        <Content3 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  )
}
export default LandingPage2
