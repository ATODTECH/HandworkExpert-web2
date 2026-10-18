import loadable from "@loadable/component";
import NotFound from "../src/views/error/not-found.jsx";
const ArtisanIndex = loadable(() =>
  import("../src/views/artisan/artisanIndex.jsx")
);
const Dashboard = loadable(() =>
  import("../src/views/artisan/dashboard/dashboard.jsx")
);
const Bookings = loadable(() =>
  import("../src/views/artisan/bookings/booking.jsx")
);
const Earnings = loadable(() =>
  import("../src/views/artisan/earnings/earnings.jsx")
);
const Settings = loadable(() =>
  import("../src/views/artisan/settings/settings.jsx")
);
const Support = loadable(() => import("../src/views/artisan/support/support.jsx"));
const Calendar = loadable(() =>
  import("../src/views/artisan/calendar/calendar.jsx")
);
const Review = loadable(() => import("../src/views/artisan/review/review.jsx"));
const Onboarding = loadable(() =>
  import("../src/views/artisan/onboarding/onboarding.jsx")
);

export const ArtisanRoutes = [
  {
    path: "artisan/",
    element: <NotFound />,
    // element: <ArtisanIndex />,
    children: [
      {
        path: "dashboard",
        element: <NotFound />,
        // element: <Dashboard />,
      },
      {
        path: "bookings",
        element: <NotFound />,
        // element: <Bookings />,
      },
      {
        path: "Earnings",
        element: <NotFound />,
        // element: <Earnings />,
      },
      {
        path: "Settings",
        element: <NotFound />,
        // element: <Settings />,
      },
      {
        path: "support",
        element: <NotFound />,
        // element: <Support />,
      },
      {
        path: "calendar",
        element: <NotFound />,
        // element: <Calendar />,
      },
      {
        path: "reviews",
        element: <NotFound />,
        // element: <Review />,
      },
    ],
  },
  {
    path: "artisan/onboarding",
    element: <NotFound />,
    // element: <Onboarding />,
  },
];
