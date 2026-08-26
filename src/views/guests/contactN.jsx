import FooterN from "@/src/components/guests/footerN";
import TopBarN from "@/src/components/guests/topbarN";
import SEOHead from "@/src/components/SEOHead"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import ForegroundContactIndex from "./components/contact/foreground";
import ContentContactIndex from "./components/contact/content";

const ContactHomeIndex = () => {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  return (
    <div className="">
      <SEOHead
        title="Contact Us"
        description="Get in touch with the Handwork Expert support team. We're here to help with questions, feedback, or anything about your bookings and artisan services."
        canonical="/contact"
      />
      <TopBarN popularServices={popularServices} />
      <ForegroundContactIndex />
      <ContentContactIndex />
      <FooterN />
    </div>
  )
}

export default ContactHomeIndex