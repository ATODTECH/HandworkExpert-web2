import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useLocation, useMatch } from "react-router-dom";

export default function SideBar() {
  const routes = [
    { title: "Profile Details", link: "profile" },
    { title: "Addresses", link: "addresses" },
    { title: "Password", link: "password" },
    { title: "Notifications", link: "notifications" },
    { title: "Booking History", link: "booking-history" },
    { title: "Reviews", link: "reviews" },
    // { title: "Settings", link: "settings" },
  ];
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#EFF5FF",
        minHeight: "70vh",
        padding: "30px 20px",
      }}
    >
      <List>
        {routes.map((item, index) => (
          <ListItem key={index} link component={Link} to={`/user/${item.link}`} sx={{mb:-1}}>
            <ListItemButton>
              <ListItemText
                sx={{
                  color:
                    pathname === `/user/${item.link}` ? "#0E1B28" : "#82898F",
                  fontWeight: pathname === `/user/${item.link}` ? "600" : "400",
                  fontSize: 14,
                }}
              >
                {item.title}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
