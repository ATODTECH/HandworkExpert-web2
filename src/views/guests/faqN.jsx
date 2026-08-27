import FooterN from "@/src/components/guests/footerN"
import TopBarN from "@/src/components/guests/topbarN"
import SEOHead from "@/src/components/SEOHead"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import ForegroundFAQIndex from "./components/faq/foreground";
import ContentFAQIndex from "./components/faq/content";

const FAQHomeIndex = () => {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <SEOHead
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about Handwork Expert — how to book artisans, payment methods, verification, and more."
        canonical="/faq"
      />
      <TopBarN popularServices={popularServices} />
      <ForegroundFAQIndex />
      <ContentFAQIndex />
      <FooterN />
    </div>
  )
}

export default FAQHomeIndex