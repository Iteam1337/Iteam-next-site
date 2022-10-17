import React from 'react'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { rgba } from 'polished'

import Section from '../components/Section'
import PageWrapper from '../components/PageWrapper'
import imgIcon from '../assets/image/png/heart-shape.png'
import { CTALink, Typography } from '../components/Core'

const ContentIcon = styled.div`
  width: 118px;
  height: 118px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`

const NotFoundPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <div className="text-center">
              <ContentIcon>
                <Image
                  src={imgIcon}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={46}
                />
              </ContentIcon>
              <div>
                <Typography.H1>404 Error!</Typography.H1>
                <Typography.Paragraph>
                  The page you are looking for is not available or doesn’t
                  <br className="d-none d-md-block" /> belong to this website!
                </Typography.Paragraph>
              </div>
              <CTALink
                href="/"
                text="Go back to home"
                className="tw-mt-8"
                variant="secondary"
              />
            </div>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}

export default NotFoundPage
