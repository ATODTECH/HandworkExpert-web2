import ProImage from "@/src/assets/img/professional-image.png";

const ProfessionalsNetworkSectionN = () => {
  return (
    <section className="flex flex-col relative items-center justify-center w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:mb-12 sm:mb-28.5 ">
      <div className="flex flex-col md:grid 425xl:grid-cols-2 relative w-full max-w-[80%] gap-4  items-center ">
        {/* content */}
        <div className="flex flex-col justify-center z-10">
          <div className="flex flex-col gap-[28px]">
            <h2 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.125rem] sm:leading-11 text-primary-text text-center md:text-start ">Join the network of professionals around you</h2>
            <h5 className="text-[1rem] 425xl:text-xl sm:text-2xl text-primary-text ">
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
        <div className="flex relative w-[15rem] h-full 425xl:h-auto 425xl:w-auto ">
          <img 
            src={ProImage}
            height={"23px"}
            width={"100%"}
            alt={"Professional worker with safety equipment"}
            className=" w-full h-full "
          />
        </div>
      </div>
    </section>
  )
}

export default ProfessionalsNetworkSectionN