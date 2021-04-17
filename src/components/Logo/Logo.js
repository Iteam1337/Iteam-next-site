import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/png/Iteam-logo.png";
import imgL1LogoWhite from "../../assets/image/png/Iteam-Logotype-Horizontal-RGB-White.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <img src={imgL1LogoWhite} alt="" width="150"/>
        ) : (
          <img src={imgL1Logo} alt="" width="150"/>
        )}
      </a>
    </Link>
  );
};

export default Logo;
