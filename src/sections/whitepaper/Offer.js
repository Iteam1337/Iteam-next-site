import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgOfferBook from "../../assets/image/png/l6-offer-book.png";

const SectionStyled = styled(Section)`
  padding-bottom: 100px;
  padding-top: 0;
`;

const OfferWrapper = styled(Box)`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ash};
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 50px;
`;

const BtnContainer = styled(Box)`
  margin-left: 45px;
  margin-top: 30px;

  @media ${device.lg} {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Offer = () => (
  <>
    {/* <!-- Offer section 1 --> */}
    <SectionStyled bg="#f2f2f3">
      <Container>
        <OfferWrapper>
          <div className="d-flex flex-wrap">
            <div className="widget-image">
              <img src={imgOfferBook} alt="" className="img-fluid" />
            </div>
            <div className="pt-3 pl-5">
              <Title variant="card" fontSize="24px" color="light" mb={3}>
                Get a free chapter of this book
              </Title>
              <Text color="lightShade" fontSize="18px" lineHeight="28px">
                Create custom landing pages with Omega <br /> that converts more
                visitors than any website.
              </Text>
            </div>
            <BtnContainer>
              <Button>Get a free chapter</Button>
            </BtnContainer>
          </div>
        </OfferWrapper>
      </Container>
    </SectionStyled>
  </>
);

export default Offer;
