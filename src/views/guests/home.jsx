import SEOHead from "@/src/components/SEOHead";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataLoading from "@/src/components/data-loading";
import { getCategories, getServiceCategories } from "@/src/store/userStore";
import {TopBar} from "@/src/components/guests/topbar";
import {HowItWorks} from "./components/HowItWorks";
import {ServicesWeOffer} from "./components/ServicesWeOffer";
import {JoinAsArtisan} from "./components/JoinAsArtisan";
import {TrustFactorsSection} from "./components/TrustFactorsSection";
import { ClientTestimonialsSection } from "./components/ClientTestimonialsSection";
import {ProHandyAppSection} from "./components/ProHandyAppSection";
import {ProfessionalsNetworkSection} from "./components/ProfessionalsNetworkSection";
import {Footer} from "@/src/components/guests/footer";
import {HeroSection} from "./components/HeroSection";

export default function Home() {
  const { categories, service_category } = useSelector((state) => state.user);

  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getServiceCategories());
  }, []);

  return (
    <div>
      <SEOHead
        title="Book Trusted Artisans Near You"
        description="Handwork Expert connects you with verified, skilled artisans for plumbing, electrical work, painting, carpentry, and more. Book trusted professionals near you in minutes."
        canonical="/"
      />
      {categories && !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <div>
          <TopBar popularServices={popularServices} />
          <HeroSection />
          <HowItWorks />
          <ServicesWeOffer />
          <JoinAsArtisan />
          <TrustFactorsSection />
          <ClientTestimonialsSection />
          <ProHandyAppSection />
          <ProfessionalsNetworkSection />
          <Footer />
        </div>
      )}
    </div>
  );
}
