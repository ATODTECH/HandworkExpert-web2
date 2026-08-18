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
import plumbingImage from "@/src/assets/img/services_we_offer.png";
import carpentryImage from "@/src/assets/img/services_we_offer.png";
import electricalImage from "@/src/assets/img/services_we_offer.png";
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


const ServicesWeOfferN = () => {
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
    <section className="w-full p-16 xl:px-28 mb-28.5 ">
      <div className="flex flex-row justify-center items-center relative gap-15 ">
        {/* image */}
        <div className="w-[45%] h-auto ">
          <img 
            width={"598px"}
            height={"498px"}
            src={services[currentService].image}
            alt={services[currentService].title}
            className=" w-full h-full "
          />
        </div>
        {/* content */}
        <div className="flex flex-col items-start w-[45%] ">
          <h3 className="font-semibold text-[45px] text-secondary-orange mb-4 ">Services We Offer</h3>
          <div className="flex flex-col text-[25px] gap-2 mb-4">
            <h4 className="font-medium  ">{services[currentService].title}</h4>
            <p className=" ">{services[currentService].description}</p>
          </div>
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
            className="bg-secondary-blue rounded-[5px] text-primary-white h-11 w-11 outline-0 cursor-pointer "
            onClick={handlePrev}>
              <ArrowBackIcon fontSize="small" />
            </button>
            <button 
            className="bg-primary-white rounded-[5px] text-secondary-blue border border-secondary-blue h-11 w-11 outline-0 cursor-pointer "
            onClick={handleNext}>
              <ArrowForwardIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesWeOfferN