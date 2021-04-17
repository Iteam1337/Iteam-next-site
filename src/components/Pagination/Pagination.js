import React from "react";
import styled from "styled-components";
import { Pagination as BSPagination } from "react-bootstrap";

const PaginationStyled = styled(BSPagination)`
  .page-item {
    margin: 0 5px;
  }
  .page-link {
    width: 38px;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #eae9f2;
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.dark} !important;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus {
      z-index: 2;
      color: #fff !important;
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: none;
    }
  }
`;

const Pagination = (props) => (
  <>
    <PaginationStyled {...props} />
  </>
);

export default Pagination;

export const PageItem = (props) => (
  <>
    <PaginationStyled.Item {...props} />
  </>
);
