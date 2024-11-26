import { Box, CssBaseline, Grid, Stack, Button } from "@mui/material";
import Topbar from "../../components/guests/topbar";
import EmptyImage from "../../assets/img/empty.png";
import { West } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#FAFAFA" }}>
      <Topbar />
      <CssBaseline />
      <Grid
        container
        spacing={1}
        sx={{ minHeight: "100vh" }}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={3} md={3} lg={3} />
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={EmptyImage}
              style={{ width: 120, height: 120 }}
              className="w3-image"
            />
            <br />
            <h4
              style={{
                color: "#101828",
                fontWeight: "700",
                fontSize: 40,
              }}
            >
              We can’t find that page
            </h4>
            <p
              style={{
                color: "#475467",
                fontSize: 14,
              }}
            >
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>
            <br />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
            >
              <Button
                variant="outlined"
                startIcon={<West />}
                onClick={() => navigate(-1)}
                sx={{
                  textTransform: "none",
                  color: "#F56F46",
                  fontWeight: "600",
                  fontSize: 13,
                  borderColor: "#F99E78",
                  width: 160,
                  height: 45,
                }}
              >
                Go back
              </Button>
              <Button
                component={Link}
                to={"/"}
                variant="contained"
                color="primary"
                disableElevation
                sx={{
                  textTransform: "none",
                  backgroundColor: "#1F37AE",
                  fontWeight: "600",
                  fontSize: 13,

                  width: 160,
                  height: 45,
                }}
              >
                Take me home
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} />
      </Grid>
    </Box>
  );
}
