import React, { useState, useEffect } from "react";
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
import Hero_3 from "../../../assets/img/hero_3.png";
import Hero_4 from "../../../assets/img/hero_4.png";
import Hero_5 from "../../../assets/img/hero_5.png";

// You'll need to import more hero images or create placeholders
const heroImages = [
  {
    main: Hero_1,
    secondary: Hero_2,
    title: "Plumber",
    description:
      "From home repairs to expert craftsmanship, find verified artisans ready to deliver quality services quickly, efficiently, and at your convenience.",
  },
  {
    main: Hero_2,
    secondary: Hero_3,
    title: "Electrician",
    description:
      "Professional electricians to handle all your electrical needs, from installation to repair, ensuring safety and efficiency in your home.",
  },
  {
    main: Hero_3,
    secondary: Hero_4,
    title: "Carpenter",
    description:
      "Skilled carpenters ready to transform your space with custom woodwork, furniture repair, and installation services.",
  },
  {
    main: Hero_4,
    secondary: Hero_5,
    title: "Painter",
    description:
      "Expert painters who deliver flawless finishes for your interior and exterior spaces, bringing your vision to life with precision.",
  },
  {
    main: Hero_5,
    secondary: Hero_1,
    title: "Gardener",
    description:
      "Professional gardeners to maintain and beautify your outdoor spaces, from lawn care to landscaping and garden design.",
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "88.5vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
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
          alt="Background"
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
            pt: 8,
          }}
        >
          {/* Left side content */}
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                maxWidth: isMobile ? "100%" : "80%",
                transition: "opacity 0.5s ease",
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "4.31rem" },
                }}
              >
                Connecting You With Professional
              </Typography>
              <Typography
                variant="h1"
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "#FF7043",
                  display: "block",
                  mb: 3,
                  fontSize: { xs: "3.5rem", md: "3.3rem" },
                  transition: "all 0.5s ease",
                }}
              >
                {heroImages[currentIndex].title}
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
                  transition: "opacity 0.5s ease",
                }}
              >
                From home repairs to expert craftsmanship, find verified
                artisans ready to deliver quality services quickly, efficiently,
                and at your convenience.
                {/* {heroImages[currentIndex].description} */}
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
              {/* Main image - positioned from the bottom rather than top */}
              <Box
                sx={{
                  position: "absolute",
                  right: "30%",
                  bottom: "18%", // Position from bottom instead of top
                  width: "250px",
                  height: "270px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 2,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  // Remove the conditional transform to ensure consistent positioning
                }}
              >
                <img
                  src={heroImages[currentIndex].main}
                  alt={`${heroImages[currentIndex].title} professional`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.5s ease",
                  }}
                />
              </Box>

              {/* Secondary image - positioned from the bottom as well */}
              <Box
                sx={{
                  position: "absolute",
                  right: "0%",
                  bottom: "18%", // Position from bottom instead of top
                  width: "210px",
                  height: "220px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  zIndex: 1,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  // Remove the conditional transform to ensure consistent positioning
                }}
              >
                <img
                  src={heroImages[currentIndex].secondary}
                  alt="Secondary professional"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.5s ease",
                  }}
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "10px", // Fixed height for the container
          }}
        >
          {heroImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: index === currentIndex ? "#FF7043" : "#ccc",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                display: "inline-block",
                "&:hover": {
                  bgcolor: index === currentIndex ? "#FF7043" : "#aaa",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
