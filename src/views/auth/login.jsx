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
// import { useCallback, useState } from "react";
// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { LoadingButton } from "@mui/lab";
// import { useNavigate } from "react-router-dom";
// import { LoginUser } from "../../services/user-services";
// import ToastMessage from "../../../hooks/toastMessage";
// import { updateUser, updateUserToken } from "../../store/userStore";
// export default function Login({ dialog, setDialog, setRegAs, setOpenReg }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: yup.object({
//       email: yup
//         .string()
//         .required("Email is required")
//         .email("Enter a valid email address"),
//       password: yup.string().required("Password is required"),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);
//       await LoginUser(values)
//         .then((response) => response.data)
//         .then((response) => {
//           setLoading(false)
//           ToastMessage(response ? "success" : "error", response.message);
//           if (response) {
            
//             dispatch(updateUser(response?.data));
//             dispatch(updateUserToken(response?.data?.access));
//             window.localStorage.setItem("userToken", response?.data?.access);
//             formik.resetForm()
//             setDialog(false);
//             // navigate("/user/profile");
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
//             pb: 0,
//           }}
//         >
//           <h4
//             style={{
//               color: "#292626",
//               fontWeight: "500",
//               fontSize: 40,
//               textAlign: "center",
//             }}
//           >
//             Welcome Back
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
//             Enter your email and password to access your account
//           </p>

//           <form onSubmit={formik.handleSubmit}>
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
//               placeholder="Enter your email"
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
//               placeholder="Enter your password"
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
//             />

//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <div>
//                 <FormControlLabel
//                   //   InputProps={{ style: { label: { fontSize: "12px" } } }}
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
//                       Remember Me
//                     </span>
//                   }
//                 />
//               </div>
//               <div style={{ marginTop: 7 }}>
//                 <Button
//                   variant={"text"}
//                   //   onClick={() => setDialog(true)}
//                   style={{
//                     color: "#3D3D3D",
//                     fontWeight: "600",
//                     textTransform: "none",
//                     fontSize: 13,
//                   }}
//                 >
//                   Forgot Password
//                 </Button>
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
//               <span>Login</span>
//             </LoadingButton>
//             <div style={{ textAlign: "center", marginTop: 15 }}>
//               <Button
//                 variant="text"
//                 sx={{ textTransform: "none", color: "#3E3E3E" }}
//               >
//                 Don’t have an account?
//               </Button>
//             </div>
//           </form>
//         </Box>
//       </DialogContent>
//       <DialogActions sx={{ justifyContent: "space-between", px: 4, pb: 3 }}>
//         <Button
//           onClick={() => {
//             setOpenReg(true);
//             setRegAs("ARTISAN");
//             setDialog(false);
//           }}
//           variant="text"
//           sx={{
//             textTransform: "none",
//             color: "#F56F46",
//             fontWeight: "600",
//             fontSize: 15,
//           }}
//         >
//           Join as an Artisan
//         </Button>

//         <Button
//           onClick={() => {
//             setOpenReg(true);
//             setRegAs("USER");
//             setDialog(false);
//           }}
//           variant="text"
//           sx={{
//             textTransform: "none",
//             color: "#F56F46",
//             fontWeight: "600",
//             fontSize: 15,
//           }}
//         >
//           Join as a User
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
