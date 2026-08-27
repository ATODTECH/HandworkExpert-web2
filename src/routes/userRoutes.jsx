import loadable from "@loadable/component";
import NotFound from "../views/error/not-found.jsx";
const UserIndex = loadable(() => import("../views/users/userIndex.jsx"));
const Profile = loadable(() => import("../views/users/profile/profile.jsx"));
const Address = loadable(() => import("../views/users/address/address.jsx"));
const Bookings = loadable(() =>
  import("../views/users/bookings/history.jsx")
);
const Notifications = loadable(() =>
  import("../views/users/notifications/notifications.jsx")
);
const Password = loadable(() => import("../views/users/password/password.jsx"));
const Reviews = loadable(() => import("../views/users/reviews/reviews.jsx"));
export const UserRoutes = [
  {
    path: "user/",
    element: <NotFound />,
    // element: <UserIndex />,
    children: [
      {
        path: "profile",
        element: <NotFound />,
        // element: <Profile />,
      },
      {
        path: "dashboard",
        element: <NotFound />,
        // element: <Profile />,
      },
      {
        path: "addresses",
        element: <NotFound />,
        // element: <Address />,
      },
      {
        path: "notifications",
        element: <NotFound />,
        // element: <Notifications />,
      },
      {
        path: "booking-history",
        element: <NotFound />,
        // element: <Bookings />,
      },
      {
        path: "reviews",
        element: <NotFound />,
        // element: <Reviews />,
      },
      {
        path: "password",
        element: <NotFound />,
        // element: <Password />,
      },
    ],
  },
];
