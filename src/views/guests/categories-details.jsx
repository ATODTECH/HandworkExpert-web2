import DataLoading from "@/src/components/data-loading";
import TopBar from "./components/categories-details/foreground";
import FooterN from "@/src/components/guests/footerN";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CatDetailsContentIndex from "./components/categories-details/content";
import service from "@/src/assets/img/service-details.webp"
import shopping from "@/src/assets/img/playful-women-shopping-together.webp"
import dressmaker from "@/src/assets/img/two-african-dressmaker-women-sew-clothes.webp"
import seaport1 from "@/src/assets/img/seaport-1.webp"
import seaport2 from "@/src/assets/img/seaport-2.webp"
import seaport3 from "@/src/assets/img/seaport-3.webp"
import plumber from "@/src/assets/img/female-plumber.webp"
import woodcutting from "@/src/assets/img/woodcutting-carpenter.webp"
import interior from "@/src/assets/img/wallroom-interior-design.webp"
import painter from "@/src/assets/img/happy-painter.webp"
import construction from "@/src/assets/img/building-construction.webp"
import electrician from "@/src/assets/img/electrician.webp"
import packaging from "@/src/assets/img/packaging-services.webp"
import dispatch from "@/src/assets/img/dispatch-services.webp"
import transport from "@/src/assets/img/female-dispatch-driver.webp"
import loading from "@/src/assets/img/close-up-delivery-men.webp"
import lawnmower from "@/src/assets/img/lawn-mower.webp"
import container from "@/src/assets/img/container-logistics.webp"
import agriproduct from "@/src/assets/img/container-logistics.webp"
import farmEquipment from "@/src/assets/img/farm-equipment.webp"
import seedFertilizer from "@/src/assets/img/seeds-fertilizer.webp"
import farmManagement from "@/src/assets/img/vet-animal-doctor.webp"
import manVegetables from "@/src/assets/img/short-man-holding-vegetables.webp"
import deliveryMarket from "@/src/assets/img/delivery-worker-in-the-market.webp"
import carWash from "@/src/assets/img/car-wash.webp"
import autoElect from "@/src/assets/img/auto-electrician.webp"
import airConditioner from "@/src/assets/img/air-condition-repairs.webp"
import shoeMaker from "@/src/assets/img/shoemaker.webp"
import generatorService from "@/src/assets/img/mechanic-car-repair.webp"
import welder from "@/src/assets/img/welder.webp"
import webDev from "@/src/assets/img/web-development.webp"
import softwareDev from "@/src/assets/img/software-development.webp"
import digitalMarketer from "@/src/assets/img/digital-marketer.webp"
import gameDev from "@/src/assets/img/game-development.webp"
import ITconsulting from "@/src/assets/img/IT-consultant.webp"
import gadgetRepair from "@/src/assets/img/gadgets-repairs.webp"

