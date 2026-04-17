import SEOHead from "../../components/SEOHead";
import {
  Circle,
  LocationOn,
  PhoneInTalkOutlined,
  Star,
} from "@mui/icons-material";
import { Box, Grid, Stack, IconButton, Rating, Button } from "@mui/material";
import ServiceDetailsImage from "../../assets/img/service-details.png";
import UserImage from "../../assets/img/service-user.png";
import { useMemo, useState } from "react";
import Overview from "./services/overview";
import Offered from "./services/offered";
import Reviews from "./services/reviews";
import Topbar from "../../components/guests/topbar";
import Footer from "../../components/guests/footer";
import ReportProvider from "./services/report";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import formatAmount from "../../hooks/formatAmount";
export default function ServiceDetails() {
  const { activeService, service_category } = useSelector(
    (state) => state.user
  );
  const options = [
    { title: "Overview", value: "overview" },
    { title: "Services Offered", value: "services" },
    { title: "Reviews", value: "reviews" },
  ];
  const [active, setActive] = useState("services");
  const [dialog, setDialog] = useState(false);

  const workdays = useMemo(() => {
    let data = [];

    for (let item in activeService.workdays) {
      data.push({
        title: item?.replaceAll("_", " "),
        value: activeService.workdays[item] ? "Yes" : "No",
      });
    }

    return data;
  }, [activeService]);
  const TabView = useMemo(() => {
    if (active === "overview") return Overview;
    if (active === "services") return Offered;
    if (active === "reviews") return Reviews;
    return <div>Unknown tab</div>;
  }, [active]);
  return (
    <Box>
      <SEOHead
        title={activeService?.business_name ? `${activeService.business_name} — Artisan Profile` : "Artisan Profile"}
        description={`Book ${activeService?.business_name || "this artisan"} on Handwork Expert. View services offered, reviews, pricing, and availability.`}
        canonical={`/service-details/${activeService?.id}`}
        type="profile"
      />
      <Topbar popularServices={service_category} />
      <Box
        sx={{
          pt: 16,
          px: 2,
          pb: 8,
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <Box>
              <h3
                style={{
                  color: "#292626",
                  fontWeight: "700",
                  fontSize: 35,
                }}
              >
                {activeService?.desc}
              </h3>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <IconButton
                  aria-label="call"
                  sx={{
                    color: "#1E1E1E",
                    border: "1px dashed #1E1E1E",
                    width: 22,
                    height: 22,
                  }}
                >
                  <LocationOn sx={{ fontSize: 14 }} />
                </IconButton>
                <div
                  style={{
                    fontSize: 16,
                    color: "#4F4F4F",
                  }}
                >
                  {activeService?.address}
                </div>
              </Stack>
              <br />
              <Rating
                defaultValue={1}
                max={5}
                readOnly
                value={activeService?.average_rating}
                emptyIcon={
                  <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <br />
              <Button
                variant="contained"
                disableElevation
                sx={{
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#F5B946",
                  mt: 2,
                  height: 30,
                  borderRadius: 1.5,
                }}
              >
                {activeService?.name}
              </Button>
              <br />
              <br />
              <Box>
                <img
                  src={ServiceDetailsImage}
                  className="w3-image"
                  style={{
                    width: "100%",
                    minHeight: 400,
                  }}
                />
              </Box>
              <br />
              <Box>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  {options.map((item, index) => (
                    <Button
                      onClick={() => setActive(item.value)}
                      variant="contained"
                      key={index}
                      disableElevation
                      sx={{
                        textTransform: "none",
                        color: active === item.value ? "white" : "#292626",
                        backgroundColor:
                          active === item.value ? "#F56F46" : "white",
                        border: "1px solid #F56F46",
                        "&:hover": {
                          backgroundColor: "primary",
                          color: "white",
                        },
                      }}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Stack>
                <br />
                <TabView activeService={activeService} />
                <br />

                <h6
                  style={{ color: "#292626", fontSize: 16, fontWeight: "600" }}
                >
                  Additional Services
                </h6>
                <Box
                  sx={{
                    boxShadow: "0px 0px 0px 0px #00000040",
                    border: "1px solid #E2E2E2",
                    borderRadius: 1,
                    padding: "10px 15px",
                    lineHeight: 1.1,
                    color: "#292626",
                  }}
                >
                  {activeService?.services?.map((item, index) => (
                    <p key={index} style={{ fontSize: 12 }}>
                      {item?.name}
                    </p>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <Box
              sx={{
                backgroundColor: "#F3F3F3",
                padding: "10px 30px 20px",
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <h6
                style={{
                  fontSize: 25,
                  fontWeight: "700",
                }}
              >
                ₦{formatAmount(activeService?.base_charge)} - ₦
                {formatAmount(activeService?.cap_charge)}
              </h6>
              <Button
                component={Link}
                to={`/book-service/${activeService?.artisan_id}`}
                variant="contained"
                disableElevation
                fullWidth
                sx={{
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "#F56F46",

                  height: 40,
                  fontWeight: "700",
                  fontSize: 18,

                  borderRadius: 1.5,
                }}
              >
                Book Service
              </Button>
            </Box>
            <br />

            <Box
              sx={{
                border: "1px solid #E2E2E2",
                padding: "15px 20px 30px",
                borderRadius: 1,
              }}
            >
              <h6 style={{ fontSize: 14, color: "#292626", fontWeight: "600" }}>
                Service Provider
              </h6>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                width={"100%"}
                sx={{
                  borderBottom: "1px solid #D7D7D7",
                  pb: 2,
                  mb: 2,
                }}
              >
                <div>
                  <img
                    src={UserImage}
                    className="w3-image"
                    style={{ width: 70, height: 70, borderRadius: "50%" }}
                  />
                </div>
                <div style={{ color: "#292626", lineHeight: 1.4 }}>
                  <b style={{ fontSize: 13 }}>
                    {activeService?.first_name} {activeService?.last_name}
                  </b>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <div>
                      <Circle sx={{ color: "#0FC04B", fontSize: 13 }} />
                    </div>
                    <div style={{ fontSize: 12, color: "#4F4F4F" }}>Online</div>
                  </Stack>
                  <div style={{ fontSize: 12, color: "#4F4F4F" }}>
                    {/* Member Since Sep 2024 */}
                  </div>
                </div>
              </Stack>
              <Box>
                <Stack
                  spacing={1}
                  direction={"row"}
                  width={"100%"}
                  alignItems={"center"}
                  sx={{
                    backgroundColor: "#F3F3F3",
                    borderRadius: 1,
                    px: 2,
                    py: 2.5,
                  }}
                >
                  <IconButton
                    aria-label="call"
                    sx={{
                      color: "#1E1E1E",
                      border: "1px dashed #1E1E1E",
                      width: 18,
                      height: 18,
                    }}
                  >
                    <PhoneInTalkOutlined sx={{ fontSize: 11 }} />
                  </IconButton>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#4F4F4F",
                      flexGrow: 1,
                    }}
                  >
                    {activeService?.contact}
                  </div>
                </Stack>
                <Button
                  onClick={() => setDialog(true)}
                  fullWidth
                  variant="contained"
                  disableElevation
                  sx={{
                    textTransform: "none",
                    color: "#CB0909",
                    backgroundColor: "#FFC6C6",
                    fontWeight: "500",
                    height: 36,
                    borderRadius: 1,
                    fontSize: 12,
                  }}
                >
                  Report Provider
                </Button>
              </Box>
            </Box>
            <br />

            <Box
              sx={{
                boxShadow: "0px 0px 0px 0px #00000040",
                border: "1px solid #E2E2E2",
                borderRadius: 1,
                padding: "10px 18px 20px",
                lineHeight: 1.1,
                color: "#292626",
              }}
            >
              <h6 style={{ color: "#292626", fontSize: 14, fontWeight: "600" }}>
                Service Availability
              </h6>
              {workdays.map((item, index) => (
                <p key={index} style={{ fontSize: 12, textAlign: "left" }}>
                  <b>{item.title}:</b> <span>{item.value}</span>
                </p>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <ReportProvider dialog={dialog} setDialog={setDialog} />

      <Footer />
    </Box>
  );
}
