import {
  Drawer,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/src/assets/img/logo.png"
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";

export const TopBar = ({ popularServices }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const popUpRef = useRef(null)

  // use this links instead of remPopularServices
  const remPopularServices = [
    {
      id: 'fashion',
      name: "Fashion And Beauty",
    }, {
      id: 'export',
      name: "Export Services",
    }, {
      id: 'property',
      name: "Home And Property",
    }, {
      id: 'logistics',
      name: "Logistics And Warehousing",
    }, {
      id: 'agriculture',
      name: "Agriculture",
    }, {
      id: 'automotive',
      name: "Automotive",
    }, {
      id: 'tech-IT',
      name: "Tech/IT",
    },
  ]

  useEffect(() => {
    function handleClickOutside(e) {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setPopUp(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const links = [
    { title: "About Us", route: "/about-us" },
    { title: "Contact Us", route: "/contact" },
    { title: "FAQs", route: "/faq" },
  ];

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

  const { pathname } = useLocation();


  useEffect(() => {
    window.addEventListener("scroll", function (ev) {
      const topbar = document.getElementById("topbar");

      const distanceToTop =
        window.scrollY + topbar?.getBoundingClientRect()?.top;
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
            style={{ width: "100%", height: 40 }}
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
            className={`flex justify-between items-center w-full px-4 py-2 bg-none cursor-pointer text-left border-none ${pathname === "/categories" ? "text-secondary-orange" : "text-primary-text"}`}
          >
            <span>Categories</span>
            {servicesOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </button>
        </li>

        {servicesOpen && (
          <ul className="list-none m-0 p-0" >
            {(remPopularServices || []).map((service, index) => (
              <li key={index}>
                <Link
                  to={`/categories/${service.id}`}
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

      {/*......... replace this div below with the commented div:hidden................................... */}
      {/* {!user ? (
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
      )} */}
    </div>
  );


  return (
    <>
      <header id="topbar" className={`fixed top-0 backdrop-blur-[6px] w-screen max-w-[1920px] py-3 px-4 sm:px-16 xl:px-28 z-20 shadow-md ${isScrolled?'bg-secondary-blue':''} `}>
        <nav className="flex flex-row w-full items-center justify-between ">
          <Link to={"/"} className="outline-0 w-[21%]">
            <img
              src={Logo}
              draggable={false}
              style={{ height: 40 }}
              className="w-auto "
              alt="Logo"
            />
          </Link>
          {/* Destop nav */}
          <div className={"hidden lg:flex items-center text-sm font-medium gap-8 text-primary-white"}>
            <Link to={"/"} className={` ${pathname==="/"?'text-secondary-orange font-bold':''}`}>Home</Link>
            <Link to={"/categories"} className={`flex items-center gap-1 ${pathname==="/categories"? 'text-secondary-orange font-bold':''}`}>
              <span className="">Categories</span>
            </Link>
            {links.map((link) =>
              <Link key={link.title.replace(" ", "")} to={link.route} className={` ${pathname===link.route?'text-secondary-orange font-bold':''}`}>{link.title}</Link>
            )}
          </div>
          {/*......... replace this div below with the commented div:hidden................................... */}
          <div className="w-[21%] py-6"></div>
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
