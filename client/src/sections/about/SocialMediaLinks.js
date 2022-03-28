import React, { Fragment } from 'react'
import { Anchor } from '../../components/Core'

const SocialMediaLinks = ({ socialMedia, fullname, color }) => {
  return Object.entries(socialMedia).map(([key, value], index) => {
    return (
      <Fragment key={index}>
        {index !== 0 && ' | '}
        {key !== 'website' ? (
          <Anchor href={value} color={color} aria-label={`${key} - ${fullname}`}>
            <i
              className={`fab fa-${key}`}
              aria-hidden="true"
              title={`${key} - ${fullname}`}
            />
          </Anchor>
        ) : (
          <Anchor
            href={value}
            color={color}
            aria-label={`Webbsida - ${fullname}`}
          >
            <i className="fas fa-globe" />
          </Anchor>
        )}
      </Fragment>
    )
  })
}

export default SocialMediaLinks
