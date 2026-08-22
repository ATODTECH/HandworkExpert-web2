import { ReactNode } from "react"
import ClothingStore from "@/src/assets/img/clothing-store.png";
import Exportation from "@/src/assets/img/export-services.png";
import homesProperty from "@/src/assets/img/homes-property.png";
import Logistics from "@/src/assets/img/logistics-warehousing.png";
import Media from "@/src/assets/img/media-communication.png";

const CategoriesContentIndex = () => {

  const ResData = [
    {
      icon: ClothingStore,
      category: "Fashion And Beauty Shop",
      caption: "ATOD TECH offers a diverse array of expertly crafted services, seamlessly  merging creativity merging creativity.",
      brands: ["Happiness store", "Grace kampala", "Joyce store", "Anointed store", "G&D gadgets", "Kano price", ]
    }, {
      icon: Exportation,
      category: "Export Services",
      caption: "ATOD TECH offers a diverse array of expertly crafted services, seamlessly  merging creativity merging creativity.",
      brands: ["Happiness store", "Grace kampala", "Joyce store", "Anointed store", "G&D gadgets", "Kano price", ]
    }, {
      icon: homesProperty,
      category: "Home And Property",
      caption: "ATOD TECH offers a diverse array of expertly crafted services, seamlessly  merging creativity merging creativity.",
      brands: ["Happiness store", "Grace kampala", "Joyce store", "Anointed store", "G&D gadgets", "Kano price", ]
    }, {
      icon: Media,
      category: "Media",
      caption: "ATOD TECH offers a diverse array of expertly crafted services, seamlessly  merging creativity merging creativity.",
      brands: ["Happiness store", "Grace kampala", "Joyce store", "Anointed store", "G&D gadgets", "Kano price", ]
    }, {
      icon: Logistics,
      category: "Logistics And Warehousing",
      caption: "ATOD TECH offers a diverse array of expertly crafted services, seamlessly  merging creativity merging creativity.",
      brands: ["Happiness store", "Grace kampala", "Joyce store", "Anointed store", "G&D gadgets", "Kano price", ]
    },
  ]
  const content = () => {
    const contents: ReactNode[] = []
    ResData.map((responseData, index) => (
      contents.push(
        <div key={index} className="flex justify-end h-full min-h-16 py-5 px-4.25 shadow-[0px_0px_4px_2px_#E6E6E640] rounded-[1.25rem] ">
          <div className="flex flex-col justify-end w-full max-w-[60%] pb-10 ">
            <div className="flex items-center mb-4 gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <img 
                height={24}
                width={24}
                src={responseData.icon}
                alt={responseData.category}
                className=" h-full w-full object-cover" />
              </div>
              <span className=" text-[1rem] leading-[1.5rem] tracking-[1.5%] font-bold">{responseData.category}</span>
            </div>
            <p className=" text-[1rem] leading-[1.5rem] font-medium w-[70%] mb-10">{responseData.caption}</p>
            {/* continune with before bgColor */}
            <div className="flex flex-wrap select-none relative w-fit max-w-[80%] overflow-hidden rounded-[.625rem] bg-secondary-blue px-6 py-4">
              <div className="absolute w-10 h-auto inset-0 left-0 bg-linear-to-r from-secondary-blue via-secondary-blue to-[#151327]/0 z-20 "></div>
              <div className=" flex w-max marquee-content" style={{'--char-count': responseData.brands.length} as React.CSSProperties}>
                <div className="flex whitespace-nowrap gap-4">
                  {responseData.brands.map((brand, i) => (
                    <span key={i} className="flex items-center gap-4 text-[1rem]">
                      <span
                        className={
                          i === 1
                            ? "text-sm font-medium text-secondary-orange"
                            : "text-sm font-medium text-[#F3F5FF]"
                        }
                      >
                        {brand}
                      </span>
                      <span className={`text-sm text-primary-white ${i===responseData.brands.length-1 ? 'mr-4':''}`}>|</span>
                    </span>
                  ))}
                </div>
                <div className="flex whitespace-nowrap gap-4">
                  {responseData.brands.map((brand, i) => (
                    <span key={i} className="flex items-center gap-4 text-[1rem]">
                      <span
                        className={
                          i === 1
                            ? "text-sm font-medium text-secondary-orange"
                            : "text-sm font-medium text-[#F3F5FF]"
                        }
                      >
                        {brand}
                      </span>
                      <span className={`text-sm text-primary-white ${i===responseData.brands.length-1 ? 'mr-4':''}`}>|</span>
                    </span>
                  ))}
                </div>

              </div>
              <div className="absolute flex w-full h-full top-0 left-0 justify-end pointer-events-none marquee-overlay">
                <div className=" w-10 h-full bg-linear-to-l to-[#151327]/0 via-secondary-blue  from-secondary-blue z-20 "></div>
              </div>
            </div>
          </div>
          <div className="relative h-auto w-[20rem] lg:w-[35%] max-w-[40%] rounded-[1rem] overflow-hidden">
            <img 
            src={responseData.icon} 
            alt={responseData.category}
            height={678}
            width={517}
            className=" h-full w-full object-cover" />
            <div className="absolute h-full w-full bg-[#17215333] top-0"></div>
            <button type="submit" className="absolute bottom-5 flex left-1/2 -translate-x-1/2 bg-secondary-orange text-primary-white py-1.75 px-5 text-[.75rem] tracking-[2%] font-bold rounded-full leading-6 outline-0 cursor-pointer"
          onClick={()=>alert("In progress!")}>View All Service</button>
          </div>
        </div>
      )
    ))
    return contents;
  }

  return (
    <section className="w-full flex items-center relative px-4 p-16 sm:px-16 xl:px-28 bg-primary-white">
     <div className="flex flex-col gap-30 items-center w-full my-16">
      <div className="flex flex-col items-center w-full max-w-[80%]">
        <h1 className="font-semibold text-center text-2xl 425xl:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-14 text-secondary-orange w-[70%] mb-6.25 ">Discover Our Full Range Of Services </h1>
        <p className=" text-[#858585] tracking-[2%] text-center text-[1rem]">
          Artisan’s Attic offers a diverse array of expertly crafted services, seamlessly  merging creativity and technology to deliver solutions that exceed and drive digital success  
        </p>
      </div>
      <div className="flex flex-col text-primary-text w-full gap-13.25">
        { content() }
        <div className="flex w-full justify-center ">
          <button type="submit" className="bg-secondary-blue text-primary-white py-[.9rem] px-12 text-sm tracking-[2%] font-bold rounded-[5px] leading-6 outline-0 cursor-pointer"
          onClick={()=>alert("In progress!")}>View All</button>
        </div>
      </div>
     </div>
    </section>
  )
}

export default CategoriesContentIndex