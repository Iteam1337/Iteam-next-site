import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const LogoVertical = ({ className }) => {
  return (
    <svg
      width="23"
      height="135"
      viewBox="0 0 23 135"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.7001 18.6206H13.8004V4.65516H20.7001V0H2.30078V4.65516H9.20055V18.6206H2.30078V23.276H20.7001V18.6206Z" />
      <path d="M9.34115 88.4493H13.658L15.9579 97.7596H7.04121L9.34115 88.4493ZM5.89133 102.415H17.1079L18.2578 107.07H22.9992L18.3994 88.4493V83.794H4.59981V88.4493L0 107.07H4.74134L5.89133 102.415Z" />
      <path d="M20.7001 74.4831H6.90061V69.828H18.4002V65.1728H6.90061V60.5177H20.7001V55.8625H2.30078V79.1383H20.7001V74.4831Z" />
      <path d="M8.89977 46.6208H6.59983V51.276H15.7995V46.6208H13.4996V32.6554H20.3993V28.0002H2V32.6554H8.89977V46.6208Z" />
      <path d="M11.5436 123.363H11.4556L8.58069 111.725H0V135.001H4.59981V116.38H4.98887L7.86377 128.018H15.1354L18.0103 116.38H18.3994V135.001H22.9992V111.725H14.4185L11.5436 123.363Z" />
    </svg>
  )
}

const LogoHorizontal = ({ className }) => {
  return (
    <svg
      width="150"
      height="26"
      viewBox="0 0 140 27"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.4738 21.4112H13.4222V5.35226H21.4738V0H0V5.35226H8.05377V21.4112H0V26.7635H21.4738V21.4112Z" />
      <path d="M87.406 21.4113H100.498L101.841 26.7635H107.375L102.007 5.35447V0.00221252H85.9016V5.35447L80.5332 26.7635H86.0678L87.406 21.4113ZM91.4318 5.35226H96.4701L99.1555 16.0568H88.7487L91.4318 5.35226Z" />
      <path d="M75.1603 21.4112H59.055V16.059H72.4772V10.7045H59.055V5.35226H75.1603V0H53.6865V26.7635H75.1603V21.4112Z" />
      <path d="M34.8958 21.4112H32.2127V26.7635H42.9496V21.4112H40.2642V5.35226H48.318V0H26.8442V5.35226H34.8958V21.4112Z" />
      <path d="M126.215 13.3818H126.111L122.756 0H112.742V26.7635H118.11V5.35226H118.564L121.919 18.734H130.407L133.761 5.35226H134.215V26.7635H139.584V0H129.569L126.215 13.3818Z" />
    </svg>
  )
}

const Logo = ({ white, vertical = false, className, ...rest }) => {
  return (
    <Link href="/">
      <a
        className={clsx(className, 'tw-group')}
        {...rest}
        aria-label="Länk till startsidan"
      >
        {white ? (
          vertical ? (
            <div>
              <LogoVertical className="tw-fill-white group-focus-visible:tw-fill-secondary motion-safe:tw-transition-all [@media(hover:hover)]:hover:tw-fill-secondary" />
            </div>
          ) : (
            <LogoHorizontal className="tw-fill-white group-focus-visible:tw-fill-secondary motion-safe:tw-transition-all [@media(hover:hover)]:hover:tw-fill-secondary" />
          )
        ) : vertical ? (
          <LogoVertical className="tw-fill-gray-dark group-focus-visible:tw-fill-secondary motion-safe:tw-transition-all [@media(hover:hover)]:hover:tw-fill-secondary" />
        ) : (
          <LogoHorizontal className="tw-fill-gray-dark group-focus-visible:tw-fill-secondary motion-safe:tw-transition-all [@media(hover:hover)]:hover:tw-fill-secondary" />
        )}
      </a>
    </Link>
  )
}

export default Logo
