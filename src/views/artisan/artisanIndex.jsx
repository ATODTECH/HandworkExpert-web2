import { Outlet } from "react-router-dom";

import { Box, CssBaseline, Toolbar } from "@mui/material";

import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import TopBar from "../../components/artisan/topbar";
import Sidebar from "../../components/artisan/sidebar";
import { getUserDetails } from "../../store/userStore";
// import { getUserProfile } from "../../store/userStore.js";
// import { getUserProfile } from "../../store/userStore.js";

export default function ArtisanIndex() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { pathname } = useLocation();

  const drawerWidth = 240;

  const { token, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(chatPage);

  useEffect(() => {
    if (!token || window.localStorage.getItem("userToken") === undefined) {
      window.localStorage.clear();
      return navigate("/", { replace: true });
    }

    if (user?.role !== "ADMIN") return navigate(-1, { replace: true });

    if (user?.role === "ADMIN" && !user?.onboardingComplete) {
      return navigate("/artisan/onboarding", { replace: true });
    }
  }, []);


  useEffect(() => {
    dispatch(getUserDetails(user?.id));
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    // dispatch(getUserProfile());
    let array = pathname.split("/");
    document.title = `${array[2]?.toUpperCase()} - Artisan`;
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
          //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}
