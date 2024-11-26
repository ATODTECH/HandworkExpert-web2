import { Box, Radio, Stack, InputAdornment, Button } from "@mui/material";
import { useState } from "react";
import CssTextField from "../../../components/cssTextField";
import {
  CalendarMonth,
  EditNoteOutlined,
  Email,
  EmailOutlined,
  MapOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import BookAction from "./book-action";

export default function Payment({ handlePrev, handleNext, active }) {
  const [option, setOption] = useState("escrow");
  const pref = [
    {
      title: "Escrow Payment",
      content:
        "Make a down payment into an account and pay once service is accepted",
      value: "escrow",
    },
    {
      title: "Cash / At your door step",
      content: "Pay once the artisan gets to the door",
      value: "cash",
    },
  ];
  const details = [
    {
      icon: MapOutlined,
      value: "20386 Donovans Rd, Georgetown, Delaware(DE)",
    },
    {
      icon: PhoneOutlined,
      value: "+1 23455246337",
    },
    {
      icon: EmailOutlined,
      value: "alexandramcpherson@email.com",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #E4E7EC",
          borderRadius: 1,
          padding: "30px 25px",
        }}
      >
        <h6
          style={{
            fontSize: 15,
            color: "#101928",
            fontWeight: "600",
          }}
        >
          Payment Options
        </h6>
        <h6
          style={{
            fontSize: 12,
            color: "#101928",
            fontWeight: "600",
          }}
        >
          Payment With
        </h6>
        <div>
          {pref.map((item, index) => (
            <Stack direction={"row"} spacing={1} key={index} sx={{ my: 1 }}>
              <div>
                <Radio
                  size="small"
                  checked={item.value === option}
                  value={item.value}
                  onChange={({ target: { checked } }) => setOption(item.value)}
                  sx={{ color: "#1F37AE" }}
                />
              </div>
              <div style={{ lineHeight: 0.3, marginTop: 1 }}>
                <p
                  style={{
                    color: "#101928",
                    fontWeight: "500",
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "#667185",
                    fontWeight: "400",
                    fontSize: 10,
                  }}
                >
                  {item.content}
                </p>
              </div>
            </Stack>
          ))}
        </div>
      </Box>
      <br />
      <Box
        sx={{
          borderRadius: 1,
          padding: "30px 25px",
          backgroundColor: "#F6F6F7",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <h5 style={{ color: "#101928", fontWeight: "600", fontSize: 20 }}>
            Delivery Information
          </h5>
          <div>
            <Button
              variant="text"
              sx={{ textTransform: "none", color: "#EB5017" }}
              startIcon={<EditNoteOutlined />}
            >
              Edit
            </Button>
          </div>
        </Stack>

        <p style={{ color: "#344054", fontWeight: "600", fontSize: 16 }}>
          Alexandra McPherson
        </p>
        {details.map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            sx={{ my: 1 }}
          >
            <div>
              <item.icon sx={{ color: "#F56630" }} />
            </div>
            <div style={{ marginTop: -6, color: "#667185", fontSize: 15 }}>
              {item.value}
            </div>
          </Stack>
        ))}
      </Box>
      <br />
      <br />

      <BookAction
        handlePrev={handlePrev}
        handleNext={handleNext}
        active={active}
      />
    </Box>
  );
}
