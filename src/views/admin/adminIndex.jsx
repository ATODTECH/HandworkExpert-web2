import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import TopBar from "../../components/admin/topbar";
import Sidebar from "../../components/admin/sidebar";
import Dashboard from "./dashboard/dashboard";
import { getUserDetails } from "../../store/userStore";

export default function AdminIndex() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { pathname } = useLocation();
  const drawerWidth = 240;

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      dispatch(getUserDetails(user.id));
    }
  }, [user?.id]);

  useEffect(() => {
    setMobileOpen(false);
    let array = pathname.split("/");
    document.title = `${array[2]?.toUpperCase()} - Admin`;
  }, [pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <CssBaseline />
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          backgroundColor: "white",
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
        {/* <Dashboard /> */}
      </Box>
    </Box>
  );
}



// import { Outlet } from "react-router-dom";
// import { Box, CssBaseline, Toolbar } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";

// import TopBar from "../../components/admin/topbar";
// import Sidebar from "../../components/admin/sidebar";
// import { getUserDetails } from "../../store/userStore";

// export default function AdminIndex() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawerWidth = 240;
//   const { pathname } = useLocation();
//   const { token, user } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!token || window.localStorage.getItem("userToken") === undefined) {
//       window.localStorage.clear();
//       return navigate("/", { replace: true });
//     }

//     if (user?.role !== "ADMIN") return navigate(-1, { replace: true });
//   }, []);

//   useEffect(() => {
//     dispatch(getUserDetails(user?.id));
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     let array = pathname.split("/");
//     document.title = `${array[2]?.toUpperCase()} - Admin`;
//   }, [pathname]);

//   return (
//     <Box sx={{ display: "flex" }}>
//       <TopBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
//       <CssBaseline />

//       <Sidebar
//         drawerWidth={drawerWidth}
//         mobileOpen={mobileOpen}
//         handleDrawerToggle={handleDrawerToggle}
//       />

//       <Box
//         component="main"
//         sx={{
//           minHeight: "100vh",
//           backgroundColor: "white",
//           flexGrow: 1,
//           p: 3,
//         }}
//       >
//         <Toolbar />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// }
