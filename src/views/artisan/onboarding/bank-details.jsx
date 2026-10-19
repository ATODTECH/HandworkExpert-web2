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
  Checkbox,
} from "@mui/material";
import { useMemo, useRef, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { MuiTelInput } from "mui-tel-input";
import { CheckCircle, EmailOutlined } from "@mui/icons-material";
import UploadIcon from "../../../assets/img/upload.png";
import FileIcon from "../../../assets/img/file-icon.png";
import ToastMessage from "../../../../hooks/toastMessage";
import { formatSize } from "../../../../hooks/formatSize";
import SuccessDialog from "./success";
import { CreateBankDetails } from "../../../services/user-services";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

export default function BankDetails({ setActive, setPercent }) {
  const { user, service_category } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const formInput = useMemo(
    () => [
      {
        title: "Bank Name",
        value: "",
        col: 12,
        type: "text",
        key: "name",
        inputProps: false,
        items: [{ title: "Guaranty Trust Bank", value: "Guaranty Trust Bank" }],
      },

      {
        title: "Account Number",
        value: "",
        col: 6,
        type: "number",
        key: "account_number",
        inputProps: false,
      },
      {
        title: "Account Name",
        value: "",
        col: 6,
        type: "text",
        key: "account_name",
        inputProps: false,
      },

      {
        title: "How do you want to receive payment",
        value: "",
        col: 12,
        type: "radio",
        key: "payment",
        inputProps: false,
        items: [
          { title: "Payment on Delivery", key: "payment_on_delivery" },
          { title: "Escrow Payment", key: "escrow_payment" },
        ],
      },
    ],
    []
  );

  const [dialog, setDialog] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      account_number: "",
      account_name: "",
      payment_on_delivery: false,
      escrow_payment: false,
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      account_number: yup
        .string()
        .required("Required")
        .min(10, "Invalid account number"),
      account_name: yup.string().required("Required"),
      // payment: yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      await CreateBankDetails({
        ...values,
        id: user?.id,
      })
        .then((response) => response.data)
        .then((response) => {
          setLoading(false);
          ToastMessage(response.status ? "success" : "error", response.message);
          if (response.status) {
            setPercent(100);
            // setActive("bank");
            setDialog(true);
          }
        })
        .catch((e) => setLoading(false));
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
                {(item.type === "number" || item.type === "text") && (
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
                {item.type === "radio" && (
                  <Box>
                    {/* <RadioGroup
                      name={item.key}
                      value={formik.values[item.key]}
                      onChange={({ target: { value } }) =>
                        formik.setFieldValue(item.key, value)
                      }
                    > */}
                    {item.items.map((element, count) => (
                      <FormControlLabel
                        key={count}
                        sx={{ mb: -1, width: "100%" }}
                        value={formik.values[element.key]}
                        control={
                          <Checkbox
                            size="small"
                            onChange={({ target: { checked } }) =>
                              formik.setFieldValue(element.key, checked)
                            }
                          />
                        }
                        id={element.key}
                        name={element.key}
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
                    {/* </RadioGroup> */}

                    <div
                      style={{
                        color: "#475467",
                        fontSize: 13,
                        paddingLeft: 25,
                      }}
                    >
                      Once you have provided a good service, you will be paid
                      via transfer
                    </div>
                  </Box>
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
            onClick={() => setActive("skills")}
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

      <SuccessDialog dialog={dialog} setDialog={setDialog} />
    </Box>
  );
}
