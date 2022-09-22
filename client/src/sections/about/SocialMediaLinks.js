import React, { Fragment } from 'react'
import { Typography } from '../../components/Core'

const SocialMediaLinks = ({ socialMedia, fullname }) => {
  return Object.entries(socialMedia).map(([key, value], index) => {
    return (
      <Fragment key={index}>
        {index !== 0 && ' | '}
        {key !== 'website' ? (
          <Typography.Anchor href={value} ariaLabel={`${key} - ${fullname}`}>
            <i
              className={`fab fa-${key}`}
              aria-hidden="true"
              title={`${key} - ${fullname}`}
            />
          </Typography.Anchor>
        ) : (
          <Typography.Anchor href={value} ariaLabel={`Webbsida - ${fullname}`}>
            <i className="fas fa-globe" aria-hidden="true" />
          </Typography.Anchor>
        )}
      </Fragment>
    )
  })
}

export default SocialMediaLinks
