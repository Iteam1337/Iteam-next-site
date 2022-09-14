import React from 'react'

import SocialMediaLinks from '../../sections/about/SocialMediaLinks'
import { formatPhoneNumber } from '../../utils/helpers'
import { Anchor, Typography } from '../Core'
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
      team
    >
      <div className="text-center">
        <Typography.Caption>{status}</Typography.Caption>
        <Typography.Caption additionalClassName="tw-py-2">
          {role}
        </Typography.Caption>
      </div>
      <div className="tw-relative tw-flex tw-flex-col">
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
