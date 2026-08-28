import SEOHead from "@/src/components/SEOHead";
import {
  Box,
  CssBaseline,
  Grid,
  Stack,
  Button,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import Category1 from "@/src/assets/img/category-1.png";
import Category2 from "@/src/assets/img/category-2.png";
import Category3 from "@/src/assets/img/category-3.png";
import Category4 from "@/src/assets/img/category-4.png";
import Category5 from "@/src/assets/img/category-5.png";
import ServiceList from "./service-list";
import UserImage from "../../assets/img/user.png";
import {
  ArrowBack,
  ArrowForward,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import TopBarN from "@/src/components/guests/topbarN";
import FooterN from "@/src/components/guests/footerN";
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
          <TopBarN popularServices={popularServices} />
          <ForegroundCatIndex />
          <CategoriesContentIndex />
          <FooterN />
        </>
      )}
    </div>
  );
}
