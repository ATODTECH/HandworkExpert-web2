import foreground from "@/src/assets/img/faq-lady-foreground.png"
import { AnimatePresence, motion } from "framer-motion"

const ForegroundFAQIndex = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative px-4 p-16 sm:px-16 xl:px-28 bg-[#151327]">
      {/* foreground landing about image */}
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
              alt=""
              draggable={false}
              className="h-full w-full select-none pointer-events-none object-cover object-top opacity-70"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Foreground content */}
      <div className="relative flex flex-col items-center text-center w-full 425xl:max-w-[60%] py-10 425xl:py-20 md:py-30 lg:pt-40 lg:pb-21 gap-8.75 ">
        <h1 className="text-4xl 425xl:text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-tight text-primary-white "><span className="text-secondary-orange">Prohandy</span> Frequently Asked Questions</h1>
        <h2 className="w-full font-medium text-center flex flex-col lg:max-w-[80%] text-xl lg:text-2xl text-primary-white">
          Everything you need to know about our services
        </h2>
      </div>
    </section>
  )
}

export default ForegroundFAQIndex