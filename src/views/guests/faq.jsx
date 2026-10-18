import {Footer} from "@/src/components/guests/footer"
import {TopBar} from "@/src/components/guests/topbar"
import SEOHead from "@/src/components/SEOHead"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import ForegroundFAQIndex from "./components/faq/foreground";
import ContentFAQIndex from "./components/faq/content";
import DataLoading from "@/src/components/data-loading";

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
      { !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <>
          <TopBar popularServices={popularServices} />
          <ForegroundFAQIndex />
          <ContentFAQIndex />
          <Footer />
        </>
      )}
    </div>
  )
}

export default FAQHomeIndex