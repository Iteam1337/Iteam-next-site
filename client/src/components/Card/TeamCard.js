import React from 'react'

import SocialMediaLinks from '../../sections/about/SocialMediaLinks'
import { formatPhoneNumber } from '../../utils/helpers'
import { Anchor, Typography } from '../Core'
import { BaseCard } from './BaseCard'

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
}) => {
  return (
    <BaseCard
      link={link}
      img={img}
      preTitle=""
      title={title}
      readMore={false}
      customImgAlt={customImgAlt}
      gravatarEmail={email}
      centerContent={true}
    >
      <div>
        {status && (
          <Typography.Caption additionalClassName="tw-pt-3">
            {status}
          </Typography.Caption>
        )}
        <Typography.Caption additionalClassName="tw-pt-3">
          {role}
        </Typography.Caption>
      </div>
      <div className="tw-relative tw-flex tw-flex-col tw-pt-3">
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
          <div className="tw-pt-3">
            <SocialMediaLinks socialMedia={socialMedia} fullname={fullname} />
          </div>
        )}
      </div>
    </BaseCard>
  )
}
