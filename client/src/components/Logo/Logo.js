import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import imgL1Logo from '../../assets/image/png/Iteam-logo.png'
import imgL1LogoWhite from '../../assets/image/png/Iteam-Logotype-Horizontal-RGB-White.png'

import imgL1VericalLogo from '../../assets/image/png/Iteam-Logotype-Vertical-RGB-Black.png'
import imgL1VericalLogoWhite from '../../assets/image/png/Iteam-Logotype-Vertical-RGB-White.png'

const Logo = ({ white, height, vertical = false, className = '', ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          vertical ? (
            <Image src={imgL1VericalLogoWhite} alt="" width="26" height="150" />
          ) : (
            <Image src={imgL1LogoWhite} alt="" width="150" height="29" />
          )
        ) : vertical ? (
          <Image src={imgL1VericalLogo} alt="" width="26" height="150" />
        ) : (
          <Image src={imgL1Logo} alt="" width="150" height="29" />
        )}
      </a>
    </Link>
  )
}

export default Logo
