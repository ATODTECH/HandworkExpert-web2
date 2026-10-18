import SEOHead from "@/src/components/SEOHead";
import { Link } from "react-router-dom";
import {Category1, Category2, Category3, Category4, Category5} from "@/src/assets"
// import ServiceList from "./service-list";
import {TopBar} from "@/src/components/guests/topbar";
import {Footer} from "@/src/components/guests/footer";
import ForegroundCatIndex from "./components/categories/foreground";
import CategoriesContentIndex from "./components/categories/content";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import DataLoading from "@/src/components/data-loading";

export default function Categories() {
  const { service_category } = useSelector((state) => state.user);
  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const list = [
    { title: "Tech/IT", image: Category1 },
    { title: "Legal", image: Category2 },
    { title: "Environmental Services", image: Category3 },
    { title: "Automotive", image: Category4 },
    { title: "Agriculture", image: Category5 },
  ];

  return (
    <div className="flex flex-col justify-end bg-primary-white min-h-screen">
      <SEOHead
        title="Browse Service Categories"
        description="Explore all service categories on Handwork Expert — from plumbing and electrical to carpentry, painting, and more. Find the right artisan for any job."
        canonical="/categories"
      />
      { !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <>
          <TopBar popularServices={popularServices} />
          <ForegroundCatIndex />
          <CategoriesContentIndex />
          <Footer />
        </>
      )}
    </div>
  );
}
