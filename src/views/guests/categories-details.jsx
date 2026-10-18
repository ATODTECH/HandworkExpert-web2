import DataLoading from "@/src/components/data-loading";
import {TopBar} from "./components/categories-details/foreground";
import {Footer} from "@/src/components/guests/footer";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {CatDetailsContentIndex} from "./components/categories-details/content";
import {service, shopping, dressmaker, seaport1, seaport2, seaport3, plumber, woodcutting, interior, painter, construction, electrician, packaging, dispatch, transport, loading, lawnmower, container, agriproduct, farmEquipment, seedFertilizer, farmManagement, manVegetables, deliveryMarket, carWash, autoElect, airConditioner, shoeMaker, generatorService, welder, webDev, softwareDev, digitalMarketer, gameDev, ITconsulting, gadgetRepair} from "@/src/assets"

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
        return (<div className=""></div>)
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
      <Footer />
    </div>
  )
}

export default CategoriesDetailsIndex