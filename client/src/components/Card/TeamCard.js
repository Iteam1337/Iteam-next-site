import React from 'react'
import client from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Gravatar from 'react-gravatar'

import SocialMediaLinks from '../../sections/about/SocialMediaLinks'
import { formatPhoneNumber } from '../../utils/helpers'
import { Anchor, Typography } from '../Core'
import { BaseCard } from './BaseCard'

const TeamCardImage = ({ img, email, customImgAlt }) => {
  const imageProps = useNextSanityImage(client, img?.asset._ref)
  return (
    <div className="tw-flex tw-justify-center">
      <div className="tw-mt-8 tw-max-h-[160px] tw-min-h-[160px] tw-min-w-[160px] tw-max-w-[160px] tw-overflow-hidden tw-rounded-full">
        {img ? (
          <img
            {...imageProps}
            alt={customImgAlt ? customImgAlt : img.alt}
            className="tw-order-1 tw-h-full tw-w-full tw-object-cover"
          />
        ) : (
          <Gravatar
            email={email}
            className="tw-order-1 tw-h-auto tw-max-w-full"
            size={200}
          />
        )}
      </div>
    </div>
  )
}

export const TeamCard = ({
  link,
  fullname,
  img,
  title,
  status,
  role,
  phoneNumber,
  email,
  socialMedia,
  customImgAlt,
  bgDark,
}) => {
  return (
    <BaseCard
      link={link}
      img={
        <TeamCardImage img={img} email={email} customImgAlt={customImgAlt} />
      }
      title={title}
      readMore={false}
      gravatarEmail={email}
      centerContent={true}
      bgDark={bgDark}
    >
      <div>
        {status && (
          <Typography.Caption additionalClassName="tw-pb-3">
            {status}
          </Typography.Caption>
        )}
        <Typography.Caption additionalClassName="tw-pb-3">
          {role}
        </Typography.Caption>
      </div>
      <div className="tw-relative tw-flex tw-flex-col tw-pb-3">
        {phoneNumber && (
          <Typography.Caption>
            <Anchor href={`tel:${phoneNumber}`}>
              {formatPhoneNumber(phoneNumber)}
            </Anchor>
          </Typography.Caption>
        )}
        {email && (
          <Typography.Caption>
            <Anchor href={`mailto:${email}`}>{email}</Anchor>
          </Typography.Caption>
        )}
        {socialMedia && (
          <div className="tw-pt-3.5">
            <SocialMediaLinks socialMedia={socialMedia} fullname={fullname} />
          </div>
        )}
      </div>
    </BaseCard>
  )
}
