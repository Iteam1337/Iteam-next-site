import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.p`
  ${color};
  ${space};
  ${typography};
  ${shadow};
  font-weight: 400;
  margin-bottom: 0;
  font-size: 21px;
  letter-spacing: normal;
  line-height: 38px;
`;

const ParagraphSmall = styled(Paragraph)`
  ${color};
  ${space};
  ${typography};
  ${shadow};
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

const Text = ({ variant, ...props }) => {
  let TextRender;

  switch (variant) {
    case "small":
      TextRender = ParagraphSmall;
      break;
    default:
      TextRender = Paragraph;
  }

  return <TextRender color="text" {...props} />;
};

export default Text;
