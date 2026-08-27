import loadable from "@loadable/component";
import { createBrowserRouter, useRouteError } from "react-router-dom";

import Error from "../views/error/error.jsx";
import NotFound from "../views/error/not-found.jsx";
import { UserRoutes } from "./userRoutes.jsx";
import { ArtisanRoutes } from "./artisanRoutes.jsx";
import { AdminRoutes  } from "./adminRoutes.jsx";

const Index = loadable(() => import("../views/index.jsx"));
const Home = loadable(() => import("../views/guests/home.jsx"));
const About = loadable(() => import("../views/guests/about-us.jsx"));
const Contact = loadable(() => import("../views/guests/contactN.jsx"));
const FAQ = loadable(() => import("../views/guests/faqN.jsx"));
const Categories = loadable(() => import("../views/guests/categories.jsx"));
const CategoryDetails = loadable(() =>
  import("../views/guests/category-details.jsx")
);
const ServiceDetails = loadable(() =>
  import("../views/guests/service-details.jsx")
);
const BookService = loadable(() =>
  import("../views/guests/bookings/book-service.jsx")
);
const PrivacyPolicy = loadable(() =>
  import("../views/guests/privacy-policy.jsx")
);

export const CustomError = () => {
  const error = useRouteError();
  console.log(error);
  return <Error />;
};
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <CustomError />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "category-details/:id",
        element: <NotFound />,
        // element: <CategoryDetails />,
      },
      {
        path: "services/:id",
        element: <NotFound />,
        // element: <CategoryDetails />,
      },
      {
        path: "service-details/:id",
        element: <NotFound />,
        // element: <ServiceDetails />,
      },
      {
        path: "book-service/:id",
        element: <NotFound />,
        // element: <BookService />,
      },
      {
        path: "privacy-policy",
        element: <NotFound />,
        // element: <PrivacyPolicy />,
      },
      ...UserRoutes,
      ...ArtisanRoutes,
      ...AdminRoutes,
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
