import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import ClientTestimonial from "../../../assets/img/client-testimonial.png";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#ff6f43",
  textAlign: "center",
  marginBottom: theme.spacing(5),
  fontSize: "2.1rem",
}));

const TestimonialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

const ImageBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#1a237e",
  borderRadius: 8,
  zIndex: 0,
}));

const ClientImage = styled("img")(({ theme }) => ({
  position: "relative",
  height: 400,
  width: "100%",
  objectFit: "cover",
  borderRadius: 8,
  zIndex: 1,
  padding: theme.spacing(2),
  background: "white",
}));

const ClientNameWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 20, // Adjusted to bring the text up
  left: 165,
  display: "flex",
  gap: theme.spacing(0.5),
  alignItems: "center",
  zIndex: 2, // Ensuring it's above the image
  padding: "4px 8px",
}));

const ClientNameWhite = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.75rem",
  color: "white",
}));

const ClientNameBlue = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.75rem",
  color: "#1a237e",
}));

const QuoteWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  position: "relative",
}));

const QuoteText = styled(Typography)(({ theme }) => ({
  fontSize: "2.4rem",
  fontWeight: 300,
  lineHeight: 1.6,
  position: "relative",
  paddingLeft: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const QuotationMark = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  fontSize: "7rem",
  color: "#1a237e",
  position: "absolute",
  lineHeight: 1,
}));

const NavigationButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(1),
  marginTop: theme.spacing(4),
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#13183F",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#232958",
    border: "2px solid #232958",
  },
  width: 44,
  height: 44,
  borderRadius: "8px",
}));

const ClientTestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emmanuel Samuel",
      image: ClientTestimonial,
      quote:
        "I had a major plumbing emergency, and ProHandy saved the day, quick response, professional service, and fair pricing.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: ClientTestimonial,
      quote:
        "The electrician was knowledgeable and fixed my wiring issue in no time. I'll definitely use ProHandy again!",
    },
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionTitle variant="h3" component="h2">
        What Clients Says
      </SectionTitle>

      <TestimonialContainer>
        <ImageWrapper>
          <ImageBackground />
          <ClientImage src={testimonial.image} alt={testimonial.name} />
          <ClientNameWrapper>
            <ClientNameWhite>{testimonial.name.split(" ")[0]} </ClientNameWhite>
            <ClientNameBlue>{testimonial.name.split(" ")[1]}</ClientNameBlue>
          </ClientNameWrapper>
        </ImageWrapper>

        <QuoteWrapper>
          <QuotationMark sx={{ top: -40, left: -10 }}>&ldquo;</QuotationMark>

          <QuoteText variant="body1">{testimonial.quote}</QuoteText>

          <QuotationMark sx={{ bottom: -80, right: 0 }}>&rdquo;</QuotationMark>
        </QuoteWrapper>
      </TestimonialContainer>

      <NavigationButtons>
        <NavButton onClick={handlePrev} aria-label="Previous testimonial">
          <ArrowBackIcon />
        </NavButton>
        <NavButton onClick={handleNext} aria-label="Next testimonial">
          <ArrowForwardIcon />
        </NavButton>
      </NavigationButtons>
    </Container>
  );
};

export default ClientTestimonialsSection;
