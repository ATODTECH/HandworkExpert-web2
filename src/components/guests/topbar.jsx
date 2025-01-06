import {
  AppBar,
  Avatar,
  Popper,
  Stack,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import UserImage from "../../assets/img/user-2.png";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../../views/auth/login";
import Register from "../../views/auth/register";
import Logo from "../../assets/img/logo.png";
import {
  Circle,
  NotificationsOutlined,
  ExpandMore,
  QuestionAnswerOutlined,
  QuestionAnswer,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import localforage from "localforage";

export default function Topbar({ popularServices }) {
  const categories = [
    { title: "All Categories", url: "/categories" },
    {
      title: "Fashion and Beauty",
      url: "/category-details/fashion-and-beauty",
    },
    { title: "Export Services", url: "/category-details/export-services" },
    { title: "Home and Property", url: "/category-details/home-and-property" },
    {
      title: "Logistics And Warehousing",
      url: "/category-details/logistics-and-Warehousing",
    },
    { title: "Agriculture", url: "/category-details/agriculture" },
  ];
  const links = [
    { title: "About Us", route: "/about-us" },
    { title: "Contact", route: "/contact" },
    { title: "FAQs", route: "/faq" },
  ];
  const regLinks = [
    { title: "Become an Artisan", value: "Artisan", color: "#F56F46" },
    { title: "Become a User", value: "User", color: "#292626" },
  ];

  const options = [
    { title: "Dashboard", value: "dashboard", color: "#292626" },
    { title: "Logout", value: "logout", color: "red" },
  ];

  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const anchorRef = useRef(null);

  const anchorRef2 = useRef(null);
  const anchorRef3 = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleToggle2 = () => {
    setOpen2((prevOpen) => !prevOpen);
  };
  const handleToggle3 = () => {
    setOpen3((prevOpen) => !prevOpen);
  };

  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };
  const handleClose3 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen3(false);
  };

  function handleListKeyDown2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen2(false);
    } else if (event.key === "Escape") {
      setOpen2(false);
    }
  }
  function handleListKeyDown3(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen3(false);
    } else if (event.key === "Escape") {
      setOpen3(false);
    }
  }

  const prevOpen2 = useRef(open2);
  const prevOpen3 = useRef(open3);

  useEffect(() => {
    if (prevOpen2.current === true && setOpen2 === false) {
      anchorRef.current.focus();
    }

    prevOpen2.current = open2;
  }, [open2]);

  useEffect(() => {
    if (prevOpen3.current === true && setOpen3 === false) {
      anchorRef.current.focus();
    }

    prevOpen3.current = open3;
  }, [open3]);

  const [openLogin, setOpenLogin] = useState(false);
  const [regAs, setRegAs] = useState("User");
  const [openReg, setOpenReg] = useState(false);

  const [distanceTop, setDistanceTop] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const colorManager = useMemo(() => {
    if (pathname === "/") {
      return distanceTop <= 500 ? "rgba(255,255,255,0)" : "#172153";
    }
    return "#172153";
  }, [distanceTop, pathname]);
  useEffect(() => {
    window.addEventListener("scroll", function (ev) {
      const topbar = document.getElementById("topbar");

      const distanceToTop =
        window.scrollY + topbar?.getBoundingClientRect()?.top;

      setDistanceTop(distanceToTop);
    });
  }, []);
  return (
    <Fragment>
      <AppBar
        id={"topbar"}
        elevation={0}
        sx={{
          backgroundColor: colorManager,
          backdropFilter: "blur(6px)",

          // height: 65,
          width: "100%",
          padding: "15px 30px",
        }}
      >
        <Stack
          justifyContent="space-between"
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          width={"100%"}
        >
          <div>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Link to={"/"}>
                <img
                  src={Logo}
                  style={{ width: 110, height: 30 }}
                  className="w3-image"
                />
              </Link>
            </Stack>
          </div>
          <div>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <div>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontWeight: "600",
                  }}
                  variant="text"
                  endIcon={<ExpandMore />}
                >
                  Services
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                            sx={{
                              backgroundColor: "#172153",
                            }}
                          >
                            {popularServices.map((item, index) => (
                              <MenuItem
                                component={Link}
                                to={`/services/${item.id}`}
                                sx={{
                                  fontSize: 12,
                                  color: "white",
                                }}
                                key={index}
                                onClick={(e) => handleClose(e, item)}
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
              {links.map((item, index) => (
                <div key={index}>
                  <Button
                    component={Link}
                    to={item.route}
                    sx={{
                      color: pathname === item.route ? "#F56F46" : "white",
                      textTransform: "none",
                      fontWeight: "600",
                    }}
                    variant="text"
                  >
                    {item.title}
                  </Button>
                </div>
              ))}
            </Stack>
          </div>

          {!user && (
            <div>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <div>
                  <Button
                    onClick={() => setOpenLogin(true)}
                    disableElevation
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      fontSize: 11,
                      fontWeight: "600",
                      backgroundColor: "#F56F46",
                    }}
                    variant="contained"
                  >
                    {"Login"}
                  </Button>
                </div>
                <div>
                  <Button
                    ref={anchorRef2}
                    id="composition-button"
                    aria-controls={open2 ? "composition-menu" : undefined}
                    aria-expanded={open2 ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle2}
                    sx={{
                      color: "white",

                      fontSize: 11,
                      fontWeight: "600",
                      backgroundColor: "#F56F46",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#F56F46",
                      },
                    }}
                    variant="contained"
                    endIcon={<ExpandMore />}
                  >
                    {"REGISTER"}
                  </Button>

                  <Popper
                    open={open2}
                    anchorEl={anchorRef2.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose2}>
                            <MenuList
                              autoFocusItem={open2}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown2}
                              sx={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 2,
                                mt: 2,
                                minWidth: 200,
                              }}
                            >
                              {regLinks.map((item, index) => (
                                <MenuItem
                                  sx={{
                                    fontSize: 13,
                                    color: item.color,
                                    borderBottom:
                                      index === 0 ? "1px solid #DCDCDC" : 0,
                                    padding: "10px 15px",
                                    fontWeight: "500",
                                  }}
                                  key={index}
                                  onClick={async (e) => {
                                    await handleClose(e, item);
                                    setRegAs(item.value);
                                    setOpenReg(true);
                                  }}
                                >
                                  {item.title}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Stack>
            </div>
          )}

          {user && (
            <div>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                spacing={1}
              >
                <IconButton
                  aria-label=""
                  component={Link}
                  to={`/${user?.role?.toLowerCase()}/notifications`}
                  sx={{ color: "black", display: "none" }}
                  size="small"
                >
                  <NotificationsOutlined
                    sx={{ fontSize: 18, color: "white" }}
                  />
                </IconButton>

                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={UserImage}
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: "50%",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        bottom: -5,
                        right: 0,
                        zIndex: 0,
                      }}
                    >
                      <Circle
                        sx={{
                          fontSize: 10,
                          color: "#667185",
                          border: "2px solid white",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontWeight: "600",
                      marginLeft: 10,
                    }}
                  >
                    {user?.name || `${user?.last_name} ${user?.first_name}`}
                  </div>

                  <div>
                    <IconButton
                      aria-label=""
                      sx={{ color: "white" }}
                      size="small"
                      ref={anchorRef3}
                      id="composition-button"
                      aria-controls={open2 ? "composition-menu" : undefined}
                      aria-expanded={open2 ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle3}
                    >
                      <ExpandMore />
                    </IconButton>
                    <Popper
                      open={open3}
                      anchorEl={anchorRef3.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose3}>
                              <MenuList
                                autoFocusItem={open3}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown3}
                                sx={{
                                  backgroundColor: "#FFFFFF",
                                  borderRadius: 2,
                                  mt: 2,
                                  minWidth: 200,
                                }}
                              >
                                {options.map((item, index) => (
                                  <MenuItem
                                    sx={{
                                      fontSize: 13,
                                      color: item.color,
                                      borderBottom:
                                        index === 0 ? "1px solid #DCDCDC" : 0,
                                      padding: "10px 15px",
                                      fontWeight: "500",
                                    }}
                                    key={index}
                                    onClick={async (e) => {
                                      if (index === 0) {
                                        return navigate(
                                          `/${user?.role?.toLowerCase()}/dashboard`
                                        );
                                      }

                                      await window.localStorage.clear();
                                      await localforage.clear();
                                      window.location.reload();
                                      await handleClose3(e, item);
                                    }}
                                  >
                                    {item.title}
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>
              </Stack>
            </div>
          )}
        </Stack>
      </AppBar>
      <Login
        dialog={openLogin}
        setDialog={setOpenLogin}
        setRegAs={setRegAs}
        setOpenReg={setOpenReg}
      />
      <Register
        dialog={openReg}
        setDialog={setOpenReg}
        setOpenLogin={setOpenLogin}
        regAs={regAs}
      />
    </Fragment>
  );
}
