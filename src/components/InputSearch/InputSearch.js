import React from "react";
import styled from "styled-components";

import { Box } from "../Core";

const BoxInput = styled(Box)`
  display: flex;
  align-items: center;
  button {
    font-size: 19px;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;
    margin-top: 9px;
    cursor: pointer;
    background: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }
  input {
    color: rgba(255, 255, 255, 0.7) !important;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.5px;
    line-height: 26px;
    border: 0;
    background: transparent;
    &:focus {
      box-shadow: none;
      background: transparent;
    }
  }
`;

const InputSearch = (props) => {
  return (
    <>
      <BoxInput {...props}>
        <button>
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Type to search"
        />
      </BoxInput>
    </>
  );
};
export default InputSearch;
