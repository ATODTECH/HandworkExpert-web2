import { Box, Stack, TextField, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useMemo } from "react";
export default function Password() {
  const formInput = useMemo(
    () => [
      {
        title: "Current password",
        value: "",
        key: "current_password",
        sub_content: "",
      },
      {
        title: "New Password",
        value: "",
        key: "new_password",
        sub_content: "Your new password must be more than 8 characters.",
      },
      {
        title: "Confirm Password",
        value: "",
        key: "confirm_password",
        sub_content: "",
      },
    ],
    []
  );
  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: yup.object({
      current_password: yup.string().required("Required"),
      new_password: yup
        .string()
        .required("Required")
        .min(6, "Password is too short"),
      confirm_password: yup
        .string()
        .required("Confirm Password is Required")
        .oneOf([yup.ref("new_password"), null], "Password Must Match"),
    }),
    onSubmit: async (values) => {},
  });
  return (
    <Box>
      <h4 style={{ color: "#101928", fontSize: 20, fontWeight: "600" }}>
        Change your Password
      </h4>
      <p
        style={{
          color: "#667185",
          fontSize: 12,
          marginTop: -10,
        }}
      >
        All your addresses can be found here. You can create new ones or edit
        old ones
      </p>
      <br />
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        style={{ maxWidth: 500 }}
      >
        {formInput.map((item, index) => (
          <Box key={index}>
            <label
              style={{
                color: "#344054",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              {item.title}
            </label>
            <TextField
              value={formik.values[item.key]}
              onChange={({ target: { value } }) =>
                formik.setFieldValue(item.key, value)
              }
              error={
                formik.touched[item.key] && Boolean(formik.errors[item.key])
              }
              helperText={formik.touched[item.key] && formik.errors[item.key]}
              margin="normal"
              id={item.key}
              size="small"
              type="password"
              name={item.key}
              sx={{ mb: 1, mt: 0.3 }}
              variant="outlined"
              fullWidth
            ></TextField>
            <p
              style={{
                fontSize: 9,
                lineHeight: 1,
                marginTop: 2,
                color: "#A3A7B1",
              }}
            >
              {item.sub_content}
            </p>
          </Box>
        ))}
        <br />
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#F1F5F9",
              border: "1px solid #E2E4E5",
              textTransform: "capitalize",
              fontWeight: "600",
              color: "#0F172A",
              width: 180,
              "&:hover": {
                color: "white",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            disableElevation
            sx={{
              backgroundColor: "#172153",
            
              textTransform: "capitalize",
              fontWeight: "600",
              color: "white",
              width: 180,
              "&:hover": {
                color: "white",
              },
            }}
          >
            Save Changes
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
