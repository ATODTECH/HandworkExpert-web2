import {
  Box,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Stack,
  MenuItem,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import { EmailOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { SubmitOnboarding } from "../../../services/user-services";
import ToastMessage from "../../../hooks/toastMessage";
export default function BasicInformation({ setActive, setPercent }) {
  const { user } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const formInput = useMemo(
    () => [
      {
        title: "First name",
        value: "",
        col: 6,
        type: "text",
        key: "first_name",
        inputProps: false,
      },
      {
        title: "Last name",
        value: "",
        col: 6,
        type: "text",
        key: "last_name",
        inputProps: false,
      },
      // {
      //   title: "Email address",
      //   value: "",
      //   col: 6,
      //   type: "text",
      //   key: "email",
      //   inputProps: true,
      // },
      {
        title: "Phone number",
        value: "",
        col: 12,
        type: "phone",
        key: "contact",
        inputProps: false,
      },
      {
        title: "Address",
        value: "",
        col: 12,
        type: "text",
        key: "address",
        inputProps: false,
      },
      {
        title: "State",
        value: "",
        col: 6,
        type: "text",
        key: "state",
        inputProps: false,
      },
      {
        title: "City",
        value: "",
        col: 6,
        type: "text",
        key: "city",
        inputProps: false,
      },
    ],
    []
  );

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      // email: "",
      contact: "+234",
      address: "",
      state: "",
      city: "",
    },
    validationSchema: yup.object({
      first_name: yup.string().required("Required"),
      last_name: yup.string().required("Required"),
      // email: yup.string().required("Required").email("Invalid email address"),
      contact: yup
        .string()
        .required("Required")
        .min(13, "Invalid phone number"),
      address: yup.string().required("Required"),
      state: yup.string().required("Required"),
      city: yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await SubmitOnboarding({
        ...values,
        id: user?.id,
        contact: values?.contact?.trim()?.replaceAll(" ", ""),
      })
        .then((response) => response.data)
        .then((response) => {
          setLoading(false);
          ToastMessage(response.status ? "success" : "error", response.message);
          if (response.status) {
            setPercent(20);
            setActive("documents");
          }
        })
        .catch((e) => setLoading(false));
    },
  });

  useEffect(() => {
    formik.setFieldValue(
      "first_name",
      user?.name?.split(" ")[0] || user?.first_name || ""
    );
    formik.setFieldValue(
      "last_name",
      user?.name?.split(" ")[1] || user?.last_name || ""
    );
  }, []);

  return (
    <Box>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Grid container spacing={2}>
          {formInput.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={item.col}
              md={item.col}
              lg={item.col}
              key={index}
            >
              <Box>
                <label
                  style={{
                    color: "#101928",
                    fontSize: 13,
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {item.title}
                </label>
                {item.type === "text" || item.type === "email" ? (
                  <TextField
                    value={formik.values[item.key]}
                    onChange={({ target: { value } }) =>
                      formik.setFieldValue(item.key, value)
                    }
                    error={
                      formik.touched[item.key] &&
                      Boolean(formik.errors[item.key])
                    }
                    helperText={
                      formik.touched[item.key] && formik.errors[item.key]
                    }
                    margin="normal"
                    id={item.key}
                    size="small"
                    type={item.type}
                    name={item.key}
                    sx={{ mb: 1, mt: 0.3 }}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: item.inputProps && (
                        <InputAdornment position="start">
                          <EmailOutlined />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                ) : item.type === "select" ? (
                  <TextField
                    value={formik.values[item.key]}
                    onChange={({ target: { value } }) =>
                      formik.setFieldValue(item.key, value)
                    }
                    error={
                      formik.touched[item.key] &&
                      Boolean(formik.errors[item.key])
                    }
                    helperText={
                      formik.touched[item.key] && formik.errors[item.key]
                    }
                    margin="normal"
                    id={item.key}
                    size="small"
                    type={item.type}
                    name={item.key}
                    sx={{ mb: 1, mt: 0.3 }}
                    variant="outlined"
                    select
                    fullWidth
                  >
                    <MenuItem value={"lagos"}>Lagos state</MenuItem>
                    <MenuItem value={"lagos"}>Oyo state</MenuItem>
                  </TextField>
                ) : (
                  <MuiTelInput
                    id={item.key}
                    name={item.key}
                    value={formik.values[item.key]}
                    onChange={(value) => {
                      formik.setFieldValue(item.key, value);
                    }}
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={
                      formik.touched[item.key] &&
                      Boolean(formik.errors[item.key])
                    }
                    helperText={
                      formik.touched[item.key] && formik.errors[item.key]
                    }
                    sx={{ mb: 1, mt: 0.3 }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />

        <Stack direction={"row"} justifyContent={"center"} spacing={3}>
          <Button
            color="error"
            variant="outlined"
            // onClick={() => setDialog(false)}
            // fullWidth
            disableElevation
            sx={{
              textTransform: "none",
              fontWeight: "500",
              height: 40,
              color: "#20525C",
              borderColor: "#D0D5DD",
              backgroundColor: "white",
              width: 200,
            }}
          >
            Back
          </Button>
          <LoadingButton
            loading={loading}
            variant="contained"
            // fullWidth
            type="submit"
            disableElevation
            sx={{
              textTransform: "none",
              fontWeight: "500",
              height: 40,
              backgroundColor: "#1E338A",
              width: 200,
            }}
          >
            Save
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  );
}
