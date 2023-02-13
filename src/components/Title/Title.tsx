import React from "react";
import TitleStyle from "./Style";
import { ITitle } from "./Types";

const Title: React.FC<ITitle> = ({ title }) => {
  return <TitleStyle.Title>{title}</TitleStyle.Title>;
};

export default Title;
