import { useState, useRef, useEffect } from "react";

import {
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import ClientTestimonial from "@/src/assets/img/client-testimonial.png";


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
    <section className="flex relative justify-center w-full p-16 xl:px-28 mb-28.5 ">
      <div className="flex flex-col relative w-full max-w-[80%] justify-center items-center gap-15 ">
        <h3 className="font-semibold text-[45px] text-secondary-orange mb-4">What Clients Says</h3>
        <div className="flex relative w-full gap-17.5 ">
          <div className="flex relative w-[50%] h-fit ">
            <img src={ClientTestimonial} height={"55px"} width={"100%"} alt="client_testimonal" draggable={false}
            className="w-full h-full " />
            <div className="absolute flex items-end justify-end font-semibold text-xl w-[85%] h-full ">
              <span className=" text-primary-white flex absolute bottom-5 ">{testimonial.name.slice(0, 4)}</span>
            </div>
            <div className="absolute flex items-end justify-end font-semibold text-xl w-[15%] right-0 h-full ">
              <span className=" text-primary-text flex absolute bottom-5 w-full truncate overflow-visible ">{testimonial.name.slice(4,)}</span>
            </div>
            {/* <div className="absolute flex items-end justify-end font-semibold text-xl w-full h-full bg-gray-400/70 ">
              <div className="flex flex-nowrap relative bottom-5 -right-[155px] w-full overflow-hidden bg-amber-200 ">
                <span className=" text-primary-white ">{testimonial.name.slice(0, 4)}</span><span className="">{testimonial.name.slice(4,)}</span>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col relative justify-between w-full gap-10">
            <div className="flex relative ">
              <QuotationMark sx={{ top: -40, left: -10 }} className="flex absolute text-primary-white  ">&ldquo;</QuotationMark>
              <p className="text-primary-text font-normal text-[25px] pt-6.5 pb-3.25 px-16.25 ">
                {testimonial.quote}
              </p>
              <QuotationMark sx={{ bottom: -60, right: 0 }}>&rdquo;</QuotationMark>
            </div>
            <div className="flex self-end gap-4 z-10">
              <button 
              className="bg-secondary-blue rounded-[5px] text-primary-white h-11 w-11 outline-0 cursor-pointer "
              onClick={handlePrev} aria-label="Previous testimonial">
                <ArrowBackIcon fontSize="small" />
              </button>
              <button 
              className="bg-primary-white rounded-[5px] text-secondary-blue border border-secondary-blue h-11 w-11 outline-0 cursor-pointer "
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