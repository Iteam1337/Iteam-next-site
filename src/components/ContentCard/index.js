import React from "react";
import styled from "styled-components";
import { Box, Title } from "../Core";

const StyledBox = styled(Box)`
  padding: 25px 20px;
  border-radius: 10px;
  border: ${({ theme, dark }) =>
    `1px solid ${dark ? "#2d2d30" : theme.colors.border}`};
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.dark : theme.colors.light};
  transition: all 0.3s ease-out;

  &:hover {
    ${({ theme, dark }) =>
      dark
        ? `background-color: ${theme.colors.secondary} `
        : `box-shadow: 0 4px 20px ${theme.colors.shadow};`};
  }

  h4 {
    color: ${({ theme, dark }) =>
      dark ? theme.colors.light : theme.colors.dark};
  }
`;

const ContentCard = ({
  color = "primary",
  dark = false,
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <StyledBox
    dark={dark}
    className={`d-flex align-items-center justify-content-center ${className}`}
    {...rest}
  >
    <Title variant="card" mb={0}>
      {title}
    </Title>
  </StyledBox>
);

export default ContentCard;
