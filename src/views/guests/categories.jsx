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
export default function Categories() {
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
      <TopBarN />
      <ForegroundCatIndex />
      <CategoriesContentIndex />









      {/* <CssBaseline />
      <Box
        sx={{
          mt: 8,
          backgroundColor: "white",
          padding: "15px 10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#292626",
                }}
              >
                Categories
              </h3>
              <p
                style={{
                  color: "#858585",
                }}
              >
                <Link to={"/"}>Home</Link> / Categories
              </p>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          px: 2,
          py: 10,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={10} md={10} lg={10}>
            {list.map((item, index) => (
              <Grid
                key={index}
                sx={{
                  boxShadow: "0px 0px 4px 2px rgba(230, 230, 230, 0.25)",
                  backgroundColor: "white",
                  borderRadius: 1,
                  padding: "10px 20px",
                  mb: 5,
                }}
                container
                spacing={2}
                alignItems={"center"}
                // minHeight={300}
              >
                <Grid item xs={12} sm={6} lg={6} md={6}>
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <div>
                      <img
                        className="w3-image"
                        src={UserImage}
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                      />
                    </div>
                    <div
                      style={{
                        color: "#292626",
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      {item.title}
                    </div>
                  </Stack>

                  <p
                    style={{
                      color: "#292626",
                      fontSize: 14,
                    }}
                  >
                    ATOD TECH offers a diverse array of expertly crafted
                    services, seamlessly merging creativity merging creativity.
                  </p>
                  <br />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    width={"100%"}
                    spacing={2}
                    style={{
                      backgroundColor: "#172153",
                      borderRadius: 10,
                      padding: "15px 20px",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <div
                        key={index}
                        style={{
                          padding: "0 10px",
                          borderRight: "1px solid white",
                          minWidth: 140,
                        }}
                      >
                        <span
                          style={{
                            color: "white",
                            fontWeight: "500",
                            fontSize: 14,
                          }}
                        >
                          No Service
                        </span>
                      </div>
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={1} lg={1} md={1} />
                <Grid item xs={12} sm={5} lg={5} md={5}>
                  <ServiceList image={item.image} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <div style={{ margin: "-70px 0 30px" }}>
        <Stack
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          sx={{}}
        >
          <Pagination
            sx={
              {
                //   width:200
              }
            }
            count={2}
            color="primary"
            renderItem={(item) => (
              <PaginationItem
                sx={{
                  borderRadius: 1,
                  border: "1px solid #CACACA",
                  backgroundColor: "white",
                  color: "#BABABA",
                }}
                slots={{ previous: ChevronLeft, next: ChevronRight }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
      <br />
      <br /> */}
      <FooterN />
    </div>
  );
}
