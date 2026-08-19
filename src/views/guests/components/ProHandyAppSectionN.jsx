import PhoneImage from "@/src/assets/img/phones-image.png";
import GooglePlay from "@/src/assets/img/google-play.png";
import AppStore from "@/src/assets/img/apple-store.png";
import ToastMessage from "@/src/hooks/toastMessage";

const ProHandyAppSectionN = () => {
  const handleDownloadClick = (store) => {
    ToastMessage("info", `${store} - Coming Soon!`);
  };
  
  return (
    <section className="flex relative justify-center w-full p-16 xl:px-28 mb-28.5 ">
      <div className="grid grid-cols-2 relative w-full max-w-[80%] gap-15 ">
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
              <img src={AppStore} draggable={false} alt="Professional worker with safety equipment"
              className="h-11 w-auto " 
              onClick={() => handleDownloadClick("App Store")} />
              <img src={GooglePlay} draggable={false} alt="Professional worker with safety equipment"
              className="h-11 w-auto "
              onClick={() => handleDownloadClick("Google Play")} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProHandyAppSectionN