import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import images
import plumbingImage from "../../../assets/img/services_we_offer.png";
import carpentryImage from "../../../assets/img/services_we_offer.png";
import electricalImage from "../../../assets/img/services_we_offer.png";

// Custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1a237e",
  color: "white",
  padding: "10px 20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0d1752",
  },
  borderRadius: 4,
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: "#000",
  textTransform: "none",
  fontWeight: 500,
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#F85A2B",
  marginBottom: theme.spacing(2),
}));

const ServicesWeOffer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const services = [
    {
      title: "Plumbing",
      description:
        "Leak repairs, pipe installations, tank replacement and more.",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          // justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          position: "relative",
          px: { xs: 0, md: 10 },
        }}
      >
        {/* Left Side - Image */}
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            mb: isMobile ? 4 : 0,
          }}
        >
          <Box
            component="img"
            src={services[currentService].image}
            alt={services[currentService].title}
            sx={{
              width: "90%",
              height: "auto",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Right Side - Content */}
        <Box sx={{ maxWidth: isMobile ? "100%" : "45%" }}>
          <MainHeading
            variant="h3"
            sx={{
              color: "#F85A2B",
              fontWeight: 600,
              mb: 2.5,
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            Services We Offer
          </MainHeading>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              mb: 2.5,
              fontSize: { xs: "1.8rem", md: "2rem" },
              color: "#333",
            }}
          >
            {services[currentService].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "2rem" },
              mb: 2.5,
              color: "#292626",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            {services[currentService].description}
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
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
        </Box>
      </Box>
    </Container>
  );
};

export default ServicesWeOffer;
