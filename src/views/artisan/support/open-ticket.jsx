import { Close } from "@mui/icons-material";
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
  Stack,
  MenuItem,
  Grid,
} from "@mui/material";
import CancelIcon from "../../../assets/img/cancel-icon.png";
import * as yup from "yup";
import { useFormik } from "formik";
import { useMemo, useState } from "react";

export default function OpenTicket({ setDialog, dialog }) {
  const formInput = useMemo(
    () => [
      {
        title: "Explain the Issue *",
        value: "",
        col: 12,
        type: "textarea",
        key: "description",
        placeholder: "Kindly give a description",
        inputProps: false,
      },
      {
        title: "Dispute Type",
        value: "",
        col: 12,
        type: "select",
        key: "dispute",
        inputProps: false,
        items: [{ title: "No Payment Received", value: "No Payment Received" }],
      },

      {
        title: "Task Reference",
        value: "",
        col: 12,
        type: "select",
        key: "reference",
        inputProps: false,
        items: [{ title: "4899345", value: "4899345" }],
      },
    ],
    []
  );

  const formik = useFormik({
    initialValues: {
      description: "",
      dispute: "",
      reference: "",
    },
    validationSchema: yup.object({
      dispute: yup.string().required("Required"),
      description: yup
        .string()
        .required("Required")
        .min(20, "Description is too short"),
      reference: yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setDialog(false);
    },
  });
  return (
    <Dialog
      maxWidth={"xs"}
      fullWidth
      open={dialog}
      onClose={() => setDialog(false)}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ color: "#1D1B20" }}
          aria-label=""
          onClick={() => setDialog(false)}
          size="small"
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ px: 2, pb: 3 }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={CancelIcon}
              style={{ width: 80, height: 80 }}
              className="w3-image"
            />
            <br />
            <b
              style={{
                color: "#0A090B",
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              Open Ticket
            </b>
            <p style={{ color: "#525256", fontSize: 13 }}>
              We are sorry to hear this. Please let us find a way to help if we
              can
            </p>
          </div>
          <br />
          <div>
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
                          color: "#101928",
                          fontSize: 13,
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.title}
                      </label>

                      {item.type === "select" && (
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
                          select
                          margin="normal"
                          id={item.key}
                          size="small"
                          type={item.type}
                          name={item.key}
                          sx={{ mb: 1, mt: 0.3 }}
                          variant="outlined"
                          fullWidth
                        >
                          {item.items.map((element, count) => (
                            <MenuItem key={count} value={element.value}>
                              {element.title}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                      {item.type === "number" && (
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
                        ></TextField>
                      )}
                      {item.type === "textarea" && (
                        <TextField
                          multiline
                          rows={5}
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
                        ></TextField>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <br />
              <br />

              <Stack direction={"row"} justifyContent={"center"} spacing={3}>

              <Button
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
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => setDialog(false)}
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
                  Cancel
                </Button>
               
              </Stack>
            </form>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
