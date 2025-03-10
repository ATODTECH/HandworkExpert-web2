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
          position: "relative",
          px: { xs: 0, md: 10 },
          gap: { xs: 4, md: 8 },
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
              fontSize: { xs: "1.6rem", md: "1.5rem" },
              color: "#333",
              width: "100%",
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
                borderRadius: "4px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#232958",
                },
              }}
            >
              Register as a Professional
            </StyledButton>
            <SecondaryButton
              sx={{
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
          {/* Main image */}
          <Box
            component="img"
            src={BgImage}
            alt="Skilled professionals working as artisans"
            sx={{
              width: "90%",
              height: "auto",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default JoinAsArtisan;
