// import {
//   Box,
//   CssBaseline,
//   Grid,
//   Stack,
//   Button,
//   Chip,
//   Avatar,
//   Pagination,
//   PaginationItem,
// } from "@mui/material";
// import Topbar from "../../components/guests/topbar";
// import BgImage from "../../assets/img/home-bg.png";
// import { useEffect, useMemo, useState } from "react";
// import ServiceImage from "../../assets/img/service-image.png";
// import ServiceImage2 from "../../assets/img/service-image-3.png";
// import ServiceImag3 from "../../assets/img/service-image-3.png";
// import ServiceImag4 from "../../assets/img/service-image-4.png";
// import ServiceImag5 from "../../assets/img/service-image-5.png";
// import {
//   ArrowBack,
//   ArrowForward,
//   Circle,
//   LocationOnOutlined,
//   TvOutlined,
// } from "@mui/icons-material";
// import UserImage from "../../assets/img/user.png";
// import ServiceList from "./service-list";
// import Footer from "../../components/guests/footer";
// import { useDispatch, useSelector } from "react-redux";
// import DataLoading from "../../components/data-loading";
// import { getCategories, getServiceCategories } from "../../store/userStore";
// import { Link } from "react-router-dom";
// export default function Home() {
//   const [search, setSearch] = useState("");
//   const [address, setAddress] = useState(
//     "3 Agbo Akomolafe St, Isheri Olofin Lagos"
//   );

//   const { categories, service_category } = useSelector((state) => state.user);

//   const popularServices = useMemo(() => {
//     let data = service_category || [];
//     return data.slice(0, 7);
//   }, [service_category]);

//   const categoryList = useMemo(() => categories || [], [categories]);
//   const servicesImage = [
//     ServiceImage,
//     ServiceImage2,
//     ServiceImag3,
//     ServiceImag4,
//     ServiceImag5,
//   ];

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCategories());
//     dispatch(getServiceCategories());
//   }, []);

//   return (
//     <Box>
//       {categories && !service_category ? (
//         <DataLoading mt={50} />
//       ) : (
//         <Box>
//           <Topbar popularServices={popularServices} />
//           <CssBaseline />
//           <Box
//             sx={{
//               mt: 0,
//               backgroundImage: `url(${BgImage})`,
//               backgroundSize: "cover",
//               minHeight: 750,
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: "rgba(23, 33, 83, 0.5)",
//                 width: "100%",

//                 minHeight: 750,
//               }}
//             >
//               <Grid container spacing={1} alignItems={"center"} minHeight={750}>
//                 <Grid item xs={12} sm={1} md={1} lg={1} />
//                 <Grid item xs={12} sm={10} md={10} lg={10}>
//                   <Box sx={{ textAlign: "center" }}>
//                     <h3
//                       style={{
//                         color: "white",
//                         fontSize: 60,
//                         fontWeight: "700",
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       What can we do for you <br /> today?
//                     </h3>
//                     <br />
//                     <br />
//                     <div
//                       style={{
//                         backgroundColor: "white",
//                         borderRadius: 50,
//                         height: 55,
//                         padding: "0 15px 0 25px",
//                       }}
//                     >
//                       <Stack
//                         direction={"row"}
//                         height={55}
//                         alignItems={"center"}
//                         width={"100%"}
//                         spacing={2}
//                       >
//                         <div>
//                           <TvOutlined
//                             sx={{ fontSize: 22, mt: 0.5, color: "#858585" }}
//                           />
//                         </div>
//                         <div style={{ flexGrow: 1 }}>
//                           <input
//                             value={search}
//                             onChange={({ target: { value } }) =>
//                               setSearch(value)
//                             }
//                             placeholder="What are you looking for?"
//                             className="home-input"
//                           />
//                         </div>
//                         <div
//                           style={{
//                             backgroundColor: "#858585",
//                             height: 45,
//                             width: 2,
//                           }}
//                         ></div>
//                         <div>
//                           <LocationOnOutlined
//                             sx={{ fontSize: 22, mt: 0.5, color: "#858585" }}
//                           />
//                         </div>

