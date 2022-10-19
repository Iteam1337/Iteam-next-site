import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import Gravatar from 'react-gravatar'

import client from '../../sanity-client'
import { SocialMediaLinks } from '../../sections/About/SocialMediaLinks'
import { formatPhoneNumber } from '../../utils/helpers'
import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

const TeamCardImage = ({ img, email, customImgAlt }) => {
  const imageProps = useNextSanityImage(client, img)
  return (
    <div className="tw-flex tw-justify-center">
      <div className="tw-relative tw-z-0 tw-order-1 tw-mt-8 tw-mb-2 tw-max-h-[160px] tw-min-h-[160px] tw-min-w-[160px] tw-max-w-[160px] tw-overflow-hidden tw-rounded-full">
        {img ? (
          <Image
            src={imageProps.src}
            alt={customImgAlt ? customImgAlt : img.alt}
            loader={imageProps.loader}
            blurDataURL={imageProps.blurDataURL}
            placeholder={imageProps.placeholder}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Gravatar
            email={email}
            className="tw-h-auto tw-max-w-full"
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
          <Typography.Caption className="tw-pb-3">{status}</Typography.Caption>
        )}
        <Typography.Caption className="tw-pb-3">{role}</Typography.Caption>
      </div>
      <div className="tw-relative tw-flex tw-flex-col tw-pb-6">
        {phoneNumber && (
          <Typography.Caption>
            <Typography.Anchor href={`tel:${phoneNumber}`}>
              {formatPhoneNumber(phoneNumber)}
            </Typography.Anchor>
          </Typography.Caption>
        )}
        {email && (
          <Typography.Caption>
            <Typography.Anchor href={`mailto:${email}`}>
              {email}
            </Typography.Anchor>
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
