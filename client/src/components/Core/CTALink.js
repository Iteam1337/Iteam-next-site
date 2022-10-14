import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.a`
  padding: 0.85rem 1.75rem;
  min-width: 200px;
  border-radius: 5px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
`

const CTALink = ({ href, text, className }) => {
  const isExternal = href.includes('http')
  return isExternal ? (
    <StyledAnchor
      href={href}
      className={clsx(
        className,
        'tw-bg-primary-light focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-secondary focus:[&:not(:focus-visible)]:tw-outline-none'
      )}
    >
      {text}
    </StyledAnchor>
  ) : (
    <Link href={href} passHref>
      <StyledAnchor
        className={clsx(
          className,
          'tw-bg-primary-light focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-secondary focus:[&:not(:focus-visible)]:tw-outline-none'
        )}
      >
        {text}
      </StyledAnchor>
    </Link>
  )
}

export default CTALink
