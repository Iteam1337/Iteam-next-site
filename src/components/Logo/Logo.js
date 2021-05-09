import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/png/Iteam-logo.png";
import imgL1LogoWhite from "../../assets/image/png/Iteam-Logotype-Horizontal-RGB-White.png";

import imgL1VericalLogo from "../../assets/image/png/Iteam-Logotype-Vertical-RGB-Black.png";
import imgL1VericalLogoWhite from "../../assets/image/png/Iteam-Logotype-Vertical-RGB-White.png";

const Logo = ({ white, height, vertical = false, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          vertical ? 
          <img src={imgL1VericalLogoWhite} style={{marginTop: 15}} alt="" height="150"/>
          : 
          <img src={imgL1LogoWhite} style={{marginTop: 15}} alt="" width="150"/>

        ) : (
          vertical ? 
          <img src={imgL1VericalLogo} alt="" height="150"/>
          :
          <img src={imgL1Logo} style={{marginTop: 15}} alt="" width="150"/>

        )}
      </a>
    </Link>
  );
};

export default Logo;
