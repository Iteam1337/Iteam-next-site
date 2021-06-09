import React from "react";
import styled from "styled-components";
import { Box, Title } from "../Core";

const StyledBox = styled(Box)`
  padding: 20px;
  border: 1px solid rgba(20, 19, 19, 0.115);
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: ${({ theme }) => `0 4px 20px ${theme.colors.shadow};`};
  }
`;

const ContentCard = ({
  color = "primary",
  theme = "light",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <>
    <StyledBox
      bg="light"
      border="1px solid"
      borderColor="border"
      p="20px"
      borderRadius={10}
      className={`d-flex align-items-center justify-content-center ${className}`}
      {...rest}
    >
      <Title variant="card" mb={0}>
        {title}
      </Title>
    </StyledBox>{" "}
    {/* <Box
      bg="light"
      border="1px solid"
      borderColor="border"
      p="20px"
      borderRadius={10}
      className={`d-flex align-items-center justify-content-center ${className}`}
      {...rest}
    >
      <Title variant="card" mb={0}>
        {title}
      </Title>
    </Box> */}
  </>
);

export default ContentCard;
