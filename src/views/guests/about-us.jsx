import { useSelector } from "react-redux";
import SEOHead from "../../components/SEOHead";
import { useMemo } from "react";
import {TopBar} from "@/src/components/guests/topbar";
import {Footer} from "@/src/components/guests/footer";
import ForegroundAboutUsIndex from "./components/about-us/foreground";
import AboutUsContIndex from "./components/about-us/content";
import DataLoading from "@/src/components/data-loading";


export default function AboutUs() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  
  return (
    <div className="flex flex-col justify-end bg-primary-white min-h-screen">
      <SEOHead
        title="About Us"
        description="Learn about Handwork Expert — our mission to connect users with trusted, verified artisans across Nigeria for reliable, professional home and business services."
        canonical="/about-us"
      />
      { !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <>
          <TopBar popularServices={popularServices} />
          <ForegroundAboutUsIndex />
          <AboutUsContIndex />
          <Footer />
        </>
      )}
    </div>
  );
}
