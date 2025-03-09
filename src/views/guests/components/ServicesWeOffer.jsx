import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import your images
import plumbingImage from "../../../assets/img/services_we_offer.png";
import carpentryImage from "../../../assets/img/services_we_offer.png";
import electricalImage from "../../../assets/img/services_we_offer.png";

const ServicesWeOffer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Services data
  const services = [
    {
      title: "Plumbing",
      description:
        "Leak repairs, pip installations, tank replacement and more.",
      image: plumbingImage,
    },
    {
      title: "Carpentry",
      description:
        "Custom furniture, repairs, installations, and woodworking services.",
      image: carpentryImage,
    },
    {
      title: "Electrical",
      description:
        "Wiring, lighting installation, repairs, and safety inspections.",
      image: electricalImage,
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  const handleNext = () => {
    setCurrentService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left side - overlapping images */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: { xs: "350px", md: "485px" },
              width: "90%",
              //   maxWidth: "300px",
              //   width: "600px",
            }}
          >
            {/* Main image - front layer */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "0%", md: "0%" },
                left: { xs: "15%", md: "15%" },
                width: "90%",
                // height: "100%",
                // borderRadius: "24px",
                overflow: "hidden",
                zIndex: 3,
                // boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={services[currentService].image}
                alt={services[currentService].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right side - Service description and navigation */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: { md: 6 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#F85A2B",
              fontWeight: 600,
              mb: 2.5,
              fontSize: { xs: "2.2rem", md: "2.1rem" },
            }}
          >
            Services We Offer
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              mb: 2.5,
              fontSize: { xs: "1.8rem", md: "1.7rem" },
              color: "#333",
            }}
          >
            {services[currentService].title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              mb: 2.5,
              color: "#555",
              lineHeight: 1.5,
            }}
          >
            {services[currentService].description}
          </Typography>

          {/* Navigation buttons */}
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                backgroundColor: "#13183F",
                color: "white",
                "&:hover": {
                  backgroundColor: "#232958",
                },
                width: 44,
                height: 44,
                borderRadius: "8px",
              }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                backgroundColor: "white",
                color: "#13183F",
                border: "1px solid #13183F",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                width: 44,
                height: 44,
                borderRadius: "8px",
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesWeOffer;
