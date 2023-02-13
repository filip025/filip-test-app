import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { FormHelperText, InputLabel } from "@mui/material";

const InputWrapper = styled("div")({
  margin: "10px 0",
});

const TextFieldStyle = styled(TextField)({
  width: "100%",
  margin: "10px 0",
  color: "lightgray",
  fontStyle: "italic",
});

const ErrorMessage = styled(FormHelperText)({
  color: "red",
});

const InputLabelStyle = styled(InputLabel)({
  fontSize: "14px",
  fontStyle: "italic",
  color: "lightgray",
});

const InputStyle = {
  TextFieldStyle,
  InputWrapper,
  ErrorMessage,
  InputLabelStyle,
};

export default InputStyle;
