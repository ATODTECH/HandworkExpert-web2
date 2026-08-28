import ProImage from "@/src/assets/img/professional-image.webp";

const ProfessionalsNetworkSectionN = () => {
  return (
    <section className="flex flex-col relative items-center justify-center w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:mb-12 sm:mb-28.5 ">
      <div className="flex justify-center w-full lg:max-w-[90%] text-primary-text mb-16 sm:mb-0">
        {/* content */}
        <div className="flex flex-col items-center justify-end">
          <div className=" flex flex-col justify-end max-w-[90%] md:max-w-[80%]">
            <h2 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.125rem] sm:leading-11 text-primary-text text-center md:text-start mb-8 ">Join the network of professionals around you</h2>
            <h5 className="text-base 425xl:text-xl sm:text-2xl text-primary-text mb-4">
              Become part the working class community and find your next client and extra income.
            </h5>
            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button 
              className=" text-nowrap bg-secondary-blue text-primary-white p-4 outline-0 cursor-pointer font-bold text-[.75rem] 425xl:text-sm sm:text-[1rem] hover:bg-[#232958] rounded-sm"
              >
                Register as a Professional
              </button>
              <button 
              className=" text-nowrap text-secondary-blue outline-0 cursor-pointer text-[.625rem] 425xl:text-[.75rem] sm:text-sm h-fit font-semibold hover:underline hover:bg-transparent "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* image */}
        {/* <div className="hidden md:flex relative w-60 h-full 425xl:h-auto 425xl:w-auto "> */}
        <div className="hidden md:flex h-auto w-140">
          <img 
            src={ProImage}
            height={"23px"}
            width={"23px"}
            alt={"Professional worker with safety equipment"}
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ProfessionalsNetworkSectionN