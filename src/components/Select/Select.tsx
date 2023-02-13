import React from "react";
import SelectStyle from "./Style";
import { SelectProps } from "@mui/material";

const MySelect: React.FC<SelectProps> = ({
  id,
  value,
  label,
  error,
  onChange,
  ...rest
}) => {
  return (
    <SelectStyle.FormControlStyle variant="standard" fullWidth>
      {label && (
        <SelectStyle.InputLabelStyle htmlFor={id}>
          {label}
        </SelectStyle.InputLabelStyle>
      )}
      <SelectStyle.MUISelectStyle
        id={id}
        value={value}
        onChange={onChange}
        required
      >
        <SelectStyle.MenuItemStyle value="No">No</SelectStyle.MenuItemStyle>
        <SelectStyle.MenuItemStyle value="Yes">Yes</SelectStyle.MenuItemStyle>
      </SelectStyle.MUISelectStyle>
      {error && <SelectStyle.ErrorMessage>{error}</SelectStyle.ErrorMessage>}
    </SelectStyle.FormControlStyle>
  );
};

export default MySelect;
