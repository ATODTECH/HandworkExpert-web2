import PhoneImage from "@/src/assets/img/phones-image.webp";
import GooglePlay from "@/src/assets/img/google-play.png";
import AppStore from "@/src/assets/img/apple-store.png";

const ProHandyAppSectionN = () => {
  
  return (
    <section className="flex relative justify-center w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:mb-12 sm:mb-28.5 ">
      <div className="flex flex-col-reverse md:grid grid-cols-2 relative w-full max-w-[80%] lg:max-w-[80%] gap-15 md:gap-8 lg:gap-15 mb-16 sm:mb-0 ">
        <div className="flex relative h-fit 425xl:w-[80%] mx-auto lg:mx-0 lg:h-auto md:w-auto ">
          <img src={PhoneImage} height={"23px"} width={"100%"} alt="ProHandy App Screenshots"
          className={"h-full w-full "} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-6 sm:gap-8 ">
            <h2 className="font-semibold text-2xl text-center 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] md:leading-12 lg:leading-15 md:text-start text-primary-text ">Get the Prohandy App</h2>
            <h5 className=" text-lg 425xl:text-xl sm:text-2xl text-primary-text ">
              Book services on the go. Faster, easier, and more convenient.
            </h5>
            <div className="flex gap-4 lg:flex-wrap">
              <img src={AppStore} draggable={false} alt="Professional worker with safety equipment"
              className="h-8 lg:h-11 w-auto " 
              onClick={() => alert("Coming soon!")} />
              <img src={GooglePlay} draggable={false} alt="Professional worker with safety equipment"
              className="h-8 lg:h-11 w-auto "
              onClick={() => alert("Coming soon!")} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProHandyAppSectionN