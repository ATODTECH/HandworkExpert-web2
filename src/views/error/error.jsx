import { Link, useNavigate } from "react-router-dom";
import Logo from "@/src/assets/img/logo.png"
import error from "@/src/assets/img/not-found.webp"
import { ArrowBack, KeyboardArrowDown } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import PopUpRegister from "@/src/components/guests/become-professional";

const Error = () => {
  const navigate = useNavigate();
  const popUpRef = useRef(null)
  const [isPopUp, setPopUp] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setPopUp(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" bg-[#FAFAFA] h-screen w-full overflow-y-auto">
      <header id="topbar" className={"fixed top-0 backdrop-blur-[6px] w-screen max-w-[1920px] py-3 px-4 sm:px-16 xl:px-28 z-20 shadow-md bg-primary-white"}>
        <nav className="flex flex-row w-full items-center justify-between ">
          <Link to={"/"} className="outline-0">
            <img
              src={Logo}
              draggable={false}
              style={{ height: 40 }}
              className="w-auto "
              alt="Logo"
            />
          </Link>
          {/* Destop nav */}
          {/*......... replace this div below with the commented div:hidden................................... */}
          <div className="w-[21%] py-6"></div>
          {/* <div className="hidden lg:flex items-center font-semibold text-[1rem] leading-6 gap-6 ">
            <button role="link" className="flex items-center py-4 px-3 gap-0.5 text-[#101928]">
              Log in
              <KeyboardArrowDown />
            </button>
            <div className=" relative" ref={popUpRef}>
             <button role="link" className="flex items-center py-3 px-3 bg-secondary-blue rounded-sm text-primary-white gap-0.5 hover:bg-secondary-orange shadow-[0px_1px_1px_#000000fa] " 
             onClick={() => setPopUp(!isPopUp)}>
                Sign up
                <KeyboardArrowDown />
              </button>
              {isPopUp && (
                <PopUpRegister key={"popUp"} position={{x:"right-0", y:" mt-5"}} setPop={()=> setPopUp(false)} />
              )}
            </div>
          </div> */}
        </nav>
      </header>
      <div className="flex flex-col justify-center items-center flex-1 h-full text-[#101828] relative px-4 pt-20 sm:px-16 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center gap-4 mb-2">
          <div className=" h-auto w-15 425xl:w-18 sm:w-20 mb-4">
            <img src={error} alt="Error" 
            className=" w-full h-full object-cover" />
          </div>
          <h1 className=" font-bold text-[1.75rem] leading-7 425xl:text-[2rem] sm:text-[2.75rem] 425xl:leading-[100%]">Error just occurred</h1>
          <p className="text-sm 425xl:text-[1rem] text-[#475467]">Sorry, an error just occurred on this page</p>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} type="button"
            className=" flex gap-2 items-center bg-primary-white text-secondary-orange rounded-sm font-semibold text-xs 425xl:text-sm py-3 px-4 outline-0 ring-0 cursor-pointer border border-[#F99E78] shadow-[0px_1px_2px_#1018280D]">
              <ArrowBack fontSize="small" />
              Go back
            </button>
            <button onClick={()=>window.location.reload()} type="button"
            className=" bg-secondary-blue text-primary-white rounded-sm font-semibold text-xs 425xl:text-sm py-3 px-4 outline-0 ring-0 cursor-pointer border border-secondary-blue">
              Reload page
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Error