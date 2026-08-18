import { Box, Typography, Grid, Card, Container } from "@mui/material";
import searchImage from "@/src/assets/img/work_1.png";
import chooseImage from "@/src/assets/img/work_2.png";
import bookImage from "@/src/assets/img/work_3.png";
import doneImage from "@/src/assets/img/work_4.png";


const HowItWorksN = () => {
  const steps = [
    {
      title: "Search for a service",
      description: "Browse through various artisans categories",
      image: searchImage,
    },
    {
      title: "Choose a skilled professional",
      description: "View artisan profile, reviews and ratings",
      image: chooseImage,
    },
    {
      title: "Book and pay securely",
      description: "Schedule your services with confidence",
      image: bookImage,
    },
    {
      title: "Get the job done",
      description: "Sit back while the expert handles the work",
      image: doneImage,
    },
  ];
  
  const StepCard = ({ image, title, description }) => {
    return (
      <div className="flex flex-col h-full p-3 border-[.5px] border-secondary-blue/10 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col grow">
          <h3 className="text-[1rem] font-semibold text-primary-text mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-primary-text text-[1rem]">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  return (
    <section className=" w-full p-16 pb-10 xl:px-28 ">
      <div className="flex flex-col my-16.25 ">
        <h3 className="font-semibold text-center text-[45px] text-secondary-orange mb-6.25 ">How It Works</h3>
        <div className="py-12 px-4 max-w-360 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                image={step.image}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksN