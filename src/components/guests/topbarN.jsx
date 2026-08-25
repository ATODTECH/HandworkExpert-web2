import {
  Drawer,
  useTheme,
} from "@mui/material";
import UserImage from "@/src/assets/img/user-2.png";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "@/src/views/auth/login";
import Register from "@/src/views/auth/register";
import Logo from "@/src/assets/img/logo.png"
import {
  Circle,
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  
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
  
  useEffect(() => {
    const handleScroll = () => {
      // Compares scroll position to the full viewport height
      setIsScrolled(window.scrollY >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  

  const mobileDrawer = (
    <div className=" w-full min-w-70 flex flex-col gap-2" role="presentation">
      <div className="flex justify-between items-center p-4 bg-secondary-blue ">
        <Link to="/" onClick={toggleDrawer(false)}>
          <img
            src={Logo}
            style={{ width: "100%", height: 30 }}
            alt="Logo"
          />
        </Link>
        <button
          onClick={toggleDrawer(false)}
          className=" text-primary-white bg-none cursor-pointer border-none">
          <CloseIcon />
        </button>
      </div>
      <ul className="list-none m-0 p-0 flex flex-col" >
        <li>
          <Link
            to="/"
            onClick={toggleDrawer(false)}
            className={` flex px-4 py-2 ${pathname === "/" ? "text-secondary-orange" : "text-primary-text"}`}
          >
            Home
          </Link>
        </li>

        <li>
          <button
            onClick={handleServicesMobileToggle}
            className="flex justify-between items-center w-full px-4 py-2 bg-none cursor-pointer text-left border-none"
          >
            <span>Categories</span>
            {servicesOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </button>
        </li>

        {servicesOpen && (
          <ul className="list-none m-0 p-0" >
            {(popularServices || []).map((service, index) => (
              <li key={index}>
                <Link
                  to={`/services/${service.id}`}
                  onClick={toggleDrawer(false)}
                  className="flex pl-8 py-2 text-[0.9rem] text-primary-text"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {links.map((item, index) => (
          <li key={index}>
            <Link
              to={item.route}
              onClick={toggleDrawer(false)}
              className={` flex px-4 py-2 ${pathname === item.route ? "text-secondary-orange" : "text-primary-text"}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {!user ? (
        <ul className="list-none m-0 p-0">
          <li className="px-4 py-2">
            <button
              onClick={handleMobileLogin}
              className="w-full rounded-sm text-secondary-blue uppercase font-semibold border border-secondary-blue bg-none py-2 px-0 cursor-pointer "
            >
              Login
            </button>
          </li>

          <li>
            <button
              onClick={handleRegMobileToggle}
              className="flex justify-between items-center w-full py-2 px-4 cursor-pointer text-left border-none"
            >
              <span
              className="text-secondary-orange uppercase font-semibold"
              >
                Register
              </span>
              {regOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </button>
          </li>

          {regOpen && (
            <ul className="list-none m-0 p-0">
              {regLinks.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleMobileRegister(item.value)}
                    className={`flex w-full text-left pl-8 py-2 font-medium cursor-pointer bg-none border-none ${item.color}`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </ul>
      ) : (
        <ul className="list-none m-0 p-0">
          <li
          className="flex items-center gap-4 py-2 px-4"
          >
            <div className={'relative'}>
              <img
                src={UserImage}
                height={30}
                width={30}
                className="h-7.5 w-7.5 rounded-full"
                alt="User"
              />
              <div
              className="absolute -bottom-1.25 right-0 z-0"
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
            <span className="font-semibold">
              {user?.name || `${user?.last_name} ${user?.first_name}`}
            </span>
          </li>

          <li>
            <button
              onClick={() => {
                navigate(`/${user?.role?.toLowerCase()}/dashboard`);
                setDrawerOpen(false);
              }}
              className="flex w-full text-left py-2 px-4 cursor-pointer border-none bg-none"
            >
              Dashboard
            </button>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="flex w-full text-left py-2 px-4 cursor-pointer border-none bg-none"
            >
              <span className={" text-red-500"}>Logout</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );


  return (
    <>
      <header id="topbar" className={`fixed top-0 backdrop-blur-[6px] w-screen max-w-[1920px] py-3 px-4 sm:px-16 xl:px-28 z-20 shadow-md ${isScrolled?'bg-secondary-blue':''} `}>
        <nav className="flex flex-row w-full items-center justify-between ">
          <Link to={"/"} className="outline-0">
            <img
              src={Logo}
              draggable={false}
              style={{ height: 30 }}
              className="w-auto "
              alt="Logo"
            />
          </Link>
          {/* Destop nav */}
          <div className="hidden lg:flex items-center text-sm text-primary-white font-medium gap-8 ">
            <Link to={"/"} className={` ${pathname==="/"?'text-secondary-orange font-bold':''}`}>Home</Link>
            <Link to={"/categories"} className={`flex items-center gap-1 ${pathname==="/categories"? 'text-secondary-orange font-bold':''}`}>
              <span className="">Categories</span>
              <KeyboardArrowDown />
            </Link>
            {links.map((link) =>
              <Link key={link.title.replace(" ", "")} to={link.route} className={` ${pathname===link.route?'text-secondary-orange font-bold':''}`}>{link.title}</Link>
            )}
          </div>
          <div className="hidden lg:flex items-center font-semibold text-[1rem] leading-6 gap-6 ">
            <Link to={"/login"}className={`flex items-center py-4 px-3 gap-0.5 ${isScrolled ?' text-primary-white':''} `}>
              Log in
              <KeyboardArrowDown />
            </Link>
            <Link to={"/signup"} className="flex items-center py-3 px-3 bg-secondary-blue rounded-sm text-primary-white gap-0.5 hover:bg-secondary-orange shadow-[0px_1px_1px_#000000fa] ">
              Sign up
              <KeyboardArrowDown />
            </Link>
          </div>
          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleDrawer(true)}
            className={`flex lg:hidden ml-2 ${isScrolled?'text-primary-white':'text-primary-text'}`}
          >
            <MenuIcon />
          </button>

        </nav>
      </header>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {mobileDrawer}
      </Drawer>
    </>
  )
}

export default TopBarN



// {servicesOpen && (
//   <ul className="flex flex-col absolute left-[-50%] top-13.5 gap-2 w-50 text-primary-white bg-secondary-blue p-4 rounded-sm ">
//     {
//       (popularServices || []).map((service, index) => (
//         <li key={index} className={`pb-1 w-full ${popularServices.length-1 == index?'':'border-b-[.2px] border-b-gray-500/10'} `}>
//           <Link to={`/services/${service.id}`}>
//             {service.name}
//           </Link>
//         </li>
//       ))
//     }
//   </ul>
// )}
