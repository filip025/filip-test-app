import { TextFieldProps } from "@mui/material/TextField";

export type InputType = {
  id: string;
  errorMessage?: string;
  pattern?: any;
  onInput?: any;
} & TextFieldProps;

export interface IInput {
  label: string;
  error?: any;
  value?: any;
  onChange?: any;
  oninput?: any;
}
