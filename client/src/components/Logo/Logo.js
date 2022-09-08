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
      <a className={`${className}`} {...rest}>
        {white ? (
          vertical ? (
            <img
              src={imgL1VericalLogoWhite}
              alt="Iteam"
              className="tw-mt-1 tw-h-[150px]"
            />
          ) : (
            <img
              src={imgL1LogoWhite}
              alt="Iteam"
              className="tw-mt-3.5 tw-w-[150px]"
            />
          )
        ) : vertical ? (
          <img
            src={imgL1VericalLogo}
            alt=""
            className="tw-mt-3.5 tw-h-[150px]"
          />
        ) : (
          <img src={imgL1Logo} alt="" className="tw-mt-3.5 tw-w-[150px]" />
        )}
      </a>
    </Link>
  )
}

export default Logo
