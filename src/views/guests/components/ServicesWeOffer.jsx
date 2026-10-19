import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import images
import plumbingImage from "@/src/assets/img/services_we_offer.webp";
import carpentryImage from "@/src/assets/img/services_we_offer.webp";
import electricalImage from "@/src/assets/img/services_we_offer.webp";
import { useState } from "react";

// Custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1a237e",
  color: "white",
  padding: "10px 20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0d1752",
  },
  borderRadius: 4,
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: "#000",
  textTransform: "none",
  fontWeight: 500,
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#F85A2B",
  marginBottom: theme.spacing(2),
}));


export const ServicesWeOffer = () => {
  const theme = useTheme();
  const [currentService, setCurrentService] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const services = [
    {
      title: "Plumbing",
      description:
        "Leak repairs, pipe installations, tank replacement and more.",
      image: plumbingImage,
    },
    {
      title: "Carpentry",
      description:
        "Custom furniture, repairs, installations, and woodworking services.",
      image: carpentryImage,
    },
    {
      title: "Electrical",
      description:
        "Wiring, lighting installation, repairs, and safety inspections.",
      image: electricalImage,
    },
  ];


  const handleNext = () => {
    setCurrentService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="flex flex-col items-center w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:my-12 sm:mb-28.5 sm:mt-0 ">
      <div className="flex flex-col sm:flex-row justify-center items-center relative gap-15 w-[90%] sm:w-full mb-16 sm:mb-0 ">
        {/* main image */}
        <div className="hidden sm:flex w-60 425xl:w-75 sm:w-[45%] h-auto">
          <img 
            width={"98px"}
            height={"88px"}
            src={services[currentService].image}
            alt={services[currentService].title}
            className=" w-full h-full "
          />
        </div>
        {/* content */}
        <div className="flex flex-col items-start order-1 sm:order-2 w-full sm:w-[45%] ">
          <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] text-secondary-orange mb-6 self-center sm:self-start ">Services We Offer</h3>
          {/* centre image */}
          <div className="flex sm:hidden self-center w-60 425xl:w-75 h-auto mb-6">
            <img 
              width={"98px"}
              height={"88px"}
              src={services[currentService].image}
              alt={services[currentService].title}
              className=" w-full h-full "
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h4 className="font-medium text-lg 425xl:text-xl sm:text-2xl ">{services[currentService].title}</h4>
            <p className="font-normal text-sm leading-6  425xl:text-xl sm:text-2xl 425xl:leading-relaxed ">{services[currentService].description}</p>
          </div>
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
            type="button"
            className="bg-secondary-blue rounded-[5px] text-primary-white h-8 w-8 sm:h-11 sm:w-11 outline-0 cursor-pointer "
            onClick={handlePrev}>
              <ArrowBackIcon fontSize="small" />
            </button>
            <button 
            type="button"
            className="bg-primary-white rounded-[5px] text-secondary-blue border border-secondary-blue h-8 w-8 sm:h-11 sm:w-11 outline-0 cursor-pointer "
            onClick={handleNext}>
              <ArrowForwardIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
