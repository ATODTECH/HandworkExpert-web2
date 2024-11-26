import {
  Box,
  CssBaseline,
  Grid,
  Stack,
  Button,
  Pagination,
  PaginationItem,
  IconButton,
} from "@mui/material";
import Topbar from "../../components/guests/topbar";
import { Link, useParams } from "react-router-dom";
import DetailsImage from "../../assets/img/details.png";
import UserImage from "../../assets/img/user.png";
import {
  ChevronLeft,
  ChevronRight,
  LocationOn,
  LocationOnOutlined,
  PhoneInTalkOutlined,
  Star,
} from "@mui/icons-material";
import Footer from "../../components/guests/footer";
import { useEffect, useState } from "react";
import Promotions from "./promotion";
import { useDispatch, useSelector } from "react-redux";
import DataLoading from "../../components/data-loading";
import {
  getServiceCategories,
  getServiceList,
  resetService,
  updateActiveService,
} from "../../store/userStore";
export default function CategoryDetails() {
  const { id } = useParams();
  const [currency, setCurrency] = useState("₦");
  const [category, setCategory] = useState("");

  const { service_list, service_category } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceList(id));
    dispatch(getServiceCategories());
  }, []);

  useEffect(() => {
    dispatch(getServiceList(id));
 
  }, [id]);
  return (
    <Box
      sx={{
        backgroundColor: "#F9F7F7",
        minHeight: "100vh",
      }}
    >
      <Topbar popularServices={service_category} />
      <CssBaseline />

      {!service_list ? (
        <Box sx={{ py: 20 }}>
          <DataLoading mt={20} />
        </Box>
      ) : (
        <Box>
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
                      textTransform: "capitalize",
                    }}
                  >
                    {service_list?.name}
                  </h3>
                  <p
                    style={{
                      color: "#858585",
                    }}
                  >
                    <Link style={{ textTransform: "capitalize" }} to={"/"}>
                      {service_list?.name}
                    </Link>{" "}
                    / Services
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
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  width={"center"}
                  justifyContent={"flex-end"}
                  spacing={1}
                >
                  <div>
                    <select
                      value={currency}
                      onChange={({ target: { value } }) => setCurrency(value)}
                      style={{
                        color: "white",

                        backgroundColor: "#B6B6B6",
                        border: 0,
                        outline: "none",
                        padding: "3px 10px",
                        fontSize: 13,
                      }}
                    >
                      <option value={"₦"}>₦</option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={category}
                      onChange={({ target: { value } }) => setCategory(value)}
                      style={{
                        color: "white",

                        backgroundColor: "#B6B6B6",
                        border: 0,
                        outline: "none",
                        padding: "3px 10px",
                        fontSize: 13,
                      }}
                    >
                      <option value={""}>Sub Category</option>
                    </select>
                  </div>
                </Stack>
                <br />
                <Grid container spacing={4}>
                  {service_list?.client?.map((item, index) => (
                    <Grid key={index} item xs={12} md={6} sm={6} lg={4}>
                      <Link
                        onClick={() => {
                          dispatch(
                            updateActiveService({
                              ...item,
                              name: service_list?.name,
                              description: service_list?.description,
                            })
                          );
                        }}
                        to={`/service-details/${item.artisan_id}`}
                      >
                        <Box
                          sx={{
                            boxShadow: "0px 0px 4px 2px #E6E6E640",
                            borderRadius: "18px 18px 8px 8px",
                            backgroundColor: "white",
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
                              style={{
                                width: "100%",
                                padding: "0px 10px 10px",
                              }}
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
                                  ₦ {item.price_range}
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
                            <Link to={`/service-details/${id}`}>
                              <h6
                                style={{
                                  fontSize: 13,
                                  fontWeight: "600",
                                  color: "#292626",
                                }}
                              >
                                {item?.artisan}
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
                                {item.address}
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
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <div style={{ margin: "-40px 0 30px" }}>
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
        </Box>
      )}

      <br />
      <div style={{ backgroundColor: "white" }}>
        <br />
        <br />
        <br />
        <Promotions />

        <br />
        <br />
      </div>

      <br />
      <Footer />
    </Box>
  );
}
