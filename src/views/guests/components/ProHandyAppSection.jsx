import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import PhoneImage from "../../../assets/img/phones-image.png";

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

const StoreButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: theme.spacing(1.5, 3),
  textTransform: "none",
  boxShadow: theme.shadows[2],
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
    boxShadow: theme.shadows[4],
  },
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
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

        <Box>
          <StoreButton variant="contained" startIcon={<AppleIcon />}>
            Download on App Store
          </StoreButton>

          <StoreButton variant="contained" startIcon={<AndroidIcon />}>
            Download on Google Play
          </StoreButton>
        </Box>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ProHandyAppSection;
