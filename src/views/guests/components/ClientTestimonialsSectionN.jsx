import { useState } from "react";

import {
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import ClientTestimonial from "@/src/assets/img/client-testimonial.webp";
import ClientTestimonial2 from "@/src/assets/img/client-testimonial_2.webp";


const QuotationMark = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  fontSize: "7rem",
  color: "#1a237e",
  position: "absolute",
  lineHeight: 1,
}));


const ClientTestimonialsSectionN = () => {
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
      image: ClientTestimonial2,
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
    <section className="flex relative justify-center overflow-hidden w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:mb-12 sm:mb-28.5">
      <div className="flex flex-col relative w-full max-w-[80%] sm:max-w-[90%] justify-center items-center 425xl:gap-15 mb-16 sm:mb-0">
        <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] text-secondary-orange mb-6 text-center">What Clients Says</h3>
        <div className="flex flex-col md:flex-row relative w-full gap-17.5 md:gap-9.5 lg:gap-17.5 ">
          <div className="flex relative self-center md:self-start w-[80%] 425xl:w-[60%] h-fit ">
            <img src={testimonial.image} height={"55px"} width={"100%"} alt="client_testimonal" draggable={false}
            className="w-full h-full " />
            <div className="absolute flex items-end justify-end font-semibold text-sm sm:text-base lg:text-xl w-[85%] h-full ">
              <span className=" text-primary-white flex absolute bottom-5 ">{testimonial.name.slice(0, 4)}</span>
            </div>
            <div className="absolute flex items-end justify-end font-semibold text-sm sm:text-base lg:text-xl w-[15%] right-0 h-full ">
              <span className=" text-primary-text flex absolute bottom-5 w-full truncate overflow-visible ">{testimonial.name.slice(4,)}</span>
            </div>

          </div>
          <div className="flex flex-col relative justify-between w-full gap-10">
            <div className="flex relative ">
              <QuotationMark sx={{ top: -40, left: -10 }}>&ldquo;</QuotationMark>
              <p className="text-primary-text font-normal text-base leading-6 425xl:text-xl 425xl:leading-normal sm:text-2xl pt-6.5 pb-3.25 px-5 425xl:py-4 425xl:px-9 sm:px-16.25 ">
                {testimonial.quote}
              </p>
              <QuotationMark sx={{ bottom: -80, right: 0 }}>&rdquo;</QuotationMark>
            </div>
            <div className="flex self-start md:self-end gap-4 z-10">
              <button 
              className="bg-secondary-blue rounded-[5px] text-primary-white h-8 w-8 sm:h-11 sm:w-11 outline-0 cursor-pointer "
              onClick={handlePrev} aria-label="Previous testimonial">
                <ArrowBackIcon fontSize="small" />
              </button>
              <button 
              className="bg-primary-white rounded-[5px] text-secondary-blue border border-secondary-blue h-8 w-8 sm:h-11 sm:w-11 outline-0 cursor-pointer "
              onClick={handleNext} aria-label="Next testimonial">
                <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonialsSectionN