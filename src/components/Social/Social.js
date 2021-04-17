import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Button } from "react-bootstrap";

const icons = {
  Facebook: <FaFacebookF />,
  Twitter: <FaTwitter />,
  Instagram: <FaInstagram />,
  LinkedIn: <FaLinkedinIn />,
  Github: <FaGithub />,
};

const SocialContainer = styled.div`
  .btn {
    color: #111 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.65rem;
    border: none;
    background: #fff !important;
    box-shadow: 0 0 1px 1px #111;

    :hover {
      color: ${({ theme }) => theme.primary} !important;
      box-shadow: ${({ theme }) => `0 0 1px 1px ${theme.primary}`};
    }
    &.inverse {
      box-shadow: 0 0 1px 1px #fff;
      :hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

const Social = ({ items, outline, inverse, className, ...rest }) => {
  return (
    <SocialContainer className={`d-flex ${className}`} {...rest}>
      {items.map((item) => (
        <div key={item.title}>
          <Button
            variant={"outline-primary"}
            size="sm"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={inverse && "inverse"}
          >
            {icons[item.title]}
          </Button>
        </div>
      ))}
    </SocialContainer>
  );
};

export default Social;
