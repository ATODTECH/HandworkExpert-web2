import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import BgCheck from "../../../assets/img/bg-check.png";
import SecureTrans from "../../../assets/img/secure-trans.png";
import CustomerSupport from "../../../assets/img/customer-support.png";

// Custom styled components
const TrustFactorCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "#f2f3f7",
  borderRadius: 16,
  boxShadow: "none",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#ff6f43",
  textAlign: "center",
  marginBottom: theme.spacing(5),
  fontSize: "2.1rem",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  marginBottom: theme.spacing(2),
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  color: "#424242",
  fontWeight: 500,
  fontSize: "1.65rem",
  lineHeight: 1.5,
}));

const TrustFactorsSection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <SectionTitle variant="h3" component="h2">
        Services Guaranteed And Trust Factors
      </SectionTitle>

      <Grid container spacing={5}>
        {/* Background Checked Card */}
        <Grid item xs={12} md={4}>
          <TrustFactorCard>
            <IconCircle>
              <img
                src={BgCheck}
                alt="Background Check"
                style={{ width: "90px", height: "90px" }}
              />
            </IconCircle>
            <CardTitle variant="h5">Background Checked</CardTitle>
            <CardDescription variant="body1">
              Every professional is verified for skills and trustworthiness.
            </CardDescription>
          </TrustFactorCard>
        </Grid>

        {/* Secure Transactions Card */}
        <Grid item xs={12} md={4}>
          <TrustFactorCard>
            <IconCircle>
              <img
                src={SecureTrans}
                alt="Secure Transactions"
                style={{ width: "90px", height: "90px" }}
              />
            </IconCircle>
            <CardTitle variant="h5">Secure Transactions</CardTitle>
            <CardDescription variant="body1">
              Payments are safe, and completion is guaranteed.
            </CardDescription>
          </TrustFactorCard>
        </Grid>

        {/* Customer Support Card */}
        <Grid item xs={12} md={4}>
          <TrustFactorCard>
            <IconCircle>
              <img
                src={CustomerSupport}
                alt="Customer Support"
                style={{ width: "90px", height: "90px" }}
              />
            </IconCircle>
            <CardTitle variant="h5">Customer Support</CardTitle>
            <CardDescription variant="body1">
              Dedicated help whenever you need it.
            </CardDescription>
          </TrustFactorCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrustFactorsSection;
