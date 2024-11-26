import { styled } from "@mui/material/styles";
import { Select, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#667085",
    paddingLeft: "10px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#D0D5DD",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D0D5DD",
      borderRadius: "5px",
      //  height: "40px",
      color: "#667085",

      // fontSize:13
    },
    "&:hover fieldset": {
      borderColor: "#D0D5DD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D0D5DD",
    },
    "& input": {
      fontSize: 14,
      fontWeight: "400",

      color: "#667085",
    },
  },
});

export default CssTextField;
