import BgCheck from "@/src/assets/img/background-check.png";
import CreditCard from "@/src/assets/img/credit-card.png";
import CustomerSupport from "@/src/assets/img/customer-support.png";

const TrustFactorsSectionN = () => {
  return (
    <section className="w-full p-16 xl:px-28 mb-28.5 ">
      <div className="flex flex-col w-full justify-center items-center relative gap-15 ">
        <h3 className="font-semibold text-[45px] text-secondary-orange mb-4">Services Guaranteed And Trust Factors</h3>
        <div className="grid grid-cols-3 gap-[45px] ">
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-130.75 bg-[#E8E9EE] py-12.5 px-5 text-primary-text rounded-[15px] ">
            <div className=" mb-10.5 p-3 rounded-full bg-secondary-blue ">
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
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-130.75 bg-[#E8E9EE] py-12.5 px-5 text-primary-text rounded-[15px] ">
            <div className="flex justify-center items-center mb-10.5 p-3 rounded-full bg-secondary-blue ">
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
          <div className="flex flex-col justify-between items-center h-full max-h-120.5 w-full max-w-130.75 bg-[#E8E9EE] py-12.5 px-5 text-primary-text rounded-[15px] ">
            <div className=" mb-10.5 p-3 rounded-full bg-secondary-blue ">
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