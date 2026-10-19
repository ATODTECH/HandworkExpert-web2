import loadable from "@loadable/component";
import NotFound from "../src/views/error/not-found.jsx";

const AdminIndex = loadable(() => import("../src/views/admin/adminIndex.jsx"));
const AdminDashboard = loadable(() =>
  import("../src/views/admin/dashboard/dashboard.jsx")
);
const Users = loadable(() => import("../src/views/admin/users/users.jsx"));
const Artisans = loadable(() => import("../src/views/admin/artisans/artisans.jsx"));
const AdminSettings = loadable(() =>
  import("../src/views/admin/settings/settings.jsx")
);
const AdminBookings = loadable(() =>
  import("../src/views/admin/bookings/bookings.jsx")
);
const AdminSupport = loadable(() =>
  import("../src/views/admin/support/support.jsx")
);
const Reports = loadable(() =>
  import("../src/views/admin/reports/reports.jsx")
);
const Notifications = loadable(() =>
  import("../src/views/admin/notifications/notifications.jsx")
);

export const AdminRoutes = [
  {
    path: "admin/",
    element: <NotFound />,
    // element: <AdminIndex />,
    children: [
      {
        path: "dashboard",
        element: <NotFound />,
        // element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <NotFound />,
        // element: <Users />,
      },
      {
        path: "artisans",
        element: <NotFound />,
        // element: <Artisans />,
      },
      {
        path: "bookings",
        element: <NotFound />,
        // element: <AdminBookings />,
      },
      {
        path: "settings",
        element: <NotFound />,
        // element: <AdminSettings />,
      },
      {
        path: "support",
        element: <NotFound />,
        // element: <AdminSupport />,
      },
      {
        path: "reports",
        element: <NotFound />,
        // element: <Reports />,
      },
      {
        path: "notifications",
        element: <NotFound />
        // element: <Notifications />,
      },
    ],
  },
];