// API Data
const ResData = [
  {
    category: 'Fashion And Beauty',
    categoryList: [
      {
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "20000.00",
        negotiable: false,
      },
      {
        avatar: dressmaker,
        backdropImage: dressmaker,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: shopping,
        backdropImage: shopping,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
      {
        avatar: shopping,
        backdropImage: shopping,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: dressmaker,
        backdropImage: dressmaker,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
      {
        avatar: dressmaker,
        backdropImage: dressmaker,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
    ]
  },
  {
    category: 'Export Services',
    categoryList: [
      {
        avatar: seaport1,
        backdropImage: seaport1,
        title: "Airgate Firm",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "200000.00",
        negotiable: false,
      },
      {
        avatar: seaport2,
        backdropImage: seaport2,
        title: "Happy General merchants",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
      {
        avatar: seaport3,
        backdropImage: seaport3,
        title: "Belgium Shoes and Wholesale products",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: false,
      },
      {
        avatar: seaport2,
        backdropImage: seaport2,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
      {
        avatar: seaport1,
        backdropImage: seaport1,
        title: "Airgate Firm",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
      {
        avatar: seaport3,
        backdropImage: seaport3,
        title: "Belgium Tyres",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: false,
      },
    ]
  },
  {
    category: 'Home And Property',
    categoryList: [
      {
        avatar: plumber,
        backdropImage: plumber,
        title: "Plumber",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "20000.00",
        negotiable: false,
      },
      {
        avatar: woodcutting,
        backdropImage: woodcutting,
        title: "Carpenter",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: interior,
        backdropImage: interior,
        title: "Happiness Home Decoration",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
      {
        avatar: painter,
        backdropImage: painter,
        title: "Happy Painters",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: construction,
        backdropImage: construction,
        title: "Construction",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: electrician,
        backdropImage: electrician,
        title: "Goodwill Electricians",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
    ]
  },
  {
    category: 'Logistics And Warehousing',
    categoryList: [
      {
        avatar: packaging,
        backdropImage: packaging,
        title: "Packaging Services",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "20000.00",
        negotiable: false,
      },
      {
        avatar: dispatch,
        backdropImage: dispatch,
        title: "Dispatch Services",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: transport,
        backdropImage: transport,
        title: "Grace Transportation Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
      {
        avatar: loading,
        backdropImage: loading,
        title: "Loading And Unloading Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: lawnmower,
        backdropImage: lawnmower,
        title: "Lawn Mower",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: container,
        backdropImage: container,
        title: "Container Drayage Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
    ]
  },
  {
    category: 'Agriculture',
    categoryList: [
      {
        avatar: agriproduct,
        backdropImage: agriproduct,
        title: "Agri Products",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "20000.00",
        negotiable: false,
      },
      {
        avatar: farmEquipment,
        backdropImage: farmEquipment,
        title: "Farm Equipment Rental Service",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: seedFertilizer,
        backdropImage: seedFertilizer,
        title: "Seed And Fertilizer Supply Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
      {
        avatar: farmManagement,
        backdropImage: farmManagement,
        title: "Farm management And Planning Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: manVegetables,
        backdropImage: manVegetables,
        title: "Agri Products",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: deliveryMarket,
        backdropImage: deliveryMarket,
        title: "Container Drayage Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
    ]
  },
  {
    category: 'Automotive',
    categoryList: [
      {
        avatar: carWash,
        backdropImage: carWash,
        title: "Car Wash",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "20000.00",
        negotiable: false,
      },
      {
        avatar: autoElect,
        backdropImage: autoElect,
        title: "Auto Electrician",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: airConditioner,
        backdropImage: airConditioner,
        title: "Air Condition (AC) Repairers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
      {
        avatar: shoeMaker,
        backdropImage: shoeMaker,
        title: "Shoe Makers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: generatorService,
        backdropImage: generatorService,
        title: "Generator Service",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: welder,
        backdropImage: welder,
        title: "Welder",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
      },
    ]
  },
  {
    category: 'Tech/IT',
    categoryList: [
      {
        avatar: webDev,
        backdropImage: webDev,
        title: "Website Development",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "500000.00",
        negotiable: false,
      },
      {
        avatar: softwareDev,
        backdropImage: softwareDev,
        title: "Software Development",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
      {
        avatar: digitalMarketer,
        backdropImage: digitalMarketer,
        title: "Digital Marketing Service",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: false,
      },
      {
        avatar: gameDev,
        backdropImage: gameDev,
        title: "Game Development",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
      {
        avatar: ITconsulting,
        backdropImage: ITconsulting,
        title: "IT Consulting Service",
        ratings: 1,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
      {
        avatar: gadgetRepair,
        backdropImage: gadgetRepair,
        title: "Gadget Repair",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "300000.00",
        negotiable: true,
      },
    ]
  },
]

const CategoriesDetailsIndex = () => {
  const { id } = useParams();
  const { service_list, service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  // use this links instead of popularServices {id:0, name:""}
  const remPopularServices = [
    {
      id: 'fashion',
      name: "Fashion And Beauty",
    }, {
      id: 'export',
      name: "Export Services",
    }, {
      id: 'property',
      name: "Home And Property",
    }, {
      id: 'logistics',
      name: "Logistics And Warehousing",
    }, {
      id: 'agriculture',
      name: "Agriculture",
    }, {
      id: 'automotive',
      name: "Automotive",
    }, {
      id: 'tech-IT',
      name: "Tech/IT",
    },
  ]
  
  const contentDisplayed = () => {
    switch (id) {
      case "fashion":
        return(<CatDetailsContentIndex id={id} details={ResData[0]} />)
      case "export":
        return(<CatDetailsContentIndex id={id} details={ResData[1]} />)
      case "property":
        return(<CatDetailsContentIndex id={id} details={ResData[2]} />)
      case "logistics":
        return(<CatDetailsContentIndex id={id} details={ResData[3]} />)
      case "agriculture":
        return(<CatDetailsContentIndex id={id} details={ResData[4]} />)
      case "automotive":
        return(<CatDetailsContentIndex id={id} details={ResData[5]} />)
      case "tech-IT":
        return(<CatDetailsContentIndex id={id} details={ResData[6]} />)
      default:
        break;
    }
  }

  // req data via API and forward res to content component
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <TopBar popularServices={remPopularServices} />
      {!service_category ? (
        <div className="py-5">
          <DataLoading mt={20} />
        </div>
      ) : (
        <>
          { contentDisplayed() }
        </>
      )}
      <FooterN />
    </div>
  )
}

export default CategoriesDetailsIndex