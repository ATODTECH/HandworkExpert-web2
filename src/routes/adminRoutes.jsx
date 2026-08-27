import loadable from "@loadable/component";
import NotFound from "../views/error/not-found.jsx";

const AdminIndex = loadable(() => import("../views/admin/adminIndex.jsx"));
const AdminDashboard = loadable(() =>
  import("../views/admin/dashboard/dashboard.jsx")
);
const Users = loadable(() => import("../views/admin/users/users.jsx"));
const Artisans = loadable(() => import("../views/admin/artisans/artisans.jsx"));
const AdminSettings = loadable(() =>
  import("../views/admin/settings/settings.jsx")
);
const AdminBookings = loadable(() =>
  import("../views/admin/bookings/bookings.jsx")
);
const AdminSupport = loadable(() =>
  import("../views/admin/support/support.jsx")
);
const Reports = loadable(() =>
  import("../views/admin/reports/reports.jsx")
);
const Notifications = loadable(() =>
  import("../views/admin/notifications/notifications.jsx")
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
