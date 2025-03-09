import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import PhoneImage from "../../../assets/img/phones-image.png";
import GooglePlay from "../../../assets/img/google-play.png";
import AppStore from "../../../assets/img/apple-store.png";

// Custom styled components
const SectionContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const PhoneContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginRight: 0,
    marginBottom: theme.spacing(6),
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2.1rem",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 500,
  marginBottom: theme.spacing(5),
  lineHeight: 1.5,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
}));

const ProHandyAppSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer maxWidth="lg">
      <PhoneContainer>
        {/* Single phone image container */}
        <Box
          component="img"
          src={PhoneImage}
          alt="ProHandy App Screenshots"
          sx={{
            width: isMobile ? 280 : 550,
            height: "auto",
          }}
        />
      </PhoneContainer>

      <ContentContainer>
        <MainHeading variant="h2">Get the Prohandy App</MainHeading>

        <SubHeading variant="h5">
          Book services on the go. Faster, easier, and more convenient.
        </SubHeading>

        <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
          <Box
            component="img"
            src={AppStore}
            alt="Professional worker with safety equipment"
            sx={{
              // width: isMobile ? "100%" : "100%",
              width: 200,
              height: "auto",
              cursor: "pointer",
            }}
          />

          <Box
            component="img"
            src={GooglePlay}
            alt="Professional worker with safety equipment"
            sx={{
              // width: isMobile ? "100%" : "100%",
              width: 200,
              height: "auto",
            }}
          />
        </Box>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ProHandyAppSection;
