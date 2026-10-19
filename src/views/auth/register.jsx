// import { Close, VisibilityOff, Visibility } from "@mui/icons-material";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button,
//   IconButton,
//   Box,
//   TextField,
//   InputAdornment,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import { useFormik } from "formik";
// import { useState } from "react";
// import * as yup from "yup";
// import { LoadingButton } from "@mui/lab";
// import { Link } from "react-router-dom";
// import { MuiTelInput } from "mui-tel-input";
// import { RegisterUser } from "../../services/user-services";
// import ToastMessage from "../../../hooks/toastMessage";
// import YupPassword from "yup-password";
// export default function Register({ dialog, setDialog, setOpenLogin, regAs }) {
//   YupPassword(yup);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       name: "",
//       phone: "+234",
//     },
//     validationSchema: yup.object({
//       email: yup
//         .string()
//         .required("Email is required")
//         .email("Enter a valid email address"),
//       password: yup
//         .string()
//         .required("Password is required")
//         .min(
//           8,
//           "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
//         )
//         .minLowercase(1, "Password must contain at least 1 lower case letter")
//         .minUppercase(1, "Password must contain at least 1 upper case letter")
//         .minNumbers(1, "Password must contain at least 1 number")
//         .minSymbols(1, "Password must contain at least 1 special character"),
//       phone: yup
//         .string()
//         .required("Phone number is required")
//         .min(9, "Invalid phone number"),
//       name: yup
//         .string()
//         .required("Name is required")
//         .min(5, "Name is too short"),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);

//       await RegisterUser({
//         email: values.email,
//         first_name: values.name.split(" ")[0],
//         last_name: values.name.split(" ")[1],
//         contact: values.phone?.trim()?.replaceAll(" ", ""),
//         role: regAs?.toUpperCase(),
//         password: values.password,
//       })
//         .then((response) => response.data)
//         .then((response) => {
//           setLoading(false);
//           ToastMessage(response.status ? "success" : "error", response.message);
//           if (response.status) {
//             setDialog(false);
//             setOpenLogin(true);
//             formik.resetForm();
//           }
//         })
//         .catch((e) => {
//           setLoading(false);
//         });
//     },
//   });
//   const [showPassword, togglePassword] = useState(false);
//   const [checked, setChecked] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [phone, setPhone] = useState("+234");
//   return (
//     <Dialog
//       open={dialog}
//       onClose={() => setDialog(false)}
//       aria-labelledby={"Login-dialog"}
//       fullWidth
//       maxWidth={"sm"}
//     >
//       <DialogTitle sx={{ textAlign: "right" }}>
//         <IconButton
//           size="small"
//           sx={{
//             backgroundColor: "#4F4F4F",
//             color: "white",
//             "&:hover": { backgroundColor: "#4F4F4F" },
//           }}
//           aria-label="close"
//           onClick={() => setDialog(false)}
//         >
//           <Close sx={{ fontSize: 14 }} />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <Box
//           sx={{
//             pt: 1,
//             px: 2,
//             pb: 3,
//           }}
//         >
//           <h4
//             style={{
//               color: "#292626",
//               fontWeight: "500",
//               fontSize: 40,
//               textAlign: "center",
//               textTransform: "capitalize",
//             }}
//           >
//             Join As A {regAs}
//           </h4>
//           <p
//             style={{
//               color: "##3D3D3D",
//               fontWeight: "500",
//               fontSize: 13,
//               textAlign: "center",
//               marginTop: -10,
//             }}
//           >
//             Registration for Customer
//           </p>

//           <form onSubmit={formik.handleSubmit}>
//             <label
//               style={{ color: "#292626", fontWeight: "600", fontSize: 13 }}
//             >
//               Name
//             </label>
//             <TextField
//               id="name"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               variant="outlined"
//               fullWidth
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//               sx={{ mb: 2 }}
//             />

//             <label
//               style={{ color: "#292626", fontWeight: "600", fontSize: 13 }}
//             >
//               Email
//             </label>
//             <TextField
//               id="email"
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               variant="outlined"
//               fullWidth
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//               sx={{ mb: 2 }}
//             />

//             <label
//               style={{ color: "#292626", fontWeight: "600", fontSize: 13 }}
//             >
//               Password
//             </label>
//             <TextField
//               variant="outlined"
//               id={"password"}
//               type={showPassword ? "text" : "password"}
//               fullWidth
//               name={"password"}
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => togglePassword((prev) => !prev)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ mb: 2 }}
//             />

//             <label
//               style={{ color: "#292626", fontWeight: "600", fontSize: 13 }}
//             >
//               Mobile Number
//             </label>
//             <MuiTelInput
//               id="phone"
//               name="phone"
//               value={phone}
//               onChange={(value) => {
//                 setPhone(value);
//                 formik.setFieldValue("phone", value);
//               }}
//               variant="outlined"
//               fullWidth
//               error={formik.touched.phone && Boolean(formik.errors.phone)}
//               helperText={formik.touched.phone && formik.errors.phone}
//               sx={{ mb: 2 }}
//             />

//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <div>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       value={checked}
//                       onChange={({ target }) => setChecked(target.checked)}
//                       sx={{ color: "#3D3D3D" }}
//                     />
//                   }
//                   label={
//                     <span
//                       style={{
//                         color: "#3D3D3D",
//                         fontWeight: "600",
//                         textTransform: "none",
//                         fontSize: 13,
//                       }}
//                     >
//                       I agree to Artisan’s{" "}
//                       <Link to={"/"} style={{ color: "#F56F46" }}>
//                         Attic Privacy Policy
//                       </Link>{" "}
//                       &{" "}
//                       <Link to={"/"} style={{ color: "#F56F46" }}>
//                         Terms and Conditions.
//                       </Link>
//                     </span>
//                   }
//                 />
//               </div>
//             </div>

//             <br />

//             <LoadingButton
//               type="submit"
//               variant="contained"
//               disableElevation
//               loading={loading}
//               fullWidth
//               sx={{
//                 height: "50px",
//                 backgroundColor: "primary",
//                 fontSize: 16,
//                 fontWeight: "700",
//                 color: "white",
//               }}
//               style={{ textTransform: "capitalize" }}
//             >
//               <span>Register</span>
//             </LoadingButton>
//             <div style={{ textAlign: "center", marginTop: 15 }}>
//               <span>
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => {
//                     setOpenLogin(true);
//                     setDialog(false);
//                   }}
//                   style={{ color: "#F56F46", cursor: "pointer" }}
//                 >
//                   Login
//                 </span>
//               </span>
//             </div>
//           </form>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// }
