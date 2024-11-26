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
  Badge,
  Box,
} from "@mui/material";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  CameraAltOutlined,
  CameraOutlined,
  Circle,
  ExpandMore,
  NotificationsOutlined,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../../views/auth/login";
import Register from "../../views/auth/register";
import Logo from "../../assets/img/logo-black.png";
import UserImage from "../../assets/img/user-2.png";
import { useSelector } from "react-redux";
import localforage from "localforage";
export default function Topbar() {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const anchorRef = useRef(null);

  const anchorRef2 = useRef(null);

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

  const options = [
    { title: "Dashboard", value: "dashboard", color: "#292626" },
    { title: "Logout", value: "logout", color: "red" },
  ];

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

  const handleClose2 = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };

  function handleListKeyDown2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen2(false);
    } else if (event.key === "Escape") {
      setOpen2(false);
    }
  }

  const prevOpen2 = useRef(open2);

  useEffect(() => {
    if (prevOpen2.current === true && setOpen2 === false) {
      anchorRef.current.focus();
    }

    prevOpen2.current = open2;
  }, [open2]);

  const [openLogin, setOpenLogin] = useState(false);
  const [regAs, setRegAs] = useState("User");
  const [openReg, setOpenReg] = useState(false);

  const navigate = useNavigate();

  return (
    <Fragment>
      <AppBar
        id={"topbar"}
        elevation={0}
        sx={{
          backgroundColor: "white",
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
                <NotificationsOutlined sx={{ fontSize: 18, color: "black" }} />
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
                        border: "2px solid black",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    color: "black",
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
                    sx={{ color: "black" }}
                    size="small"
                    ref={anchorRef2}
                    id="composition-button"
                    aria-controls={open2 ? "composition-menu" : undefined}
                    aria-expanded={open2 ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle2}
                  >
                    <ExpandMore />
                  </IconButton>
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
                                    await handleClose2(e, item);
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
