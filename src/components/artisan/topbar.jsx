import {
  Circle,
  NotificationsOutlined,
  ExpandMore,
  QuestionAnswerOutlined,
  QuestionAnswer,
} from "@mui/icons-material";
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
import { Link, useNavigate } from "react-router-dom";
import UserImage from "../../assets/img/user-2.png";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import localforage from "localforage";
export default function TopBar({ drawerWidth, handleDrawerToggle }) {
  const { user } = useSelector((state) => state.user);
  const [open3, setOpen3] = useState(false);
  const anchorRef3 = useRef(null);
  const prevOpen3 = useRef(open3);

  const options = [
    { title: "Setting", value: "settings", color: "#292626" },
    { title: "Logout", value: "logout", color: "red" },
  ];

  const handleToggle3 = () => {
    setOpen3((prevOpen3) => !prevOpen3);
  };

  function handleListKeyDown3(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen3(false);
    } else if (event.key === "Escape") {
      setOpen3(false);
    }
  }

  useEffect(() => {
    if (prevOpen3.current === true && setOpen3 === false) {
      anchorRef3.current.focus();
    }

    prevOpen3.current = open3;
  }, [open3]);

  const handleClose3 = (event) => {
    if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
      return;
    }

    setOpen3(false);
  };

  const navigate = useNavigate();
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        borderBottom: "1px solid #EAECF0",
        backgroundColor: "white",
        backdropFilter: "blur(6px)",
        // height: 65,
        padding: "15px 30px",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        spacing={1}
      >
        <IconButton
          aria-label=""
          component={Link}
          to={"/artisan/reviews"}
          sx={{ color: "black" }}
          size="small"
        >
          <QuestionAnswer sx={{ fontSize: 18 }} />
        </IconButton>

        <IconButton
          aria-label=""
          component={Link}
          to={"/artisan/notifications"}
          sx={{ color: "black" }}
          size="small"
        >
          <NotificationsOutlined sx={{ fontSize: 18 }} />
        </IconButton>

        <div style={{ position: "relative" }}>
          <img
            src={UserImage}
            style={{
              height: 32,
              width: 32,
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

        <div>
          <IconButton
            aria-label=""
            sx={{ color: "black" }}
            size="small"
            ref={anchorRef3}
            id="composition-button"
            aria-controls={open3 ? "composition-menu" : undefined}
            aria-expanded={open3 ? "true" : undefined}
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
                    placement === "bottom-start" ? "left top" : "left bottom",
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
                            borderBottom: index === 0 ? "1px solid #DCDCDC" : 0,
                            padding: "10px 15px",
                            fontWeight: "500",
                          }}
                          key={index}
                          onClick={async (e) => {
                            handleClose3(e, item);
                            if (index === 0) {
                              return navigate(`/artisan/${item.value}`);
                            }

                            await localforage.clear();
                            window.localStorage.clear();
                          

                            window.location.reload();
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
    </AppBar>
  );
}
