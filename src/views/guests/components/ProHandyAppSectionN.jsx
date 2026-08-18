import PhoneImage from "@/src/assets/img/phones-image.png";
import GooglePlay from "@/src/assets/img/google-play.png";
import AppStore from "@/src/assets/img/apple-store.png";

const ProHandyAppSectionN = () => {
  return (
    <section className="flex relative justify-center w-full p-16 xl:px-28 mb-28.5 ">
      <div className="grid grid-cols-2 relative w-full max-w-[80%] gap-15 bg-amber-50 ">
        <div className="flex relative h-auto w-auto ">
          <img src={PhoneImage} height={"23px"} width={"100%"} alt="ProHandy App Screenshots"
          className={"h-full w-full "} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-[32px] ">
            <h2 className="font-semibold text-[45px] text-primary-text leading-15 ">Get the Prohandy App</h2>
            <h5 className=" text-[25px] text-primary-text ">
              Book services on the go. Faster, easier, and more convenient.
            </h5>
            <div className="flex gap-4">
              <img src={AppStore} alt="Professional worker with safety equipment"
              className="pointer-events-none h-11 w-auto " />
              <img src={GooglePlay} alt="Professional worker with safety equipment"
              className="pointer-events-none h-11 w-auto " />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProHandyAppSectionN