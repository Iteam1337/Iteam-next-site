import { rgba } from 'polished'
import React, { useState } from 'react'
import styled from 'styled-components'

import {
  Badge,
  Box,
  CTALink,
  Section,
  Switch,
  Typography,
} from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { device } from '../../utils'
import { buildInternalUrl } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  position: relative;
  &::after {
    content: '';
    left: 0;
    bottom: 0;
    height: 30%;
    width: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.dark}!important;
  }
`

const ULStyled = styled.ul`
  list-style: none;
  margin: 30px auto 0;
  padding: 40px;
  text-align: left;

  @media ${device.sm} {
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.lg} {
    justify-content: space-between;
  }

  li {
    color: #19191b;
    font-size: 21px;
    font-weight: 300;
    letter-spacing: -0.66px;
    line-height: 50px;
    display: flex;
    margin-bottom: 5px;
    width: 100%;

    &:before {
      content: '\f00c';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      display: inline-block;
      font-size: 13px;
      width: 30px !important;
      height: 30px;
      background-color: ${({ theme }) => theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 500px;
      color: ${({ theme }) => theme.colors.dark};
      position: relative;
      top: 9px;
      margin-right: 13px;
      flex-shrink: 0;
    }
  }
`

const CardPricing = styled(Box)`
  box-shadow: ${({ theme }) =>
    `0 52px 54px ${rgba(theme.colors.shadow, 0.125)}`};
  background-color: #fff;
  padding-top: 30px;
`

const Currency = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 30px;
  font-weight: 300;
  letter-spacing: -0.52px;
  line-height: 1;
  margin-bottom: 5px;
`

const TimePer = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 30px;
  font-weight: 300;
  letter-spacing: -0.52px;
  line-height: 1;
  margin-bottom: 5px;
`

export const Pricing = ({ content }) => {
  const [timeMonthly, setTimeMonthly] = useState(true)
  return (
    <>
      <SectionStyled bg="#F7F7FB" pt="90px !important" pb="0 !important">
        <Container className="tw-relative tw-z-10">
          <Flex>
            <div className=" text-center" id="pricing">
              <Typography.H2>{content.section.title}</Typography.H2>
              <Typography.BlockContent
                blocks={content.section.blockText.blockText}
              />
            </div>
          </Flex>
          <div className="tw-pt-4 tw-text-center md:tw-pt-6">
            <div className="tw-mb-6 tw-inline-flex tw-flex-col tw-items-center tw-justify-between tw-gap-3 md:tw-mb-8 md:tw-flex-row">
              <Typography.Paragraph>{content.onGoing}</Typography.Paragraph>
              <Switch onClick={() => setTimeMonthly(!timeMonthly)} />
              <div className="tw-flex tw-items-center">
                <Typography.Paragraph>{content.agreement}</Typography.Paragraph>
                <Badge ml={2}>{content.discount}</Badge>
              </div>
            </div>
            <Flex center>
              <CardPricing className="tw-rounded-md">
                <div className="mb-4">
                  <Typography.H3 className="tw-pb-2 tw-text-base tw-font-light">
                    {content.team}
                  </Typography.H3>
                  <div className="d-flex align-items-end justify-content-center my-3">
                    <Currency>{content.value}</Currency>
                    <Typography.Paragraph className="tw-mb-[-5px] tw-mr-1 tw-text-7xl tw-font-bold tw-leading-none tw-tracking-tighter">
                      {timeMonthly ? content.price : content.priceOngoing}
                    </Typography.Paragraph>
                    <TimePer>/h</TimePer>
                  </div>
                  <Typography.ParagraphSmall>
                    {content.priceIncluding}
                  </Typography.ParagraphSmall>
                  <ULStyled>
                    {content.includes.map((include, i) => (
                      <li key={i}>{include}</li>
                    ))}
                  </ULStyled>
                </div>
                <CTALink
                  href={buildInternalUrl(content.cta.reference)}
                  text={content.cta.title}
                  className="tw-relative tw-top-0.5 tw-w-full"
                  bottomRounded={true}
                />
              </CardPricing>
            </Flex>
          </div>
        </Container>
      </SectionStyled>
    </>
  )
}
