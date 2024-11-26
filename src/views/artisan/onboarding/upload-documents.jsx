import {
  Box,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Stack,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useMemo, useRef, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import { CheckCircle, EmailOutlined } from "@mui/icons-material";
import UploadIcon from "../../../assets/img/upload.png";
import FileIcon from "../../../assets/img/file-icon.png";
import ToastMessage from "../../../hooks/toastMessage";
import { formatSize } from "../../../hooks/formatSize";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { SubmitOnboarding } from "../../../services/user-services";
export default function UploadDocuments({ setActive, setPercent }) {
  const { user } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const formInput = useMemo(
    () => [
      {
        title: "NIN",
        value: "",
        col: 6,
        type: "text",
        key: "nin",
        inputProps: false,
      },
      {
        title: "BVN",
        value: "",
        col: 6,
        type: "text",
        key: "bvn",
        inputProps: false,
      },
      {
        title: "Choose Document type",
        value: "",
        col: 12,
        type: "radio",
        key: "document_type",
        inputProps: false,
        items: [
          { title: "Driver’s License", value: "driver_license" },
          { title: "Passport", value: "passport" },
          { title: "NIN Slip/Card", value: "nin" },
        ],
      },
    ],
    []
  );
  const [img, setImg] = useState("");
  const inputRef = useRef();

  const formik = useFormik({
    initialValues: {
      nin: "",
      bvn: "",
      document_type: "driver_license",
    },
    validationSchema: yup.object({
      nin: yup.string().required("Required").min(10, "Invalid NIN"),
      bvn: yup.string().required("Required").min(10, "Invalid BVN"),
      document_type: yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      if (!img)
        return ToastMessage("error", "Kindly upload  a  verification document");

      setLoading(true);
      await SubmitOnboarding({
        nin: values.nin,
        id: user?.id,
        bvn: values.bvn,
        document: img,
      })
        .then((response) => response.data)
        .then((response) => {
          setLoading(false);
          ToastMessage(response.status ? "success" : "error", response.message);
          if (response.status) {
            setPercent(60);
            setActive("skills");
          }
        })
        .catch((e) => setLoading(false));

      // setPercent(60);
      // setActive("skills");
    },
  });

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

                {item.type === "text" && (
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
                )}
                {item.type === "radio" && (
                  <Box>
                    <RadioGroup
                      defaultValue="driver_license"
                      name={item.key}
                      value={formik.values[item.key]}
                      onChange={({ target: { value } }) =>
                        formik.setFieldValue(item.key, value)
                      }
                    >
                      {item.items.map((element, index) => (
                        <FormControlLabel
                          key={index}
                          value={element.value}
                          control={<Radio size="small" />}
                          label={
                            <span
                              style={{
                                color: "#344054",
                                fontSize: 13,
                                fontWeight: "500",
                              }}
                            >
                              {element.title}
                            </span>
                          }
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Box
              sx={{
                border: "1px solid #EAECF0",
                borderRadius: 2,
                padding: "20px 10px",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <img
                src={UploadIcon}
                className="w3-image"
                style={{ width: 50, height: 50 }}
              />
              <br />
              <p
                style={{
                  color: "#475467",
                  fontSize: 13,
                }}
              >
                <Button
                  variant="text"
                  onClick={() => inputRef.current.click()}
                  sx={{
                    color: "#175CD3",
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                  color="primary"
                >
                  Click to upload
                </Button>
                <span>
                  or drag and drop
                  <br />
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </span>
              </p>
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={async (e) => {
                  let allowedImage = [
                    "image/jpg",
                    "image/png",
                    "image/jpeg",
                    "image/webp",
                  ];
                  let file = e.target.files[0];
                  if (allowedImage.includes(file?.type)) {
                    return setImg(file);
                  }
                  setImg("");

                  return ToastMessage(
                    "error",
                    "Only png, jpeg and jpg images are allowed"
                  );
                }}
                ref={inputRef}
              />
            </Box>
            <br />
            {img && (
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  border: "1px solid #1570EF",
                  borderRadius: 2,
                  padding: "20px 15px",

                  backgroundColor: "white",
                }}
              >
                <div>
                  <img
                    src={FileIcon}
                    className="w3-image"
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.4, flexGrow: 1 }}>
                  <span style={{ color: "#344054" }}>{img?.name}</span>
                  <br />
                  <span style={{ color: "#475467" }}>
                    {formatSize(img?.size)} – 100% uploaded
                  </span>
                </div>
                <div>
                  <CheckCircle sx={{ color: "#1570EF" }} />
                </div>
              </Stack>
            )}
          </Grid>
        </Grid>
        <br />
        <br />

        <Stack direction={"row"} justifyContent={"center"} spacing={3}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => setActive("info")}
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
