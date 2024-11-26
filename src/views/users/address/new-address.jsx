import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  TextField,
  Grid,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Close, EmailOutlined } from "@mui/icons-material";
import DeleteImage from "../../../assets/img/featured-delete.png";
import { useMemo } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
export default function NewAddress({ dialog, setDialog }) {
  const formInput = useMemo(
    () => [
      {
        title: "City/Town",
        value: "",
        col: 6,
        type: "text",
        key: "city",
        inputProps: false,
      },
      {
        title: "Zip Code",
        value: "",
        col: 6,
        type: "number",
        key: "zip",
        inputProps: false,
      },

      {
        title: "Mobile Number",
        value: "",
        col: 12,
        type: "phone",
        key: "phone",
        inputProps: false,
      },
    ],
    []
  );

  const formik = useFormik({
    initialValues: {
      city: "",
      zip: "",

      phone: "+234",
    },
    validationSchema: yup.object({
      city: yup.string().required("Required"),
      zip: yup.string().required("Required"),
      phone: yup.string().required("Required").min(13, "Invalid phone number"),
    }),
    onSubmit: async (values) => {
      setDialog(false);
    },
  });
  return (
    <Dialog
      open={dialog}
      maxWidth={"sm"}
      fullWidth
      onClose={() => setDialog(false)}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #D0D5DD",
        }}
      >
        <h6
          style={{
            color: "#101828",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Edit Your Address Information
        </h6>
        <IconButton
          aria-label="close"
          onClick={() => setDialog(false)}
          size="small"
          sx={{ color: "#667085", width: 40, height: 40 }}
        >
          <Close sx={{ fontSize: 15 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent component={"div"} sx={{ px: 3, pt: 3, pb: 3 }}>
        <br />
        <Box sx={{}}>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container spacing={1}>
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
                        color: "#344054",
                        fontSize: 13,
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </label>
                    {item.type !== "phone" ? (
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
                    ) : (
                      <MuiTelInput
                        id="phone"
                        name="phone"
                        value={formik.values[item.key]}
                        onChange={(value) => {
                          formik.setFieldValue("phone", value);
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
                onClick={() => setDialog(false)}
                fullWidth
                disableElevation
                sx={{
                  textTransform: "none",
                  fontWeight: "600",
                  height: 40,
                  color: "#344054",
                  borderColor: "#D0D5DD",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disableElevation
                sx={{
                  textTransform: "none",
                  fontWeight: "600",
                  height: 40,
                  backgroundColor: "#4F46E5",
                }}
              >
                Save
              </Button>
            </Stack>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
