import { KeyboardArrowDown } from "@mui/icons-material";

import carpentryImage from "@/src/assets/img/services_we_offer.png";
import painter from "@/src/assets/img/painter.png";
import servicesProvider from "@/src/assets/img/services-provider.png"
import humanResources from "@/src/assets/img/human-resources.png"
import convenience from "@/src/assets/img/convenience.png"
import vision from "@/src/assets/img/vision.png"
import engineer from  "@/src/assets/img/professional-image.png"

const AboutUsContIndex = () => {


  return (
    <section className="w-full flex flex-col items-center relative px-4 p-16 sm:px-16 xl:px-28">
      <div className="flex flex-col w-full items-center bg-primary-white">
        <div className="flex gap-20 items-center justify-center w-full my-16 ">
          <div className="flex flex-col flex-1 max-w-[60%] ">
            <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-14 text-secondary-orange mb-6.25">Who We Are</h3>
            <p className=" text-primary-text font-normal tracking-[2%] text-[1rem] mb-5 leading-7 ">
              At prohandy, we bridge the gap between people and skilled artisans, offering a platform that delivers quality handiwork services with ease and professionalism. Whether it’s plumbing, painting, electrical repairs, or carpentry, we ensure that every task is handled by trusted experts who take pride in their craft.
            </p>
            <button type="button"
            className=" flex items-center font-semibold w-fit gap-2 p-4 rounded-sm text-[1rem] leading-6 text-primary-white bg-secondary-blue">
              Sign up <KeyboardArrowDown />
            </button>
          </div>
          <div className=" overflow-hidden h-auto w-[30rem]">
            <img 
            height={98}
            width={108}
            src={carpentryImage} 
            alt="Carpenter"
            className=" h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-20 items-center justify-center w-full my-16 ">
          <div className="flex relative h-auto w-[30rem]">
            <img 
            height={98}
            width={108}
            src={painter} 
            alt="painter"
            className=" h-full w-full object-cover rounded-[20px]"
            />
            <span className=" absolute left-1/2 -translate-x-1/2 -bottom-7 text-[.75rem] font-semibold tracking-[2%] text-black bg-primary-white rounded-[10px] py-5 px-4 shadow-[0px_4px_25px_#0000000D]">“every task finds its expert touch”</span>
          </div>
          <div className="flex flex-col flex-1 max-w-[60%] ">
            <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-14 text-secondary-orange mb-6.25">Our Mission</h3>
            <p className=" text-primary-text font-normal tracking-[2%] text-[1rem] mb-5 leading-7 ">
              Our mission is simple, to create seamless access to reliable artisans while empowering professionals to showcase their skills. We aim to build a community where trust, excellence, and convenience come together to transform how people find and deliver services.
            </p>
            <button type="button"
            className=" flex items-center font-semibold w-fit gap-2 p-4 rounded-sm text-[1rem] leading-6 text-primary-white bg-secondary-blue">
              Sign up <KeyboardArrowDown />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-20 items-center justify-center w-full my-16 ">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-14 text-secondary-orange mb-6.25">Why Choose Us</h3>
            <p className=" w-full max-w-[60%] text-center text-primary-text font-normal tracking-[2%] text-[1rem] mb-5 leading-6 ">
              At ProHandy, we make finding skilled artisans easy and reliable. With verified professionals, quality service, and a seamless booking process, we’re here to ensure every job is done right, the first time.
            </p>
          </div>
          <div className="flex flex-col sm:grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6.25 lg:gap-11.25 w-[80%] 425xl:w-auto text-[1rem] ">
            <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-[300px] lg:max-w-130.75 py-8.5 425xl:py-12.5 px-5 text-primary-text rounded-[15px] ">
              <div className=" mb-8 lg:mb-10.5 p-4 rounded-full bg-secondary-blue h-auto w-18 ">
                <img src={servicesProvider} alt="services" className="w-full h-full " />
              </div>
              <div className="flex flex-col h-full text-[1rem] text-center ">
                <p className=" font-bold tracking-[2%]">
                  Reliable Services
                </p>
                <p className=" font-medium text-sm text-center tracking-[2%]">
                  Verified artisans with proven expertise.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-[300px] lg:max-w-130.75 py-8.5 425xl:py-12.5 px-5 text-primary-text rounded-[15px] ">
              <div className="mb-8 lg:mb-10.5 p-4 rounded-full bg-secondary-blue h-auto w-18 ">
                <img src={humanResources} alt="human resources" height={28} width={28} className="w-full h-full " />
              </div>
              <div className="flex flex-col h-full text-center ">
                <p className=" font-bold tracking-[2%] ">
                  Empowering Artisans
                </p>
                <p className=" font-medium text-sm text-center tracking-[2%]">
                  We provide a platform for artisans to grow and succeed.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-[300px] lg:max-w-130.75 py-8.5 425xl:py-12.5 px-5 text-primary-text rounded-[15px] sm:col-span-2 sm:mx-auto lg:col-span-1 lg:mx-0 ">
              <div className="mb-8 lg:mb-10.5 p-4 rounded-full bg-secondary-blue h-auto w-18 ">
                <img src={convenience} alt="convenience" className="w-full h-full " />
              </div>
              <div className="flex flex-col h-full text-center ">
                <p className=" font-bold tracking-[2%]">
                  Convenience
                </p>
                <p className=" font-medium text-sm text-center tracking-[2%]">
                  Find and book skilled professionals in just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-20 items-center justify-center w-full my-16 ">
          <div className="flex flex-col flex-1 max-w-[60%] ">
            <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-14 text-secondary-orange mb-6.25">Our Vision</h3>
            <p className=" text-primary-text font-normal tracking-[2%] text-[1rem] mb-5 leading-7 ">
              We envision a world where finding skilled artisans is no longer a challenge. By fostering connections based on trust and quality, [Your Brand Name] strives to become the go-to platform for handiwork services, revolutionizing how people connect with professionals.
            </p>
            <button type="button"
            className=" flex items-center font-semibold w-fit gap-2 p-4 rounded-sm text-[1rem] leading-6 text-primary-white bg-secondary-blue">
              Sign up <KeyboardArrowDown />
            </button>
          </div>
          <div className=" overflow-hidden h-auto w-[30rem]">
            <img 
            height={98}
            width={108}
            src={vision} 
            alt="vision"
            className=" h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full max-w-[80%] my-16 pt-16 text-primary-text">
          <div className=" flex-1">
            <h4 className=" font-semibold text-xl 425xl:text-2xl sm:text-3xl lg:text-[2rem] lg:leading-10 max-w-[80%] mb-4">Join the network of professionals around you</h4>
            <p className=" max-w-[90%] font-medium text-sm tracking-tight leading-7 ">
              Become part the working class community and find your next client and extra income.
            </p>
          </div>
          <div className=" h-auto w-[25rem]">
            <img src={engineer} alt="engineer"
            className=" w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsContIndex