import BgCheck from "@/src/assets/img/background-check.png";
import CreditCard from "@/src/assets/img/credit-card.png";
import CustomerSupport from "@/src/assets/img/customer-support.png";

const TrustFactorsSectionN = () => {
  return (
    <section className="w-full px-4 py-10 p-16 sm:px-16 xl:px-28 425xl:mb-12 sm:mb-28.5 ">
      <div className="flex flex-col w-full justify-center items-center relative 425xl:gap-15 ">
        <h3 className="font-semibold text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] text-secondary-orange mb-4 text-center">Services Guaranteed And Trust Factors</h3>
        <div className="flex flex-col sm:grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6.25 lg:gap-11.25 w-[80%] 425xl:w-auto text-[1rem] ">
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-[300px] lg:max-w-130.75 bg-[#E8E9EE] py-8.5 425xl:py-12.5 px-5 text-primary-text rounded-[15px] ">
            <div className=" mb-8 lg:mb-10.5 p-3 rounded-full bg-secondary-blue ">
              <img src={BgCheck} alt="Background_Check" className="w-7 h-7 " />
            </div>
            <div className="flex flex-col h-full text-center ">
              <p className=" font-semibold ">
                Background Checked
              </p>
              <p className=" font-medium text-center">
                Every professional is verified for skills and trustworthiness.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-[300px] lg:max-w-130.75 bg-[#E8E9EE] py-8.5 425xl:py-12.5 px-5 text-primary-text rounded-[15px] ">
            <div className="flex justify-center items-center mb-8 lg:mb-10.5 p-3 rounded-full bg-secondary-blue ">
              <img src={CreditCard} alt="CreditCard" height={28} width={28} className="w-7 h-7 " />
            </div>
            <div className="flex flex-col h-full text-center ">
              <p className=" font-semibold ">
                Secure Transactions
              </p>
              <p className=" font-medium text-center">
                Payments are safe, and  completion is guaranteed.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-[300px] lg:max-w-130.75 bg-[#E8E9EE] py-8.5 425xl:py-12.5 px-5 text-primary-text rounded-[15px] sm:col-span-2 sm:mx-auto lg:col-span-1 lg:mx-0 ">
            <div className="flex justify-center items-center mb-8 lg:mb-10.5 p-3 rounded-full bg-secondary-blue ">
              <img src={CustomerSupport} alt="CustomerSupport" className="w-7 h-7 " />
            </div>
            <div className="flex flex-col h-full text-center ">
              <p className=" font-semibold ">
                Customer Support
              </p>
              <p className=" font-medium text-center">
                Dedicated help whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustFactorsSectionN