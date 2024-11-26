import { Box, Radio, Stack, InputAdornment, Grid, Button } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import CssTextField from "../../../components/cssTextField";
import { CalendarMonth } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import BookAction from "./book-action";
export default function BasicInfo({ handlePrev, handleNext, active }) {
  const formFields = [
    {
      title: "First Name",
      key: "firstname",
      col: 6,
      placeholder: "",
      type: "text",
    },
    {
      title: "Last Name",
      key: "lastname",
      col: 6,
      placeholder: "",
      type: "text",
    },
    {
      title: "Phone number",
      key: "phone",
      col: 12,
      placeholder: "",
      type: "text",
    },
    { title: "Email", key: "email", col: 12, placeholder: "", type: "text" },
    {
      title: "Address",
      key: "address",
      col: 12,
      placeholder: "",
      type: "text",
    },
    { title: "City/Town", key: "city", col: 6, placeholder: "", type: "text" },
    { title: "Zip Code", key: "zip", col: 6, placeholder: "", type: "number" },
  ];

  const form = useRef(null);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zip: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().required("Required"),
      lastname: yup.string().required("Required"),
      phone: yup.string().required("Required").min(11, "Invalid phone number"),
      email: yup.string().required("Required").email("Invalid email address"),
      address: yup.string().required("Required"),
      city: yup.string().required("Required"),
      zip: yup.string().required("Required").min(4, "Invalid zip code"),
    }),
    onSubmit: async (values) => {
      handleNext();
    },
  });

  const action = useCallback(() => {
    formik.handleSubmit();
  }, [formik]);

  return (
    <Box>
      <h5
        style={{
          color: "#101928",
          fontSize: 14,
          fontWeight: "700",
        }}
      >
        When do you require this services
      </h5>

      <Box
        sx={{
          border: "1px solid #E4E7EC",
          borderRadius: 1,
          padding: "30px 25px",
        }}
      >
        <form onSubmit={formik.handleSubmit} ref={form}>
          <Grid container spacing={2}>
            {formFields.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={item.col}
                md={item.col}
                lg={item.col}
                key={index}
              >
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "#667085",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </label>
                  <CssTextField
                    size="small"
                    fullWidth
                    id={item.key}
                    name={item.key}
                    value={formik.values[item.key]}
                    onChange={formik.handleChange}
                    type={item.type}
                    placeholder={item.placeholder}
                    error={
                      formik.touched[item.key] &&
                      Boolean(formik.errors[item.key])
                    }
                    helperText={
                      formik.touched[item.key] && formik.errors[item.key]
                    }
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <CalendarMonth sx={{ fontSize: 13 }} />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                </div>
              </Grid>
            ))}
          </Grid>

          <br />
          <br />
        </form>

        <BookAction
          handlePrev={handlePrev}
          handleNext={action}
          active={active}
        />
      </Box>
    </Box>
  );
}
