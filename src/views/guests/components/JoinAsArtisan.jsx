import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import BgImage from "../../../assets/img/join_as_artisan.png";

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
  color: "#ff6f43",
  marginBottom: theme.spacing(2),
}));

const JoinAsArtisan = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Left Content Section */}
        <Box sx={{ maxWidth: isMobile ? "100%" : "45%", mb: isMobile ? 4 : 0 }}>
          <MainHeading
            variant="h3"
            sx={{
              color: "#F85A2B",
              fontWeight: 600,
              mb: 2.5,
              fontSize: { xs: "2.2rem", md: "2.1rem" },
            }}
          >
            Join As as Artisan
          </MainHeading>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 400,
              mb: 2.5,
              fontSize: { xs: "1.8rem", md: "1.5rem" },
              color: "#333",
              width: "65%",
              lineHeight: 1.6,
            }}
          >
            Are you a skilled professional looking for more job opportunities?
            Join ProHandy today and connect with customers in need of your
            expertise.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <StyledButton
              variant="contained"
              sx={{
                backgroundColor: "#172153",
                color: "white",
                // py: 1.5,
                // px: 3,
                borderRadius: "4px",
                // textTransform: "none",
                fontWeight: 600,
                // fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#232958",
                },
              }}
            >
              Register as a Professional
            </StyledButton>
            <SecondaryButton
              sx={{
                // color: "#333",
                // textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Learn More
            </SecondaryButton>
          </Stack>
        </Box>

        {/* Right Image Section */}
        <Box
          sx={{
            position: "relative",
            width: isMobile ? "100%" : "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Decorative element - light gray rectangle */}
          {/* <Box
            sx={{
              width: "90%",
              height: "90%",
              position: "absolute",
              right: -20,
              top: -40,
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              zIndex: 0,
            }}
          /> */}

          {/* Main image */}
          <Box
            component="img"
            // src="/path/to/your/craftspeople-image.jpg" // Replace with your actual image path
            src={BgImage}
            alt="Skilled professionals working as artisans"
            sx={{
              //   maxWidth: "100%",
              width: "90%",
              height: "auto",
              //   borderRadius: "12px",
              position: "relative",
              zIndex: 1,
              //   boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default JoinAsArtisan;
