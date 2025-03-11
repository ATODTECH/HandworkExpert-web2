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
import ProImage from "../../../assets/img/professional-image.png";

// Custom styled components
const SectionContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(5, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #000000",
  borderRadius: "8px",
  marginBottom: theme.spacing(8),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
    maxWidth: "calc(100% - 32px)",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: "50%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    marginTop: theme.spacing(4),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2.1rem",
  fontWeight: 600,
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.25rem",
  },
}));

const Subtext = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  //   color:
  fontWeight: 400,
  marginBottom: theme.spacing(4),
  lineHeight: 1.5,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.125rem",
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#172153",
  color: "white",
  textTransform: "none",
  padding: theme.spacing(1.5, 1.5),
  borderRadius: 4,
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#0d1752",
    color: "white",
  },
  marginRight: theme.spacing(2),
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  color: "#172153",
  textTransform: "none",
  padding: theme.spacing(1.5, 1.5),
  fontSize: "1rem",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
}));

const ProfessionalsNetworkSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer maxWidth="md">
      <ContentContainer>
        <MainHeading variant="h2">
          Join the network of professionals around you
        </MainHeading>

        <Subtext variant="body1">
          Become part the working class community and find your next client and
          extra income.
        </Subtext>

        <Box>
          <RegisterButton variant="contained">
            Register as a Professional
          </RegisterButton>

          <LearnMoreButton variant="text">Learn More</LearnMoreButton>
        </Box>
      </ContentContainer>

      <ImageContainer>
        <Box
          component="img"
          src={ProImage}
          alt="Professional worker with safety equipment"
          sx={{
            width: isMobile ? "100%" : "100%",
            maxWidth: 500,
            height: "auto",
          }}
        />
      </ImageContainer>
    </SectionContainer>
  );
};

export default ProfessionalsNetworkSection;
