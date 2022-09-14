import React from 'react'

import SocialMediaLinks from '../../sections/about/SocialMediaLinks'
import { formatPhoneNumber } from '../../utils/helpers'
import { Typography } from '../Core'
import { BaseCard } from './BaseCard'

export const TeamCard = ({
  phoneNumber,
  email,
  fullname,
  status,
  role,
  slug,
  profilePic,
  socialMedia,
}) => {
  return (
    <BaseCard
      link={`/about/${slug.current}`}
      img={profilePic?.image}
      customImgAlt={`Profilbild på ${fullname}`}
      title={fullname}
      email={email}
    >
      <div className="text-center">
        <Typography.Caption additionalClassName="tw-p-1">
          {status}
        </Typography.Caption>
        <Typography.Caption additionalClassName="tw-pb-2">
          {role}
        </Typography.Caption>
      </div>
      <div className="tw-relative tw-flex tw-flex-col">
        {phoneNumber && (
          <a href={`tel:${phoneNumber}`} fontSize="14px" lineHeight="1.3">
            {formatPhoneNumber(phoneNumber)}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} fontSize="14px" lineHeight="1.3">
            {email}
          </a>
        )}
        {socialMedia && (
          <div>
            <SocialMediaLinks socialMedia={socialMedia} fullname={fullname} />
          </div>
        )}
      </div>
    </BaseCard>
  )
}
