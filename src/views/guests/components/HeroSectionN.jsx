import { useState, useEffect, useRef } from "react";
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
import { KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

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

// Create a wrapper component for our carousel images
const CarouselImage = ({ index, isMain = true }) => {
  // Get current image from heroImages
  const image = heroImages[index];
  const imgSrc = isMain ? image.main : image.secondary;
  const imgTitle = isMain
    ? `${image.title} professional`
    : "Secondary professional";
  
  
  return(
    <motion.div
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
      style={{
        position: "absolute",
        right: isMain ? "30%" : "0%",
        bottom: "18%",
        width: isMain ? "250px" : "210px",
        height: isMain ? "270px" : "220px",
        border: isMain ? "5px solid #FFF" : "",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        zIndex: isMain ? 2 : 1,
      }}
    >
      <img
        src={imgSrc}
        alt={imgTitle}
        className="pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  )
}


const headlineWord = {
  hidden: { y: 28, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}


const HeroSectionN = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [expanded, setExpanded] = useState(null)
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

  // Handle dot click, changes after 5secs
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

  return (
    <section id="home" className="min-h-screen w-full flex items-center isolate relative px-4 p-16 sm:px-16 xl:px-28 bg-[#151327] ">
      {/* Background photo — draggable for a subtle parallax "peek" interaction */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={heroImages[currentIndex].main}
              alt="Professional tradesperson at work"
              draggable={false}
              className="h-full w-full cursor-grab select-none opacity-70 object-cover object-[55%_30%]"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient scrim: dark on the left for text legibility, fading toward the photo */}
        <div className="absolute inset-0 bg-linear-to-t from-[#151327]/90 via-transparent to-[#151327]/0" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex w-full ">
        <div className="grid w-full items-center gap-10 1280xl:grid-cols-[minmax(0,620px)_1fr]">
          {/* Text column */}
          <div className="max-w-2xl py-10 425xl:py-20 md:py-30 lg:py-40">
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.05] text-primary-white">
              {['Connecting You', 'With Professional'].map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  variants={headlineWord}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                custom={2}
                variants={headlineWord}
                initial="hidden"
                animate="show"
                className="mt-1 block text-accent"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroImages[currentIndex].title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block text-secondary-orange"
                  >
                    {heroImages[currentIndex].title}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-primary-white/85 sm:text-base"
            >
              From home repairs to expert craftsmanship, find verified artisans ready to dliver quality services quickly, efficiently, and at your convenience.
            </motion.p>

            <Link to={"/signup"}>
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 flex items-center justify-center gap-2 rounded-sm bg-primary-white w-full max-w-35 sm:max-w-50 px-4 sm:px-7 py-3 text-[15px] font-semibold text-ink shadow-xl shadow-black/20"
              >
                Sign up
                <KeyboardArrowDown />
              </motion.button>
            </Link>
          </div>

          {/* Image column: floating photo cards, only meaningfully visible on larger screens */}
          <div className="flex gap-10 flex-col-reverse w-full h-full relative overflow-visible ">
            {/* Using AnimatePresence to handle the animations */}
            <div className="hidden lg:block ">
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
            </div>

            {/* Navigation dots */}
            <div className="flex relative gap-2 ">
              {heroImages.map((_, index) => (
                <button key={index} className={`h-2.5 w-2.5 rounded-full cursor-pointer ${index === currentIndex ? "bg-secondary-orange":"bg-gray-400 "} `}
                onClick={() => handleDotClick(index)}></button>
              ))}                
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSectionN