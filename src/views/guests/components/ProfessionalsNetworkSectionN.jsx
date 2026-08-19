import ProImage from "@/src/assets/img/professional-image.png";

const ProfessionalsNetworkSectionN = () => {
  return (
    <section className="flex relative justify-center w-full p-16 xl:px-28 mb-28.5 ">
      <div className="grid grid-cols-2 relative w-full max-w-[80%] gap-4  items-center ">
        {/* content */}
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col gap-[28px]">
            <h2 className="font-semibold text-[35px] text-primary-text leading-11 ">Join the network of professionals around you</h2>
            <h5 className=" text-[20px] text-primary-text ">
              Become part the working class community and find your next client and extra income.
            </h5>
            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button 
              className="bg-secondary-blue text-primary-white p-4 outline-0 cursor-pointer font-bold text-[16px] hover:bg-[#232958] rounded-sm "
              >
                Register as a Professional
              </button>
              <button 
              className=" text-secondary-blue outline-0 cursor-pointer text-sm h-fit font-semibold hover:underline hover:bg-transparent "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="flex relative h-auto w-auto ">
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