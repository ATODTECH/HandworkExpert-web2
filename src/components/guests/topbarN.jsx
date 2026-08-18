import {
  AppBar,
  Popper,
  Stack,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  useTheme,
  Collapse,
  ListItemButton,
} from "@mui/material";
import UserImage from "@/src/assets/img/user-2.png";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "@/src/views/auth/login";
import Register from "@/src/views/auth/register";
import Logo from "@/src/assets/img/logo.png"
import {
  Circle,
  NotificationsOutlined,
  ExpandMore,
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import localforage from "localforage";

// interface TopBarProps {
//   popularServices: [{id: number, name: string}]
// }

// const TopBarN = ({ popularServices }: TopBarProps) => {
const TopBarN = ({ popularServices }) => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [regOpen, setRegOpen] = useState(false);
  
    const links = [
      { title: "About Us", route: "/about-us" },
      { title: "Contact Us", route: "/contact" },
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
      if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
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
      if (prevOpen2.current === true && open2 === false) {
        anchorRef2.current.focus();
      }
  
      prevOpen2.current = open2;
    }, [open2]);
  
    useEffect(() => {
      if (prevOpen3.current === true && open3 === false) {
        anchorRef3.current.focus();
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
  
    const toggleDrawer = (open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };
  
    const handleServicesMobileToggle = () => {
      setServicesOpen(!servicesOpen);
    };
  
    const handleRegMobileToggle = () => {
      setRegOpen(!regOpen);
    };
  
    const handleLogout = async () => {
      await window.localStorage.clear();
      await localforage.clear();
      window.location.reload();
    };
  
    const handleMobileLogin = () => {
      setDrawerOpen(false);
      setOpenLogin(true);
    };
  
    const handleMobileRegister = (regType) => {
      setDrawerOpen(false);
      setRegAs(regType);
      setOpenReg(true);
    };
  


  return (
    <>
      <header id="topbar" className={`fixed top-0 backdrop-blur-[6px] w-full max-w-[1920px] py-3 px-16 xl:px-28 z-20 shadow-md ${colorManager} `}>
        <nav className="flex flex-row w-full items-center justify-between ">
          <Link to={"/"}>
            <img
              src={Logo}
              style={{ height: 35 }}
              className="w-auto "
              alt="Logo"
            />
          </Link>
          <>
          </>
          {/* Destop nav */}
          <div className="hidden lg:flex items-center text-sm text-primary-white font-medium gap-8 ">
            <Link to={"/"} className={` ${pathname==="/"?'text-secondary-orange':''}`}>Home</Link>
            <button className="relative flex items-center gap-1 cursor-pointer ">
              Categories
              <KeyboardArrowDown />
            </button>
            {
              links.map((link) =>
                <Link key={link.title.replace(" ", "")} to={link.route} className={` ${pathname===link.route?'text-secondary-orange':''}`}>{link.title}</Link>
              )
            }
          </div>
          <div className="hidden lg:flex items-center font-semibold text-[1rem] leading-6 gap-6 ">
            <Link to={"/login"}className="flex items-center py-4 px-3 gap-0.5 ">
              Log in
              <KeyboardArrowDown />
            </Link>
            <Link to={"/signup"} className="flex items-center py-3 px-3 bg-secondary-blue rounded-sm text-primary-white gap-0.5 ">
              Sign up
              <KeyboardArrowDown />
            </Link>
          </div>
          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleDrawer(true)}
            className="flex lg:hidden ml-2"
          >
            <MenuIcon />
          </button>

        </nav>
      </header>
    </>
  )
}

export default TopBarN