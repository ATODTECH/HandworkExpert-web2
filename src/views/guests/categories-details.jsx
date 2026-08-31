import DataLoading from "@/src/components/data-loading";
import FooterN from "@/src/components/guests/footerN";
import TopBarN from "@/src/components/guests/topbarN";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CatDetailsContentIndex from "./components/categories-details/content";
import service from "@/src/assets/img/service-details.webp"

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
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 0,
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
        negotiable: false,
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
      {
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 4,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: true,
      },
      {
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 0,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
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
        avatar: service,
        backdropImage: service,
        title: "Fashion And Design.. Wholesalers And Retailers",
        ratings: 5,
        phoneNumber: "xxxxxxxxx19",
        location: "Lagos, Nigeria",
        amount: "30000.00",
        negotiable: false,
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
]

const CategoriesDetailsIndex = () => {
  const { id } = useParams();
  const { service_list, service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const contentDisplayed = () => {
    switch (id) {
      case "fashion":
        return(<CatDetailsContentIndex id={id} details={ResData[0]} />)
      default:
        break;
    }
  }

  // req data via API and forward res to content component
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <TopBarN popularServices={popularServices} />
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