import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Hero_1 from "../../../assets/img/hero_1.png";
import Hero_2 from "../../../assets/img/hero_2.png";
import Hero_3 from "../../../assets/img/hero_3.png";
import Hero_4 from "../../../assets/img/hero_4.png";
import Hero_5 from "../../../assets/img/hero_5.png";

const heroImages = [
  {
    main: Hero_1,
    secondary: Hero_2,
    title: "Plumber",
    description:
      "From home repairs to expert craftsmanship, find verified artisans ready to deliver quality services quickly, efficiently, and at your convenience.",
  },
  {
    main: Hero_2,
    secondary: Hero_3,
    title: "Electrician",
    description:
      "Professional electricians to handle all your electrical needs, from installation to repair, ensuring safety and efficiency in your home.",
  },
  {
    main: Hero_3,
    secondary: Hero_4,
    title: "Carpenter",
    description:
      "Skilled carpenters ready to transform your space with custom woodwork, furniture repair, and installation services.",
  },
  {
    main: Hero_4,
    secondary: Hero_5,
    title: "Painter",
    description:
      "Expert painters who deliver flawless finishes for your interior and exterior spaces, bringing your vision to life with precision.",
  },
  {
    main: Hero_5,
    secondary: Hero_1,
    title: "Gardener",
    description:
      "Professional gardeners to maintain and beautify your outdoor spaces, from lawn care to landscaping and garden design.",
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const intervalRef = useRef(null);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    // Clear the current interval and restart it
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);

    // Restart the interval
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
  };

  // Animation variants for title - vertical fade based on direction
  const titleVariants = {
    initial: (direction) => ({
      y: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      y: direction > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  // Create a wrapper component for our carousel images
  const CarouselImage = ({ index, isMain = true }) => {
    // Get current image from heroImages
    const image = heroImages[index];
    const imgSrc = isMain ? image.main : image.secondary;
    const imgTitle = isMain
      ? `${image.title} professional`
      : "Secondary professional";

    return (
      <Box
        component={motion.div}
        key={`${isMain ? "main" : "secondary"}-${index}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: isMain ? 300 : 250,
            damping: 25,
            delay: isMain ? 0 : 0.1,
          },
        }}
        exit={{
          opacity: 0,
          x: -100,
          transition: {
            type: "spring",
            stiffness: isMain ? 300 : 250,
            damping: 25,
            duration: 0.5,
          },
        }}
        sx={{
          position: "absolute",
          right: isMain ? "30%" : "0%",
          bottom: "18%",
          width: isMain ? "250px" : "210px",
          height: isMain ? "270px" : "220px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          zIndex: isMain ? 2 : 1,
        }}
      >
        <img
          src={imgSrc}
          alt={imgTitle}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "88.5vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image that changes with currentIndex */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(0deg, rgba(27, 40, 63, 0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                zIndex: 1,
              },
            }}
          >
            <img
              src={heroImages[currentIndex].main}
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </AnimatePresence>

      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            height: "100%",
            alignItems: "center",
            pt: 8,
          }}
        >
          {/* Left side content */}
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                maxWidth: isMobile ? "100%" : "80%",
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "4.29rem" },
                }}
              >
                Connecting You With Professional
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  height: { xs: "4rem", md: "5rem" },
                  // mb: 3,
                  overflow: "hidden",
                }}
              >
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.div
                    key={`title-${currentIndex}`}
                    custom={direction}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{
                      position: "absolute",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h1"
                      component="span"
                      sx={{
                        fontWeight: 600,
                        color: "#FF7043",
                        display: "block",
                        fontSize: { xs: "3.5rem", md: "3.3rem" },
                      }}
                    >
                      {heroImages[currentIndex].title}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>

              <Typography
                variant="h6"
                component="p"
                sx={{
                  mb: 4,
                  color: "white",
                  maxWidth: "90%",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                From home repairs to expert craftsmanship, find verified
                artisans ready to deliver quality services quickly, efficiently,
                and at your convenience.
                {/* {heroImages[currentIndex].description} */}
              </Typography>

              <Button
                variant="contained"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                sx={{
                  bgcolor: "#fff",
                  color: "#172153",
                  borderRadius: "4px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
          </Grid>

          {/* Right side images */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ position: "relative", height: "400px", width: "100%" }}>
              {/* Using AnimatePresence to handle the animations */}
              <AnimatePresence mode="popLayout">
                <CarouselImage
                  key={`main-${currentIndex}`}
                  index={currentIndex}
                  isMain={true}
                />
                <CarouselImage
                  key={`secondary-${currentIndex}`}
                  index={currentIndex}
                  isMain={false}
                />
              </AnimatePresence>
            </Box>
          </Grid>
        </Grid>

        {/* Navigation dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "5%", md: isMobile ? "5%" : "23%" },
            left: { xs: "50%", md: isMobile ? "50%" : "69.1%" },
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "10px",
            zIndex: 10,
          }}
        >
          {heroImages.map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: index === currentIndex ? "#FF7043" : "#ccc",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                display: "inline-block",
                "&:hover": {
                  bgcolor: index === currentIndex ? "#FF7043" : "#aaa",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