//                         <div style={{ flexGrow: 1 }}>
//                           <input
//                             value={address}
//                             onChange={({ target: { value } }) =>
//                               setAddress(value)
//                             }
//                             placeholder="Enter your address"
//                             className="home-input"
//                           />
//                         </div>
//                         <div>
//                           <Button
//                             disableElevation
//                             sx={{
//                               color: "white",
//                               textTransform: "none",
//                               //   fontSize: 11,
//                               fontWeight: "600",
//                               backgroundColor: "#F56F46",
//                               height: 40,
//                               borderRadius: 50,
//                               width: 120,
//                             }}
//                             variant="contained"
//                           >
//                             Search
//                           </Button>
//                         </div>
//                       </Stack>
//                     </div>
//                     <br />
//                     <br />
//                     <div>
//                       <Stack
//                         direction={"row"}
//                         alignItems={"center"}
//                         width={"100%"}
//                         justifyContent={"center"}
//                         flexWrap={"wrap"}
//                         rowGap={3}
//                         spacing={3}
//                       >
//                         <div>
//                           <Stack
//                             direction={"row"}
//                             alignItems={"center"}
//                             spacing={1}
//                           >
//                             <Circle
//                               sx={{ color: "#F5B946", fontSize: 17, mr: 0.3 }}
//                             />
//                             <div>
//                               <span
//                                 style={{
//                                   color: "white",
//                                   fontWeight: "600",
//                                   fontSize: 18,
//                                 }}
//                               >
//                                 Popular Services
//                               </span>
//                             </div>
//                           </Stack>
//                         </div>
//                         {popularServices.map((item, index) => (
//                           <Link key={index} to={`/services/${item.id}`}>
//                             <Chip
//                               label={item.name}
//                               sx={{
//                                 fontSize: 15,
//                                 border:
//                                   index !== 1
//                                     ? "1px dashed white"
//                                     : "1px solid #F56F46",
//                                 color: "white",
//                                 backgroundColor:
//                                   index === 1 ? "#F56F46" : "transparent",
//                               }}
//                             ></Chip>
//                           </Link>
//                         ))}
//                       </Stack>
//                     </div>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </div>
//           </Box>
//           <Box
//             sx={{
//               px: 2,
//               py: 10,
//             }}
//           >
//             <Grid container spacing={1}>
//               <Grid item xs={12} sm={1} md={1} lg={1} />
//               <Grid item xs={12} sm={10} md={10} lg={10}>
//                 <h3
//                   style={{
//                     textAlign: "center",
//                     fontSize: 25,
//                     color: "#292626",
//                     fontWeight: "600",
//                   }}
//                 >
//                   Discover Our Full Range Of Services
//                 </h3>
//                 <p
//                   style={{
//                     textAlign: "center",
//                     fontSize: 17,
//                     color: "#858585",
//                   }}
//                 >
//                   Artisan’s Attic offers a diverse array of expertly crafted
//                   services, seamlessly merging creativity{" "}
//                   <br className="w3-hide-small" />
//                   and technology to deliver solutions that exceed and drive
//                   digital success
//                 </p>
//                 <br />
//                 <br />
//                 <br />

//                 {categoryList.map((item, index) => (
//                   <Grid
//                     key={index}
//                     sx={{
//                       boxShadow: "0px 0px 4px 2px rgba(230, 230, 230, 0.25)",
//                       borderRadius: 1,
//                       padding: "10px 20px",
//                       backgroundColor: "white",
//                       mb: 5,
//                     }}
//                     container
//                     spacing={2}
//                     alignItems={"center"}
//                     // minHeight={300}
//                   >
//                     <Grid item xs={12} sm={6} lg={6} md={6}>
//                       <Stack
//                         direction={"row"}
//                         spacing={1}
//                         alignItems={"center"}
//                       >
//                         <div>
//                           <img
//                             className="w3-image"
//                             src={UserImage}
//                             style={{
//                               width: 50,
//                               height: 50,
//                               borderRadius: "50%",
//                             }}
//                           />
//                         </div>
//                         <div
//                           style={{
//                             color: "#292626",
//                             fontWeight: "700",
//                             fontSize: 15,
//                           }}
//                         >
//                           {item.name}
//                         </div>
//                       </Stack>

//                       <p
//                         style={{
//                           color: "#292626",
//                           fontSize: 14,
//                         }}
//                       >
//                         {item?.desc || "Not available"}
//                       </p>
//                       <br />
//                       <Stack
//                         direction={"row"}
//                         alignItems={"center"}
//                         width={"100%"}
//                         spacing={2}
//                         className="app-customize"
//                         style={{
//                           backgroundColor: "#172153",
//                           borderRadius: 10,
//                           padding: "15px 20px",
//                           overflowX: "scroll",
//                         }}
//                       >
//                         {item.service.map((service, index) => (
//                           <Link key={index} to={`/services/${service.id}`}>
//                             <div
//                               style={{
//                                 padding: "0 10px",
//                                 borderRight: "1px solid white",
//                                 minWidth: 180,
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   color: index !== 1 ? "white" : "#F56F46",
//                                   fontWeight: "500",
//                                   fontSize: 14,
//                                 }}
//                               >
//                                 {service?.name}
//                               </span>
//                             </div>
//                           </Link>
//                         ))}
//                       </Stack>
//                     </Grid>
//                     <Grid item xs={12} sm={1} lg={1} md={1} />
//                     <Grid item xs={12} sm={5} lg={5} md={5}>
//                       <ServiceList image={ServiceImag3} />
//                     </Grid>
//                   </Grid>
//                 ))}

//                 <br />
//                 <div style={{ textAlign: "center" }}>
//                   <Button
//                     disableElevation
//                     sx={{
//                       textTransform: "none",

//                       height: 40,
//                       width: 150,
//                       color: "white",
//                       backgroundColor: "#172153",
//                     }}
//                     variant="contained"
//                     color="primary"
//                   >
//                     View All
//                   </Button>
//                 </div>
//               </Grid>
//             </Grid>
//           </Box>
//           <br />

//           <br />
//           <Footer />
//         </Box>
//       )}
//     </Box>
//   );
// }
