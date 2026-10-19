import {Footer} from "@/src/components/guests/footer";
import {TopBar} from "@/src/components/guests/topbar";
import SEOHead from "@/src/components/SEOHead"
import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import {ForegroundContactIndex} from "./components/contact/foreground";
import {ContentContactIndex} from "./components/contact/content";
import DataLoading from "@/src/components/data-loading";
import { useOnload } from "@/hooks/use-onload";
import { WidgetError } from "@/src/shared/widget-error";

const ContactHomeIndex = () => {
  const { isPending, isError, refetch, isRefetching } = useOnload()
  const { service_category } = useSelector((state) => state.user);
  const isMounted = useRef(false);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);
  
  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;
  }, [])


  if (isPending) return <DataLoading mt={50} />
  if (isError) {
    return (
      <div className="flex flex-col flex-1 h-screen justify-center items-center px-5">
        <section className="flex flex-col justify-self-center space-y-4 rounded-xl border border-[#E2E8F0] bg-primary-white p-6 w-full max-w-lg">
          <WidgetError message="Couldn't load the Contact us page." onRetry={() => refetch()} isRetrying={isRefetching} />
        </section>
      </div>
    )
  }

  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <SEOHead
        title="Contact Us"
        description="Get in touch with the Handwork Expert support team. We're here to help with questions, feedback, or anything about your bookings and artisan services."
        canonical="/contact"
      />
      { !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <>
          <TopBar popularServices={popularServices} />
          <ForegroundContactIndex />
          <ContentContactIndex />
          <Footer />
        </>
      )}
    </div>
  )
}

export default ContactHomeIndex