import { Box, CssBaseline, Grid, Stack } from "@mui/material";
import TopBar from "../../components/users/topbar";
import SideBar from "../../components/users/sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import Footer from "../../components/guests/footer";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../store/userStore";
export default function UserIndex() {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const activeLink = useMemo(() => {
    const array = pathname.split("/");
    return array.at(-1);
  }, [pathname]);

  useEffect(() => {
    dispatch(getUserDetails(user?.id));
  }, [pathname]);
  return (
    <Box>
      <TopBar />
      <CssBaseline />

      <Grid container spacing={2} sx={{ mt: 10 }}>
        <Grid item xs={12} sm={1} lg={1} md={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            sx={{ fontSize: 13, fontWeight: "600" }}
          >
            <div style={{ color: "#82898F" }}>
              <Link to={"/"}>Home</Link>
            </div>
            <div style={{ marginTop: 4 }}>
              <ChevronRight sx={{ fontSize: 14 }} />
            </div>
            <div style={{ color: "#0E1B28", textTransform: "capitalize" }}>
              {activeLink}
            </div>
          </Stack>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} lg={3} md={3}>
              <SideBar />
            </Grid>
            <Grid item xs={12} sm={9} lg={9} md={9} sx={{}}>
              <Box
                sx={{
                  borderLeft: "1px solid #EBEBF5",
                  minHeight: "70vh",
                  padding: "25px 20px",
                }}
              >
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <Footer />
    </Box>
  );
}
