import {
  Box,
  FormControlLabel,
  Checkbox,
  Radio,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
export default function Notifications() {
  const options = [
    { title: "New Offers", value: true, key: "new_offers", type: "checkbox" },
    {
      title: "Messages or Offer Updates",
      value: true,
      key: "messages",
      type: "checkbox",
    },
    {
      title: "Notification Types",
      sub_content: "How do you want to receive notifications",

      type: "text",
    },

    {
      title: "Do not notify me",
      value: false,
      key: "notify_me",
      type: "radio",
    },
    { title: "E-mail", value: false, key: "email", type: "radio" },
  ];
  const formik = useFormik({
    initialValues: {
      new_offers: true,
      messages: true,
      notify_me: false,
      email: false,
    },
    validationSchema: yup.object({}),
    onSubmit: async (values) => {},
  });
  return (
    <Box>
      <h4 style={{ color: "#101928", fontSize: 20, fontWeight: "600" }}>
        Your Notifications
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

      <h6 style={{ color: "#101928", fontSize: 15, fontWeight: "600" }}>
        What do you want to receive?
      </h6>
      <p
        style={{
          color: "#667185",
          fontSize: 12,
          marginTop: -10,
        }}
      >
        Choose the kind of news you want to receive
      </p>
      <form onSubmit={formik.handleSubmit}>
        {options.map((item, index) => (
          <Box key={index}>
            {item.type === "checkbox" && (
              <FormControlLabel
                label={
                  <span
                    style={{
                      color: "#344054",
                      fontWeight: "500",
                      fontSize: 13,
                    }}
                  >
                    {item.title}
                  </span>
                }
                control={
                  <Checkbox
                    size="small"
                    value={formik.values[item.key]}
                    checked={formik.values[item.key]}
                    onChange={formik.handleChange}
                    sx={{ color: "#1570EF" }}
                    id={item.key}
                    name={item.key}
                  />
                }
              />
            )}
            {item.type === "text" && (
              <Box
                sx={{
                  borderTop: "1px solid #EAECF0",
                  padding: "10px 0 0",
                  marginTop: 2,
                }}
              >
                <h6
                  style={{ color: "#101928", fontSize: 13, fontWeight: "500" }}
                >
                  {item.title}
                </h6>
                <p
                  style={{
                    color: "#667185",
                    fontSize: 12,
                    marginTop: -10,
                  }}
                >
                  {item.sub_content}
                </p>
              </Box>
            )}
            {item.type === "radio" && (
              <FormControlLabel
                value={formik.values[item.key]}
                label={
                  <span
                    style={{
                      color: "#344054",
                      fontWeight: "500",
                      fontSize: 13,
                    }}
                  >
                    {item.title}
                  </span>
                }
                control={<Radio size="small" />}
              />
            )}
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
              fontSize: 13,
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
              fontSize: 13,
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
