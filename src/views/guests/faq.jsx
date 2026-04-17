import SEOHead from "../../components/SEOHead";
import {
  Box,
  CssBaseline,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Topbar from "../../components/guests/topbar";
import { useMemo, useState } from "react";
import Hero from "../../components/guests/hero";
import Footer from "../../components/guests/footer";
import { ExpandMore } from "@mui/icons-material";

export default function FAQ() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const list = [
    {
      title: "What is Prohandy?",
      content:
        "is a platform that connects users with skilled artisans for various services, including plumbing, electrical work, painting, carpentry, and more",
    },
    {
      title: "How does it work?",
      content: "Just signup and join the platform.",
    },
    {
      title: "How do i book an artisan?",
      content:
        "Browse the service category, view artisan profiles, and schedule a booking that suits your availability.",
    },
    {
      title: "Are the artisans verified?",
      content:
        "Yes, all artisans on our platform go through a strict verification process to ensure reliability and quality.",
    },
    {
      title: "What if I’m not satisfied with the service?",
      content:
        "You can contact our customer support team, and we’ll assist you in resolving any issues.",
    },
    {
      title: "How do i sign up as an artisan?",
      content:
        "Download the app, complete your profile, and submit the necessary verification documents to get started.",
    },
    {
      title: "How do i receive payment as an artisan?",
      content:
        "Payments are transferred directly to your registered bank account after the job is completed and approved.",
    },
    {
      title: "Can i set my service rate?",
      content:
        "Yes, artisans can set competitive rates for their services within the platform.",
    },
    {
      title: "What payment method are supported?",
      content:
        "We accept major credit/debit cards, mobile payment systems, and other secure options.",
    },
    {
      title: "Is my payment information secure?",
      content:
        "Absolutely. We use advanced encryption technology to protect your data.",
    },
  ];
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fcfcfc",
      }}
    >
      <SEOHead
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about Handwork Expert — how to book artisans, payment methods, verification, and more."
        canonical="/faq"
      />
      <Topbar popularServices={popularServices} />
      <CssBaseline />
      <Hero
        coloredText={"Prohandy"}
        whiteText={"Frequently Asked Questions"}
        subtitle={""}
      />

      <br />
      <Box
        sx={{
          mt: 6,
          mb: 7,
          px: 2,
        }}
      >
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <h3
              style={{
                fontSize: "16",
                color: "rgba(41, 38, 38, 1)",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Frequently Asked Questions
            </h3>
            <p
              style={{
                fontSize: "13",
                color: "#858585",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Have questions? Here you’ll find the answers most valued by our
              customers, along with access to step-by-step instructions and
              support.
            </p>
            <br />
            <br />
            <Box>
              {list.map((item, index) => (
                <Accordion
                  key={index}
                  elevation={0}
                  slotProps={{ transition: { unmountOnExit: true } }}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`panel${index}bh-content`}
                    id={`panel${index}bh-header`}
                  >
                    <h6
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      component={"p"}
                      sx={{ color: "black", fontWeight: "400", fontSize: 13 }}
                    >
                      {item.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Footer />
    </Box>
  );
}
