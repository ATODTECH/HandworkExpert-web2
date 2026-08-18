import BgImage from "@/src/assets/img/join_as_artisan.png";

const JoinAsArtisanN = () => {

  return (
    <section className="w-full p-16 xl:px-28 mb-28.5 ">
      <div className="flex justify-center items-center relative gap-15  ">
        {/* content */}
        <div className="flex flex-col w-full max-w-[45%] ">
          <h3 className="font-semibold text-[45px] text-secondary-orange mb-4 ">Join As as Artisan</h3>
          <div className="flex flex-col text-[25px] text-primary-text gap-2 mb-4">
            Are you a skilled professional looking for more job opportunities? Join ProHandy today and connect with customers in need of your expertise.
          </div>
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
        {/* image */}
        <div className="w-[45%] h-auto ">
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