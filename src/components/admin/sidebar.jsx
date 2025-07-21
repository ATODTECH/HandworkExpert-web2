import { useTheme } from "@emotion/react";
import { Fragment, useMemo } from "react";
import { Avatar, Badge, Stack, useMediaQuery } from "@mui/material";

import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
} from "@mui/material";
import Logo from "../../assets/img/logo-black.png";
import {
  HomeOutlined,
  PeopleAltOutlined,
  CalendarMonthOutlined,
  WalletOutlined,
  TextsmsOutlined,
  TuneOutlined,
  Support,
  SupportAgent,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { logOut } from "../../services/userService";
import { useSelector } from "react-redux";
import UserImage from "../../assets/img/user-2.png";
export default function Sidebar({
  window,
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
}) {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.user);

  const routes = [
    { title: "Dashboard", link: "dashboard", icon: HomeOutlined },
    { title: "User management", link: "users", icon: PeopleAltOutlined },
    { title: "Artisans", link: "artisans", icon: SupportAgentOutlined },
    { title: "Bookings", link: "bookings", icon: PeopleAltOutlined },
    { title: "Reports", link: "reports", icon: SupportAgentOutlined },
    // { title: "Calendar", link: "calendar", icon: CalendarMonthOutlined },
    { title: "Support", link: "support", icon: SupportAgentOutlined },
    { title: "Notifications", link: "notifications", icon: TextsmsOutlined },
    { title: "Settings", link: "settings", icon: TuneOutlined },
  ];

  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar>
        <Link to={"/"}>
          <h6 style={{ color: "white", padding: "10px 0 " }}>
            <img src={Logo} style={{ width: "80%" }} />
          </h6>
        </Link>
      </Toolbar>

      <br />
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        sx={{ padding: "0 15px", mb: 4 }}
      >
        <div>
          <Badge
            badgeContent=" "
            overlap="circular"
            variant="dot"
            color="success"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src={UserImage} sx={{ width: 35, height: 35 }} />
          </Badge>
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.3 }}>
          <b style={{ color: "#101928" }}>
            {user?.first_name} {user?.last_name}
          </b>
          <br />
          <span style={{ color: "#475367", fontSize:10 }}>{user?.email}</span>
        </div>
      </Stack>

      <List sx={{ padding: "0 5px" }}>
        {routes.map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: "flex" }}
            component={Link}
            to={`/admin/${item.link}`}
          >
            <ListItemButton
              sx={{
                backgroundColor:
                  pathname === `/admin/${item.link}` ? "#EFF5FF" : "white",
              }}
            >
              <ListItemIcon
                sx={{
                  mr: -2,
                  ml: -1,
                }}
              >
                <item.icon
                  sx={{
                    color:
                      pathname === `/admin/${item.link}`
                        ? "#1E338A"
                        : "#667185",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <span
                  style={{
                    color:
                      pathname === `/admin/${item.link}`
                        ? "#1E338A"
                        : "#667185",
                    fontWeight:
                      pathname === `/admin/${item.link}` ? "500" : "400",
                    fontSize: 14,
                  }}
                >
                  {item.title}
                </span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  //   const container =window.

  const theme = useTheme();

  const display = useMediaQuery(theme.breakpoints.up("sm"));

  const displayChecker = useMemo(() => display, [display]);

  return (
    <Box
      component="nav"
      className="app-customize"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar "
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        // container={container}
        anchor="left"
        variant={displayChecker ? "permanent" : "temporary"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        elevation={5}
        sx={{
          backgroundColor: "darkgrey",
          // display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "white",
            borderRight: "1px solid #E4E7EC",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
