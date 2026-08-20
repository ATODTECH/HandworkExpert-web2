import BgImage from "@/src/assets/img/join_as_artisan.png";

const JoinAsArtisanN = () => {

  return (
    <section className="w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:mb-12 sm:mb-28.5 ">
      <div className="flex flex-col sm:flex-row justify-center items-center relative gap-15  ">
        {/* content */}
        <div className="flex flex-col w-full sm:max-w-[45%] ">
          <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] text-secondary-orange mb-4 text-center sm:text-start ">Join As an Artisan</h3>
          <p className="flex flex-col text-lg 425xl:text-xl sm:text-2xl text-primary-text gap-2 mb-4">
            Are you a skilled professional looking for more job opportunities? Join ProHandy today and connect with customers in need of your expertise.
          </p>
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button 
            className=" text-nowrap bg-secondary-blue text-primary-white p-4 outline-0 cursor-pointer font-bold text-[.75rem] 425xl:text-sm sm:text-[1rem] hover:bg-[#232958] rounded-sm "
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
        {/* image */}
        <div className="w-50 425xl:w-[300px] sm:w-[45%] h-auto ">
          <img 
            width={"598px"}
            height={"498px"}
            src={BgImage}
            alt={'Skilled professionals working as artisans'}
            className=" w-full h-full "
          />
        </div>
      </div>
    </section>
  )
}

export default JoinAsArtisanN