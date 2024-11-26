import loadable from "@loadable/component";
const ArtisanIndex = loadable(() =>
  import("../views/artisan/artisanIndex.jsx")
);
const Dashboard = loadable(() =>
  import("../views/artisan/dashboard/dashboard.jsx")
);
const Bookings = loadable(() =>
  import("../views/artisan/bookings/booking.jsx")
);
const Earnings = loadable(() =>
  import("../views/artisan/earnings/earnings.jsx")
);
const Settings = loadable(() =>
  import("../views/artisan/settings/settings.jsx")
);
const Support = loadable(() => import("../views/artisan/support/support.jsx"));
const Calendar = loadable(() =>
  import("../views/artisan/calendar/calendar.jsx")
);
const Review = loadable(() => import("../views/artisan/review/review.jsx"));
const Onboarding = loadable(() =>
  import("../views/artisan/onboarding/onboarding.jsx")
);

export const ArtisanRoutes = [
  {
    path: "artisan/",
    element: <ArtisanIndex />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "Earnings",
        element: <Earnings />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "reviews",
        element: <Review />,
      },
    ],
  },
  {
    path: "artisan/onboarding",
    element: <Onboarding />,
  },
];
