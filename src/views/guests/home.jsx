import {
  Box,
  CssBaseline,
  Grid,
  Stack,
  Button,
  Chip,
  Avatar,
  Pagination,
  PaginationItem,
} from "@mui/material";
import Topbar from "../../components/guests/topbar";
import BgImage from "../../assets/img/home-bg.png";
import { useEffect, useMemo, useState } from "react";
import ServiceImage from "../../assets/img/service-image.png";
import ServiceImage2 from "../../assets/img/service-image-3.png";
import ServiceImag3 from "../../assets/img/service-image-3.png";
import ServiceImag4 from "../../assets/img/service-image-4.png";
import ServiceImag5 from "../../assets/img/service-image-5.png";
import {
  ArrowBack,
  ArrowForward,
  Circle,
  LocationOnOutlined,
  TvOutlined,
} from "@mui/icons-material";
import UserImage from "../../assets/img/user.png";
import ServiceList from "./service-list";
import Footer from "../../components/guests/footer";
import { useDispatch, useSelector } from "react-redux";
import DataLoading from "../../components/data-loading";
import { getCategories, getServiceCategories } from "../../store/userStore";
import { Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ServicesWeOffer from "./components/ServicesWeOffer";
import JoinAsArtisan from "./components/JoinAsArtisan";
import TrustFactorsSection from "./components/TrustFactorsSection";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection";
import ProHandyAppSection from "./components/ProHandyAppSection";
import ProfessionalsNetworkSection from "./components/ProfessionalsNetworkSection";

export default function Home() {
  const [search, setSearch] = useState("");
  const [address, setAddress] = useState(
    "3 Agbo Akomolafe St, Isheri Olofin Lagos"
  );

  const { categories, service_category } = useSelector((state) => state.user);

  const popularServices = useMemo(() => {
    let data = service_category || [];
    return data.slice(0, 7);
  }, [service_category]);

  const categoryList = useMemo(() => categories || [], [categories]);
  const servicesImage = [
    ServiceImage,
    ServiceImage2,
    ServiceImag3,
    ServiceImag4,
    ServiceImag5,
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getServiceCategories());
  }, []);

  return (
    <Box>
      {categories && !service_category ? (
        <DataLoading mt={50} />
      ) : (
        <Box>
          <Topbar popularServices={popularServices} />
          <CssBaseline />
          <HeroSection />
          <HowItWorks />
          <ServicesWeOffer />
          <JoinAsArtisan />
          <TrustFactorsSection />
          <ClientTestimonialsSection />
          <ProHandyAppSection />
          <ProfessionalsNetworkSection />
          <Footer />
        </Box>
      )}
    </Box>
  );
}
