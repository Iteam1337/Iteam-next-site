import React from "react";
import { withTheme } from "styled-components";

import Select from "react-select";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const getCustomStyles = (theme) => {
  return {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? theme.colors.secondary : theme.colors.dark,
      backgroundColor: theme.colors.white,
    }),
    control: (provided, state) => {
      return {
        ...provided,
        border: state.menuIsOpen || state.isFocused 
          ? `1px solid ${theme.colors.secondary} !important`
          : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "1.275rem 1rem",
        outline: "none",
        boxShadow: "none",
      };
    },
  };
};

const SelectStyled = ({
  theme,
  name = "item",
  options = defaultOptions,
  ...rest
}) => {
  return (
    <Select
      styles={getCustomStyles(theme)}
      defaultValue={options[1]}
      name={name}
      options={options}
      {...rest}
    />
  );
};

export default withTheme(SelectStyled);
