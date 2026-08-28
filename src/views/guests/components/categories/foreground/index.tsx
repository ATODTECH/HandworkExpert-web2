import { motion, AnimatePresence } from "framer-motion"
import foreground from "@/src/assets/img/plumber-foreground.webp"
import { DesktopWindowsOutlined, FmdGoodOutlined } from "@mui/icons-material"

const ForegroundCatIndex = () => {
  return (
    <section className="min-h-screen w-full flex items-center isolate relative px-4 p-16 sm:px-16 xl:px-28 bg-[#151327]">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={foreground}
              alt="Professional tradesperson at work"
              draggable={false}
              className="h-full w-full select-none pointer-events-none object-cover object-[55%_30%] opacity-70"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Foreground Content */}
      <div className="flex flex-col justify-end items-center text-center text-primary-text relative z-10 w-full ">
        <div className="max-w-[80%] lg:max-w-2xl py-10 425xl:py-20 md:py-30 lg:pt-40 lg:pb-21 ">
          <h1 className="text-4xl 425xl:text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-tight text-primary-white ">What can we do for you today?</h1>
        </div>

        <div className="flex justify-between md:grid grid-cols-2 place-content-center bg-primary-white rounded-[20px] sm:rounded-full 425xl:max-w-[90%] sm:max-w-full w-full px-2 lg:h-17.5 md:px-4 md:py-2 lg:p-5 mb-10">
          <form method="POST" className="flex relative flex-1">
            <div className="hidden lg:flex absolute top-[30%] left-2">
              <DesktopWindowsOutlined fontSize="small" className=" text-[#858585]" />
            </div>
            <input type="search" id="search" name="search" autoFocus placeholder="What are you looking for?" className=" text-[1rem] placeholder:text-[#858585] placeholder:text-sm lg:placeholder:text-[1rem] border-r-0 md:border-r-[1.5px] border-r-[#858585] lg:pl-10 p-3 w-full outline-0 ring-0 [&::-webkit-search-cancel-button]:hidden [&::-ms-clear]:hidden " />
          </form>
          <div className="flex items-center justify-between gap-2 select-none">
            <div className="hidden md:flex truncate items-center ml-4">
              <FmdGoodOutlined fontSize="small" className="text-[#858585]" />
              <span className=" ml-2 font-medium text-sm truncate ">3 Agbo Akomolafe St, Isheri Olofin Lagos</span>
            </div>
            <button type="submit" className=" rounded-[20px] sm:rounded-full py-1.5 px-3 md:py-3 md:px-6 lg:px-8 bg-secondary-orange font-extrabold tracking-wide text-[.75rem] lg:text-[1rem] text-primary-white cursor-pointer">Search</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start text-primary-white w-full md:max-w-[80%] ">
          <h4 className="flex flex-nowrap justify-center mb-4 lg:mb-0 md:justify-end w-full md:max-w-[20%] items-center p-0.5 lg:py-2.5 px-1 gap-1.5 rounded-full">
            <span className="inline-flex shrink-0 bg-[#F5B946] h-1.5 w-1.5 lg:h-3 lg:w-3 rounded-full "></span>
            <span className=" font-semibold text-[.75rem] md:text-sm">Popular Services</span>
          </h4>
          <div className="flex flex-wrap justify-center font-medium text-[.652rem] md:text-sm w-full gap-2 md:max-w-[80%]">
            <h4 className="inline-flex border-[1.5px] rounded-full border-dashed py-1 px-1.5 lg:py-2.5 lg:px-5 border-primary-white ">Fashion and design.. wholesalers and retailers</h4>
            <h4 className="inline-flex py-1 px-1.5 lg:py-2.5 lg:px-5 bg-secondary-orange rounded-full ">Fashion</h4>
            <h4 className="inline-flex border-[1.5px] rounded-full border-dashed py-1 px-1.5 lg:py-2.5 lg:px-5 border-primary-white ">Fumigation and General cleaning services</h4>
            <h4 className="inline-flex border-[1.5px] rounded-full border-dashed py-1 px-1.5 lg:py-2.5 lg:px-5 border-primary-white ">Logistics and warehousing</h4>
            <h4 className="inline-flex border-[1.5px] rounded-full border-dashed py-1 px-1.5 lg:py-2.5 lg:px-5 border-primary-white ">Makeup artist</h4>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ForegroundCatIndex