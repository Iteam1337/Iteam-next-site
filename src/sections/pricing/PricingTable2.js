import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Title, Section, Button } from "../../components/Core";

const Table = styled.table`
  thead,
  tr,
  tbody {
    display: block;
  }
  thead tr .sin-title-box {
    padding: 0 20px;
    height: 60px;
    color: #19191b;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.56px;
  }
  .title-col {
    min-width: 290px;
  }
  .basic-col,
  .standard-col,
  .premium-col,
  .ent-col {
    min-width: 195px;
  }

  .colored-row {
    background: #f7f7fb;
    border-top: 2px solid #fff;
    &:first-child {
      border-top: 0;
    }
    .sin-box.title-col {
      color: #19191b;
      font-weight: 700;
    }
    .sin-box {
      position: relative;
      padding: 0 20px;
      height: 65px;
      color: #696871;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: -0.56px;
      .table-icon {
        font-size: 20px;
        &.neg {
          color: #f04037;
        }
        &.pos {
          color: #67d216;
        }
      }
      &:before {
        content: "";
        background: #fff;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        width: 1px;
      }
    }
  }
`;

const ButtonSm = styled(Button)`
  width: 167px;
  min-width: auto;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #eae9f2;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  &:hover,
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.secondary}`} !important;
    background-color: ${({ theme }) => `${theme.colors.secondary}`} !important;
    color: #fff;
  }
`;

const PricingTable2 = () => {
  return (
    <>
      <Section className="pt-0">
        <Container>
          <div
            css={`
              overflow: auto;
              padding-bottom: 30px;
            `}
          >
            <Table>
              <thead>
                <tr>
                  <th scope="col" className="title-col sin-title-box"></th>
                  <th scope="col" className="basic-col sin-title-box">
                    Basic
                  </th>
                  <th scope="col" className="standard-col sin-title-box">
                    Standard
                  </th>
                  <th scope="col" className="premium-col sin-title-box">
                    Premium
                  </th>
                  <th scope="col" className="ent-col sin-title-box">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Websites
                  </th>
                  <td className="basic-col sin-box">01</td>
                  <td className="standard-col sin-box">03</td>
                  <td className="premium-col sin-box">10</td>
                  <td className="ent-col sin-box">Unlimited</td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Storages
                  </th>
                  <td className="basic-col sin-box">5GB</td>
                  <td className="standard-col sin-box">10GB</td>
                  <td className="premium-col sin-box">50GB</td>
                  <td className="ent-col sin-box">Unlimited</td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Email Accounts
                  </th>
                  <td className="basic-col sin-box">10</td>
                  <td className="standard-col sin-box">25</td>
                  <td className="premium-col sin-box">50</td>
                  <td className="ent-col sin-box">Unlimited</td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Premium Themes
                  </th>
                  <td className="basic-col sin-box">
                    <span className="table-icon neg">
                      <i className="fas fa-times"></i>
                    </span>
                  </td>
                  <td className="standard-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="premium-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="ent-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Premium Themes
                  </th>
                  <td className="basic-col sin-box">
                    <span className="table-icon neg">
                      <i className="fas fa-times"></i>
                    </span>
                  </td>
                  <td className="standard-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="premium-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="ent-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Premium Themes
                  </th>
                  <td className="basic-col sin-box">
                    <span className="table-icon neg">
                      <i className="fas fa-times"></i>
                    </span>
                  </td>
                  <td className="standard-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="premium-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="ent-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Advanced Forms
                  </th>
                  <td className="basic-col sin-box">
                    <span className="table-icon neg">
                      <i className="fas fa-times"></i>
                    </span>
                  </td>
                  <td className="standard-col sin-box">
                    <span className="table-icon neg">
                      <i className="fas fa-times"></i>
                    </span>
                  </td>
                  <td className="premium-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="ent-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Premium Icons
                  </th>
                  <td className="basic-col sin-box">
                    <span className="table-icon neg">
                      <i className="fas fa-times"></i>
                    </span>
                  </td>
                  <td className="standard-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="premium-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="ent-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="colored-row">
                  <th scope="row" className="title-col sin-box">
                    Customer Support
                  </th>
                  <td className="basic-col sin-box">Limited</td>
                  <td className="standard-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="premium-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                  <td className="ent-col sin-box">
                    <span className="table-icon pos">
                      <i className="fas fa-check"></i>
                    </span>
                  </td>
                </tr>
                <tr className="price-block-row">
                  <th scope="row" className="title-col sin-box"></th>
                  <td className="basic-col sin-box">
                    <div className="mt-5 ml-3 pr-3">
                      <Title variant="card">Free</Title>
                      <small className="d-block mb-4">
                        No credit card required
                      </small>
                      <ButtonSm size="sm">Get Started</ButtonSm>
                    </div>
                  </td>
                  <td className="basic-col sin-box">
                    <div className="mt-5 ml-3 pr-3">
                      <Title variant="card">$9/mo</Title>
                      <small className="d-block mb-4">
                        No credit card required
                      </small>
                      <ButtonSm size="sm">Get Started</ButtonSm>
                    </div>
                  </td>
                  <td className="basic-col sin-box">
                    <div className="mt-5 ml-3 pr-3">
                      <Title variant="card">$19/mo</Title>
                      <small className="d-block mb-4">
                        No credit card required
                      </small>
                      <ButtonSm size="sm">Get Started</ButtonSm>
                    </div>
                  </td>
                  <td className="basic-col sin-box">
                    <div className="mt-5 ml-3 pr-3">
                      <Title variant="card">$39/mo</Title>
                      <small className="d-block mb-4">
                        No credit card required
                      </small>
                      <ButtonSm size="sm">Get Started</ButtonSm>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PricingTable2;
