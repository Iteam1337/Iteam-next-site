import React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Box, Typography } from '../Core'
import clsx from 'clsx'

const StyledBox = styled(Box)`
  padding: 25px 20px;
  border-radius: 10px;
  border: ${({ theme, dark }) =>
    `1px solid ${dark ? '#2d2d30' : theme.colors.border}`};
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.dark : theme.colors.light};
  transition: all 0.3s ease-out;
`

const ContentCards = ({
  color = 'primary',
  dark = false,
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Col
    lg="4"
    md="6"
    className="mb-4"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="50"
    data-aos-duration="200"
    data-aos-offset="0"
    data-aos-once="true"
  >
    <StyledBox
      dark={dark}
      className={`d-flex align-items-center justify-content-center ${className}`}
      {...rest}
    >
      <Typography.H3
        className={clsx(dark ? 'tw-text-white' : 'tw-text-gray-dark')}
      >
        {title}
      </Typography.H3>
    </StyledBox>
  </Col>
)
export default ContentCards
