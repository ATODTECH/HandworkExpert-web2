import { Link, useNavigate } from "react-router-dom";
import Logo from "@/src/assets/img/logo.png"
import notFoundIcon from "@/src/assets/img/not-found.png"
import { ArrowBack, KeyboardArrowDown } from "@mui/icons-material";

const NotFound = () => {
  const navigate = useNavigate();

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
          <div className="hidden lg:flex items-center font-semibold text-[1rem] leading-6 gap-6 ">
            <Link to={"/login"}className="flex items-center py-4 px-3 gap-0.5 text-[#101928]">
              Log in
              <KeyboardArrowDown />
            </Link>
            <Link to={"/signup"} className="flex items-center py-3 px-3 bg-secondary-blue rounded-sm text-primary-white gap-0.5 hover:bg-secondary-orange shadow-[0px_1px_1px_#000000fa] ">
              Sign up
              <KeyboardArrowDown />
            </Link>
          </div>
        </nav>
      </header>
      <div className="flex flex-col justify-center items-center flex-1 h-full text-[#101828] relative px-4 pt-20 sm:px-16 xl:px-28">
        <div className="flex flex-col justify-center items-center text-center gap-4 mb-2">
          <div className=" h-auto w-15 425xl:w-18 sm:w-20 mb-4">
            <img src={notFoundIcon} alt="404" 
            className=" w-full h-full object-cover" />
          </div>
          <h1 className=" font-bold text-[1.75rem] leading-7 425xl:text-[2rem] sm:text-[2.75rem] 425xl:leading-[100%]">We can’t find that page</h1>
          <p className="text-sm 425xl:text-[1rem] text-[#475467]">Sorry, the page you are looking for doesn't exist or has been moved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} type="button"
            className=" flex gap-2 items-center bg-primary-white text-secondary-orange rounded-sm font-semibold text-xs 425xl:text-sm py-3 px-4 outline-0 ring-0 cursor-pointer border border-[#F99E78] shadow-[0px_1px_2px_#1018280D]">
              <ArrowBack fontSize="small" />
              Go back
            </button>
            <Link to={'/'}>
              <button type="button"
              className=" bg-secondary-blue text-primary-white rounded-sm font-semibold text-xs 425xl:text-sm py-3 px-4 outline-0 ring-0 cursor-pointer border border-secondary-blue">
                Take me home
              </button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default NotFound