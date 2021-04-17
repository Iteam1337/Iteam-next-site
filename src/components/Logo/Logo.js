import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/png/iteam-logo.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <img src={imgL1LogoWhite} alt=""/>
        ) : (
          <img src={imgL1Logo} alt="" width="150"/>
        )}
      </a>
    </Link>
  );
};

export default Logo;
