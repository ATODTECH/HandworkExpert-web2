import React from "react";
import { Box, Typography, Grid, Card, Container } from "@mui/material";
// import searchImage from "../../../assets/img/work_1.png";
// import chooseImage from "../../../assets/img/work_2.png";
// import bookImage from "../../../assets/img/work_3.png";
import doneImage from "../../../assets/img/work_4.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Search for a service",
      description: "Browse through various artisans categories",
      // image: searchImage,
      image: "/assets/img/work_1.png",
    },
    {
      title: "Choose a skilled professional",
      description: "View artisan profile, reviews and ratings",
      // image: chooseImage,
      image: "/assets/img/work_2.png",
    },
    {
      title: "Book and pay securely",
      description: "Schedule your services with confidence",
      // image: bookImage,
      image: "/assets/img/work_3.png",
    },
    {
      title: "Get the job done",
      description: "Sit back while the expert handles the work",
      image: doneImage,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          color: "#F85A2B",
          fontWeight: 600,
          mb: 6,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        How It Works
      </Typography>

      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #e0e0e0",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                p: 1.3, // Added padding around the entire card content
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  mb: 2, // Margin bottom for spacing between image and text
                  // height: "200px",
                  height: "auto",
                }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    // fontSize: "1.13rem",
                    fontSize: { xs: "1.5rem", md: "1.13rem" },
                    mb: 1,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  // color="text.secondary"
                  color="#292626"
                  sx={{
                    // fontSize: "15px",
                    // fontSize: "1.1rem",
                    fontSize: { xs: "1.2rem", md: "1.2rem" },
                    fontWeight: 500,
                    wordWrap: "break-word",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
