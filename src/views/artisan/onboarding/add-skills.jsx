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
  Select,
  Checkbox,
} from "@mui/material";
import { useMemo, useRef, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import ToastMessage from "../../../../hooks/toastMessage";
import { CreateSkills } from "../../../services/user-services";
export default function AddSkills({ setActive, setPercent }) {
  const { user, service_category } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const serviceList = useMemo(() => service_category || [], [service_category]);
  const formInput = useMemo(
    () => [
      {
        title: "What do you primarily do to make money?",
        value: "",
        col: 12,
        type: "select",
        key: "services",
        inputProps: false,
        items: serviceList,
      },
      {
        title: "Describe what you do",
        value: "",
        col: 12,
        type: "textarea",
        key: "description",
        inputProps: false,
      },
      {
        title: "How much do you charge (Lowest)",
        value: "",
        col: 6,
        type: "number",
        key: "base_charge",
        inputProps: false,
      },
      {
        title: "How much do you charge (Highest)",
        value: "",
        col: 6,
        type: "number",
        key: "cap_charge",
        inputProps: false,
      },

      {
        title: "When do you like to work?",
        value: "",
        col: 12,
        type: "radio",
        key: "work_time",
        inputProps: false,
        items: [
          {
            name: "Weekdays Only - (Mon - Fri)",
            id: "weekdays",
            key: "weekdays_only",
          },
          {
            name: "Weekend Only - (Sat - Sun)",
            id: "weekends",
            key: "weekends_only",
          },
          {
            name: "Weekdays and Weekends",
            id: "all",
            key: "weekdays_and_weekends",
          },
        ],
      },
    ],
    []
  );

  const formik = useFormik({
    initialValues: {
      services: [],
      description: "",
      base_charge: "",
      cap_charge: "",
      // work_time: "weekdays",
      weekdays_only: false,
      weekends_only: false,
      weekdays_and_weekends: false,
    },
    validationSchema: yup.object({
      services: yup.array().min(1, "Required"),
      description: yup
        .string()
        .required("Required")
        .min(20, "Description is too short"),
      base_charge: yup.string().required("Required"),
      cap_charge: yup.string().required("Required"),
      // work_time: yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
       

      setLoading(true);
      await CreateSkills({
        ...values,
        id: user?.id,
      })
        .then((response) => response.data)
        .then((response) => {
          setLoading(false);
          ToastMessage(response.status ? "success" : "error", response.message);
          if (response.status) {
            setPercent(80);
            setActive("bank");
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
                  <Select
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
                    multiple
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
                      <MenuItem key={count} value={element.id}>
                        {element.name}
                      </MenuItem>
                    ))}
                  </Select>
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
                {item.type === "radio" && (
                  <Box>
                    {/* <RadioGroup
                      name={item.key}
                      value={formik.values[item.key]}
                      onChange={({ target: { value } }) =>
                        formik.setFieldValue(item.key, value)
                      }
                    > */}
                    {item.items.map((element, index) => (
                      <FormControlLabel
                        key={index}
                        sx={{ mb: -1, width: "100%" }}
                        value={formik.values[element.key]}
                        id={element.key}
                        name={element.key}
                        control={
                          <Checkbox
                            size="small"
                            onChange={({ target: { checked } }) =>
                              formik.setFieldValue(element.key, checked)
                            }
                          />
                        }
                        label={
                          <span
                            style={{
                              color: "#344054",
                              fontSize: 13,
                              fontWeight: "500",
                            }}
                          >
                            {element.name}
                          </span>
                        }
                      />
                    ))}
                    {/* </RadioGroup> */}
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
            onClick={() => setActive("documents")}
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
