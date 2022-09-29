import React from 'react'
import Link from 'next/link'

import imgL1Logo from '../../assets/image/png/Iteam-logo.png'
import imgL1LogoWhite from '../../assets/image/png/Iteam-Logotype-Horizontal-RGB-White.png'

import imgL1VericalLogo from '../../assets/image/png/Iteam-Logotype-Vertical-RGB-Black.png'
import imgL1VericalLogoWhite from '../../assets/image/png/Iteam-Logotype-Vertical-RGB-White.png'

const Logo = ({
  white,
  height,
  vertical = false,
  className = '',
  alt,
  ...rest
}) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest} aria-label="Länk till startsidan">
        {white ? (
          vertical ? (
            <img
              src={imgL1VericalLogoWhite.src}
              className="tw-mt-1 tw-h-[150px] tw-w-[26px]"
              aria-hidden="true"
            />
          ) : (
            <img
              src={imgL1LogoWhite.src}
              className="tw-mt-3.5 tw-h-[29px] tw-w-[150px]"
              aria-hidden="true"
            />
          )
        ) : vertical ? (
          <img
            src={imgL1VericalLogo.src}
            aria-hidden="true"
            className="tw-mt-3.5 tw-h-[150px] tw-w-[26px]"
          />
        ) : (
          <img
            src={imgL1Logo.src}
            aria-hidden="true"
            className="tw-mt-3.5 tw-h-[29px] tw-w-[150px]"
          />
        )}
      </a>
    </Link>
  )
}

export default Logo
