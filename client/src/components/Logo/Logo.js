import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import imgL1Logo from '../../assets/image/png/Iteam-logo.png'
import imgL1LogoWhite from '../../assets/image/png/Iteam-Logotype-Horizontal-RGB-White.png'
import imgL1VericalLogo from '../../assets/image/png/Iteam-Logotype-Vertical-RGB-Black.png'
import imgL1VericalLogoWhite from '../../assets/image/png/Iteam-Logotype-Vertical-RGB-White.png'

const Logo = ({ white, vertical = false, className, ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest} aria-label="Länk till startsidan">
        {white ? (
          vertical ? (
            <Image
              src={imgL1VericalLogoWhite}
              alt=""
              aria-hidden="true"
              width={26}
              height={150}
            />
          ) : (
            <Image
              src={imgL1LogoWhite}
              alt=""
              aria-hidden="true"
              width={150}
              height={29}
            />
          )
        ) : vertical ? (
          <Image
            src={imgL1VericalLogo}
            alt=""
            aria-hidden="true"
            width={26}
            height={150}
          />
        ) : (
          <Image
            src={imgL1Logo}
            alt=""
            aria-hidden="true"
            width={150}
            height={29}
          />
        )}
      </a>
    </Link>
  )
}

export default Logo
