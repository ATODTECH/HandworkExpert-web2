import loadable from "@loadable/component";
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
    element: <UserIndex />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <Profile />,
      },
      {
        path: "addresses",
        element: <Address />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "booking-history",
        element: <Bookings />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "password",
        element: <Password />,
      },
    ],
  },
];
