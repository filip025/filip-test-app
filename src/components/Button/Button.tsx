import React from "react";
import ButtonStyle from "./Style";
import { IButton } from "./Types";

const Button: React.FC<IButton> = ({ text, disabled }) => {
  return (
    <ButtonStyle.PrimaryBtn
      disabled={disabled}
      type="submit"
      variant="contained"
    >
      {text}
    </ButtonStyle.PrimaryBtn>
  );
};

export default Button;
