import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

const FormControlStyle = styled(FormControl)({
  color: "red",
  margin: "10px 0 0 0",
  padding: 0,
});

const MUISelectStyle = styled(Select)({
  fontStyle: "italic",
  margin: 0,
  padding: 0,
});

const ErrorMessage = styled(FormHelperText)({
  color: "red",
});

const MenuItemStyle = styled(MenuItem)({});

const InputLabelStyle = styled(InputLabel)({
  fontSize: "17px",
  fontStyle: "italic",
  color: "lightgray",
});
const SelectStyle = {
  FormControlStyle,
  MUISelectStyle,
  MenuItemStyle,
  ErrorMessage,
  InputLabelStyle,
};

export default SelectStyle;
