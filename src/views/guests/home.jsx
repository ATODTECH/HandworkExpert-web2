import SEOHead from "@/src/components/SEOHead";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataLoading from "@/src/components/data-loading";
import { getCategories, getServiceCategories } from "@/src/store/userStore";
import TopBarN from "@/src/components/guests/topbarN";
import HowItWorksN from "./components/HowItWorksN";
import ServicesWeOfferN from "./components/ServicesWeOfferN";
import JoinAsArtisanN from "./components/JoinAsArtisanN";
import TrustFactorsSectionN from "./components/TrustFactorsSectionN";
import ClientTestimonialsSectionN from "./components/ClientTestimonialsSectionN";
import ProHandyAppSectionN from "./components/ProHandyAppSectionN";
import ProfessionalsNetworkSectionN from "./components/ProfessionalsNetworkSectionN";
import FooterN from "@/src/components/guests/footerN";
import HeroSectionN from "./components/HeroSectionN";

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
          <TopBarN popularServices={popularServices} />
          <HeroSectionN />
          <HowItWorksN />
          <ServicesWeOfferN />
          <JoinAsArtisanN />
          <TrustFactorsSectionN />
          <ClientTestimonialsSectionN />
          <ProHandyAppSectionN />
          <ProfessionalsNetworkSectionN />
          <FooterN />
        </div>
      )}
    </div>
  );
}
