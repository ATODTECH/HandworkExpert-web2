import { Box, Stack, Button, Rating, Chip, IconButton } from "@mui/material";
import { useState } from "react";
import HistoryImage from "../../../assets/img/history-image.png";
import { Add, MoreVert, Remove } from "@mui/icons-material";
import CustomPagination from "../../../components/customPagination";

export default function BookingHistory() {
  const tabs = [
    {
      title: "All Bookings",
      value: "all-bookings",
      counter: "",
      show_counter: false,
    },
    { title: "Upcoming", value: "upcoming", counter: "0", show_counter: true },
    {
      title: "Cancelled ",
      value: "cancelled",
      counter: "",
      show_counter: false,
    },
    {
      title: "Completed",
      value: "completed",
      counter: "",
      show_counter: false,
    },
  ];
  const [active, setActive] = useState("all-bookings");
  return (
    <Box>
      <h4 style={{ color: "#101928", fontSize: 20, fontWeight: "600" }}>
        Booking History
      </h4>
      <p
        style={{
          color: "#667185",
          fontSize: 12,
          marginTop: -10,
        }}
      >
        All your addresses can be found here. You can create new ones or edit
        old ones
      </p>
      <br />
      <Box>
        <Stack direction={"row"} spacing={0} alignItems={"center"}>
          {tabs.map((item, index) => (
            <div key={index}>
              <Button
                onClick={() => setActive(item.value)}
                variant="text"
                sx={{
                  color: active === item.value ? "#F56630" : "#344054",
                  borderBottom:
                    active === item.value
                      ? "1px solid #F56630"
                      : "1px solid #E4E7EC",
                  textTransform: "none",
                  fontSize: 13,
                  fontWeight: "500",
                  borderRadius: 0,
                  px: 3,
                }}
              >
                {item.title}
              </Button>
            </div>
          ))}
        </Stack>
        <br />

        {[1, 2, 3, 4, 5].map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #E4E7EC",
              padding: "20px 15px",
              borderRadius: 1.7,
              mb: 3,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              width={"100%"}
            >
              <div>
                <img src={HistoryImage} style={{ width: 120, height: 60 }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h6
                  style={{
                    color: "#344054",
                    fontSize: 13,
                    fontWeight: "600",
                    marginBottom: 0,
                  }}
                >
                  Cottage Medicare Hospital
                </h6>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  sx={{ mt: -0.8 }}
                >
                  <div
                    style={{
                      color: "#667185",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    5.0
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <Rating readOnly value={5} size="small" fontSize="small" />
                  </div>
                  <div
                    style={{
                      color: "#667185",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    (70)
                  </div>
                </Stack>
              </div>
              <div>
                <span
                  style={{
                    backgroundColor: "#E7F6EC",
                    color: "#036B26",
                    fontSize: 10,
                    padding: "5px 13px",
                    borderRadius: 6,
                    fontWeight: "500",
                  }}
                >
                  Completed
                </span>
              </div>
              <div
                style={{
                  color: "#344054",
                  fontSize: 10,
                  fontWeight: "400",
                  margin: "0 30px",
                }}
              >
                Apr 12, 2023 <span style={{ color: "#D0D5DD" }}>|</span> 09:32AM
              </div>
              <div>
                <IconButton
                  aria-label=""
                  size="small"
                  sx={{ border: "1px solid #F0F2F5", borderRadius: 1 }}
                >
                  <MoreVert sx={{ fontSize: 13 }} />
                </IconButton>
              </div>
            </Stack>
          </Box>
        ))}

        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{
            borderTop: "1px solid #E4E7EC",
            px: 2,
            py: 3,
          }}
        >
          <div style={{ fontSize: 12, color: "black", fontWeight: "600" }}>
            Page 1 of 30
          </div>
          <div
            style={{
              textAlign: "center",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomPagination />
          </div>
          <div>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Remove />}
              sx={{
                textTransform: "none",
                color: "#344054",
                fontWeight: "600",
                fontSize: 11,
                border: "1px solid #D0D5DD",
              }}
            >
              Previous
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              size="small"
              endIcon={<Add />}
              sx={{
                textTransform: "none",
                color: "#344054",
                fontWeight: "600",
                fontSize: 11,
                border: "1px solid #D0D5DD",
              }}
            >
              Next
            </Button>
          </div>
        </Stack>
      </Box>
    </Box>
  );
}
