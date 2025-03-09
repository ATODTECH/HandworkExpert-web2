import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BgImage from "../../../assets/img/home-bg.png";
import Hero_1 from "../../../assets/img/hero_1.png";
import Hero_2 from "../../../assets/img/hero_2.png";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image - This would be replaced by your actual plumber image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(0deg, rgba(27, 40, 63, 0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
          },
        }}
      >
        <img
          src={BgImage}
          alt="Plumber working"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            height: "100%",
            alignItems: "center",
            pt: 8, // Add padding top to account for navbar
          }}
        >
          {/* Left side content */}
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box sx={{ maxWidth: isMobile ? "100%" : "80%" }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "3.3rem" },
                }}
              >
                Connecting You With Professional
              </Typography>
              <Typography
                variant="h1"
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "#FF7043", // Orange color similar to the image
                  display: "block",
                  mb: 3,
                  fontSize: { xs: "3.5rem", md: "3.3rem" },
                }}
              >
                Plumber
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  mb: 4,
                  color: "white",
                  maxWidth: "90%",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                From home repairs to expert craftsmanship, find verified
                artisans ready to deliver quality services quickly, efficiently,
                and at your convenience.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#fff",
                  color: "#172153",
                  borderRadius: "4px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
          </Grid>

          {/* Right side images */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ position: "relative", height: "400px", width: "100%" }}>
              {/* Main image (plumber) */}
              <Box
                sx={{
                  position: "absolute",
                  right: "29%",
                  top: "22.5%",
                  width: "250px",
                  height: "270px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 2,
                }}
              >
                <img
                  src={Hero_1}
                  alt="Plumber fixing sink"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              {/* Secondary image (carpenter) */}
              <Box
                sx={{
                  position: "absolute",
                  right: "0%",
                  top: "35%",
                  width: "210px",
                  height: "220px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 1,
                }}
              >
                <img
                  src={Hero_2}
                  alt="Carpenter working"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Navigation dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {[0, 1, 2, 3, 4].map((dot, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: index === 0 ? "#FF7043" : "#ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
