import React from "react";
import InputStyle from "./Style";
import { InputType } from "./Types";

const Input: React.FC<InputType> = ({
  id,
  errorMessage,
  label,
  error,
  value,
  onInput,
  ...rest
}) => {
  return (
    <InputStyle.InputWrapper>
      {label && (
        <InputStyle.InputLabelStyle htmlFor={id}>
          {label}
        </InputStyle.InputLabelStyle>
      )}
      <InputStyle.TextFieldStyle
        variant="standard"
        fullWidth
        error={error}
        value={value || ""}
        {...rest}
      />
      {error && errorMessage && (
        <InputStyle.ErrorMessage>{errorMessage}</InputStyle.ErrorMessage>
      )}
    </InputStyle.InputWrapper>
  );
};

export default Input;
