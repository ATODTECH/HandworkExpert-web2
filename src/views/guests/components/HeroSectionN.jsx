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
import Hero_1 from "@/src/assets/img/hero_1.png";
import Hero_2 from "@/src/assets/img/hero_2.png";
import Hero_3 from "@/src/assets/img/hero_3.png";
import Hero_4 from "@/src/assets/img/hero_4.png";
import Hero_5 from "@/src/assets/img/hero_5.png";

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
]

const HeroSectionN = () => {
  return (
    <div>HeroSectionN</div>
  )
}

export default HeroSectionN