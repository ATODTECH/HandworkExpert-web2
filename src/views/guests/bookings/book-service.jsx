import { Box, Grid, Stack, IconButton, Button } from "@mui/material";
import Topbar from "../../../components/guests/topbar";
import { act, useCallback, useMemo, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  LocationOn,
  LocationOnOutlined,
  PhoneInTalkOutlined,
  Star,
  Circle,
  Check,
} from "@mui/icons-material";
import CreateSchedule from "./create-schedule";
import BasicInfo from "./basic-info";
import Payment from "./payment";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import DetailsImage from "../../../assets/img/details.png";
import UserImage from "../../../assets/img/user.png";
import Promotions from "../promotion";
import Footer from "../../../components/guests/footer";
import { useSelector } from "react-redux";
export default function BookService() {
  const { activeService } = useSelector((state) => state.user);
  const [steps, setSteps] = useState([
    {
      title: "Create Schedule",
      value: "create",
      content: "Provide your basic information and address",
    },
    {
      title: "Basic Information",
      value: "info",
      content: "How can the artisan contact you.",
    },
    {
      title: "Payment Options",
      value: "payment",
      content: "Choose how you want to pay",
    },
  ]);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const active = useMemo(() => steps[index].value, [steps, index]);
  const handlePrev = useCallback(() => {
    if (active === "create") return navigate(-1);
    setIndex((prev) => prev - 1);
  }, [active, navigate]);

  const handleNext = useCallback(
    (run = "") => {
      if (typeof run === "function") {
        run();
      }
      if (index !== 2) setIndex((prev) => prev + 1);
    },
    [index, setIndex]
  );
  return (
    <Box>
      <Box>
        <Topbar />
        <Box
          sx={{
            pt: 16,
            px: 2,
            pb: 8,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={1} md={1} lg={2}></Grid>
            <Grid item xs={12} sm={10} md={10} lg={8}>
              <Box>
                <h3
                  style={{
                    color: "#292626",
                    fontWeight: "700",
                    textAlign: "center",
                    fontSize: 30,
                  }}
                >
                  Book Service
                </h3>
                <br />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={0}
                  width={"100%"}
                  sx={{
                    padding: "0 30px",
                  }}
                >
                  {steps.map((item, current) => (
                    <div
                      key={current}
                      style={{
                        flexGrow: current == 2 ? 0 : 1,
                      }}
                    >
                      <div>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          width={"100%"}
                        >
                          <div>
                            <IconButton
                              sx={{
                                backgroundColor:
                                  current < index
                                    ? "#E7F6EC"
                                    : item.value === active
                                    ? "#EFF5FF"
                                    : "#F9FAFB",
                              }}
                            >
                              {current < index ? (
                                <Check
                                  sx={{ color: "#0F973D", fontSize: 10 }}
                                />
                              ) : (
                                <Circle
                                  sx={{
                                    color:
                                      item.value === active
                                        ? "#1F37AE"
                                        : "#EAECF0",
                                    fontSize: 10,
                                  }}
                                />
                              )}
                            </IconButton>
                          </div>
                          <div
                            style={{
                              backgroundColor:
                                current < index ? "#0F973D" : "#EAECF0",
                              height: 1,
                              flexGrow: 1,
                              display: current == 2 ? "none" : "flex",
                            }}
                          ></div>
                        </Stack>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          maxWidth: 200,
                          color: item.value === active ? "#1F37AE" : "#475467",
                          marginLeft: -70,
                          marginTop: 10,
                        }}
                      >
                        <div style={{ fontSize: 12, fontWeight: "700" }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: 10, fontWeight: "400" }}>
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </Stack>

                <br />
                <br />
                <br />

                <Grid container spacing={4}>
                  <Grid item xs={12} sm={8} md={8} lg={8}>
                    {active === "create" && (
                      <CreateSchedule
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        active={active}
                      />
                    )}
                    {active === "info" && (
                      <BasicInfo
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        active={active}
                      />
                    )}
                    {active === "payment" && (
                      <Payment
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        active={active}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} lg={4} md={4}>
                    <Box
                      sx={{
                        boxShadow: "0px 0px 4px 2px #E6E6E640",
                        borderRadius: "18px 18px 8px 8px",
                        backgroundColor: "white",
                        mt: 2,
                      }}
                    >
                      <div className="w3-display-container">
                        <img
                          src={DetailsImage}
                          className="w3-image"
                          style={{
                            width: "100%",
                            height: 270,
                            borderRadius: "8px 8px 0 0 ",
                          }}
                        />
                        <div
                          className="w3-display-bottommiddle"
                          style={{ width: "100%", padding: "0px 10px 10px" }}
                        >
                          <Stack
                            spacing={1}
                            direction={"row"}
                            width={"100%"}
                            alignItems={"center"}
                          >
                            <div>
                              <img
                                src={UserImage}
                                className="w3-image"
                                style={{ width: 40, height: 40 }}
                              />
                            </div>
                            <div
                              style={{
                                fontSize: 13,
                                color: "white",
                                fontWeight: "700",
                                flexGrow: 1,
                              }}
                            >
                              ₦ {activeService?.price_range}
                            </div>
                            <div>
                              <Button
                                disableElevation
                                sx={{
                                  textTransform: "none",
                                  borderRadius: 50,
                                  height: 27,
                                  width: 100,
                                  fontSize: 12,
                                  color: "white",
                                  backgroundColor: "#F56F46",
                                }}
                                variant="contained"
                              >
                                Negotiable
                              </Button>
                            </div>
                          </Stack>
                        </div>
                      </div>
                      <div style={{ padding: "10px 15px 15px" }}>
                        <Link to={`/service-details/${1}`}>
                          <h6
                            style={{
                              fontSize: 13,
                              fontWeight: "600",
                              color: "#292626",
                            }}
                          >
                           {activeService?.artisan}
                          </h6>
                        </Link>

                        <Stack
                          spacing={0.2}
                          direction={"row"}
                          width={"100%"}
                          alignItems={"center"}
                        >
                          {[1, 2, 3, 4, 5].map((item, index) => (
                            <Star
                              key={index}
                              sx={{ fontSize: 20, color: "#D9D9D9" }}
                            />
                          ))}
                        </Stack>
                        <br />
                        <Stack
                          spacing={1}
                          direction={"row"}
                          width={"100%"}
                          alignItems={"center"}
                        >
                          <IconButton
                            aria-label="call"
                            sx={{
                              color: "#1E1E1E",
                              border: "1px dashed #1E1E1E",
                              width: 28,
                              height: 28,
                            }}
                          >
                            <PhoneInTalkOutlined sx={{ fontSize: 18 }} />
                          </IconButton>
                          <div
                            style={{
                              fontSize: 12,
                              color: "#4F4F4F",
                              flexGrow: 1,
                            }}
                          >
                            xxxxxxxxx19
                          </div>

                          <div
                            style={{
                              fontSize: 12,
                              color: "#4F4F4F",
                            }}
                          >
                            {activeService?.address}
                          </div>
                          <IconButton
                            aria-label="call"
                            sx={{
                              color: "#1E1E1E",
                              border: "1px dashed #1E1E1E",
                              width: 28,
                              height: 28,
                            }}
                          >
                            <LocationOn sx={{ fontSize: 14 }} />
                          </IconButton>
                        </Stack>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 15 }} style={{ backgroundColor: "white" }}>
            <Promotions />

            <br />
            <br />
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
