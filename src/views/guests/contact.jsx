import {
  Box,
  CssBaseline,
  Grid,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import Topbar from "../../components/guests/topbar";
import { useCallback, useMemo, useState } from "react";
import Hero from "../../components/guests/hero";
import { useFormik } from "formik";
import CssTextField from "../../components/cssTextField";
import ContactImage from "../../assets/img/contact.jpeg";
import * as yup from "yup";
import MapImage from "../../assets/img/map-contact.png";
import {
  DraftsOutlined,
  LocationOnOutlined,
  PermPhoneMsgOutlined,
} from "@mui/icons-material";
import Promotions from "./promotion";
import Footer from "../../components/guests/footer";
export default function Contact() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const [email, setEmail] = useState("");
  const formFields = [
    {
      title: "Name",
      key: "name",
      col: 6,
      type: "text",
    },
    {
      title: "Phone",
      key: "phone",
      col: 6,
      placeholder: "",
      type: "number",
    },
    {
      title: "Email",
      key: "email",
      col: 12,
      placeholder: "",
      type: "email",
    },
    {
      title: "Message",
      key: "message",
      col: 12,
      placeholder: "",
      type: "text",
    },
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email address"),
      phone: yup
        .string()
        .required("Phone number is required")
        .min(11, "Invalid phone number"),
      name: yup
        .string()
        .required("Name is required")
        .min(5, "Name is too short"),
      message: yup
        .string()
        .required("Message is required")
        .min(20, "Message is too short"),
    }),
    onSubmit: async (values) => {},
  });

  const handleNewsLetter = useCallback(() => {}, []);

  const info = [
    {
      icon: PermPhoneMsgOutlined,
      iconColor: "white",
      backgroundColor: "#172153",
      title: "+23430601026",
      content:
        "Monday to Friday: 8:00am - 5:30pm <br/> Saturdays: 8:00am - 5:30pm",
    },
    {
      icon: DraftsOutlined,
      iconColor: "#172153",
      backgroundColor: "#B9C0DB",
      title: "Prohandy@gmail.com",
      content:
        "Have questions or need assistance? Reach out to us, we’re here to help.",
    },
    {
      icon: LocationOnOutlined,
      iconColor: "#172153",
      backgroundColor: "rgba(86, 39, 25, 0.3)",
      title: "Location: Lagos. NG",
      content: "No 40, Babs-williams close, off san bus stop. Lekki",
    },
  ];

  return (
    <Box>
      <Topbar popularServices={popularServices} />
      <CssBaseline />
      <Hero
        coloredText={"Contact"}
        whiteText={"Us"}
        subtitle={
          "We’re here to help! Reach out to us for inquiries, support, or feedback."
        }
      />

      <br />
      <Box
        sx={{
          mt: 6,
          mb: 8,
          px: 2,
        }}
      >
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Box>
              <h3 style={{ color: "#172153" }}>GET IN TOUCH</h3>
              <br />
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} columnSpacing={3}>
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
                        <TextField
                          size="small"
                          fullWidth
                          id={item.key}
                          name={item.key}
                          label={item.title}
                          value={formik.values[item.key]}
                          onChange={formik.handleChange}
                          type={item.type}
                          rows={10}
                          multiline={item.key === "message"}
                          placeholder={item.placeholder}
                          error={
                            formik.touched[item.key] &&
                            Boolean(formik.errors[item.key])
                          }
                          helperText={
                            formik.touched[item.key] && formik.errors[item.key]
                          }
                        />
                      </div>
                    </Grid>
                  ))}
                </Grid>

                <br />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    textTransform: "none",
                    height: 40,
                    width: 150,
                    backgroundColor: "#172153",
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontWeight: "600",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box
              component={"div"}
              sx={{
                backgroundImage: `url(${ContactImage})`,
                backgroundSize: "cover",
                minHeight: 450,
                backgroundRepeat: "no-repeat",
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(23, 33, 83, 0.7)",
                  width: "100%",
                  minHeight: 450,
                  borderRadius: 3,
                }}
                component={"div"}
                className="w3-display-container"
              >
                <div className="w3-display-topleft" style={{ padding: 10 }}>
                  <h6 style={{ color: "white" }}>Join Our Newsletter</h6>
                </div>
                <div
                  className="w3-display-bottommiddle"
                  style={{
                    width: "100%",
                    padding: "10px 20px",
                    textAlign: "center",
                    lineHeight: 2,
                  }}
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleNewsLetter();
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={({ target: { value } }) => setEmail(value)}
                      style={{
                        backgroundColor: "white",
                        width: "100%",
                        outline: "none",
                        border: 0,
                        padding: 8,
                        borderRadius: 8,
                      }}
                      placeholder="Email"
                    />
                    <br />

                    <Button
                      type="submit"
                      variant="contained"
                      disableElevation
                      fullWidth
                      sx={{
                        textTransform: "none",
                        height: 40,
                        my: 1.5,
                        borderRadius: 2,
                        backgroundColor: "#172153",
                        color: "#FFFFFF",
                        fontSize: 14,
                        fontWeight: "600",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          mt: 6,
          mb: 7,
          px: 2,
        }}
      >
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <Grid container spacing={3}>
              {info.map((item, index) => (
                <Grid item xs={12} md={4} sm={4} lg={4} key={index}>
                  <Box
                    sx={{
                      backgroundColor: item.backgroundColor,
                      borderRadius: 2,
                      padding: "30px 20px 20px",
                      height: 200,
                    }}
                  >
                    <Stack
                      justifyContent={"center"}
                      spacing={2}
                      direction={"row"}
                      alignItems={"center"}
                    >
                      <div>
                        <item.icon
                          sx={{ color: item.iconColor, fontSize: 35 }}
                        />
                      </div>
                      <h6
                        style={{
                          color: "white",
                          fontSize: 14,
                          fontWeight: "700",
                        }}
                      >
                        {item.title}
                      </h6>
                    </Stack>
                    <br />
                    <br />
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      style={{ color: "white", fontSize: 12 }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          mt: 8,
          mb: 8,
          px: 2,
        }}
      >
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <Box>
              <img
                src={MapImage}
                className="w3-image"
                style={{ width: "100%", maxHeight: 350 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Promotions />
      <br />
      <br />
      <Footer/>
    </Box>
  );
}
