import {
  LocationOnOutlined,
  MoreVertOutlined,
  Visibility,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Box, Stack, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonAction from "./button-action";

export default function Appointments() {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h6
          style={{
            color: "#3F4343",
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          Your Appointment
        </h6>
        <Button
          component={Link}
          to={"/artisan/calendar"}
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: 14,
            color: "#3F4343",
          }}
          color="primary"
        >
          View All
        </Button>
      </Stack>
 
      <Box sx={{mt:1}}>
        {[1, 2].map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 1.5,
              padding: "12px 20px",
              mb: 3,
            }}
          >
            <div>
              <b style={{ color: "#344054", fontWeight: "600", fontSize: 14 }}>
                AUG
              </b>
              <br />
              <span
                style={{ color: "#475367", fontWeight: "400", fontSize: 12 }}
              >
                12
              </span>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <LocationOnOutlined sx={{ color: "#667085", fontSize: 16 }} />
                <div
                  style={{ color: "#475367", fontWeight: "600", fontSize: 14 }}
                >
                  18 Iwaya Rd, Yaba 101245, Lagos
                </div>
              </Stack>
              <span
                style={{ color: "#F2461D", fontWeight: "500", fontSize: 12 }}
              >
                Jaydon Korsgaard
              </span>
            </div>
            <div>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#FEF6E7",
                  textTransform: "none",
                  color: "#865503",
                }}
                disableElevation
              >
                Pending
              </Button>
            </div>
            <div>
              <IconButton
                size="small"
                aria-label=""
                sx={{
                  borderRadius: 1,
                  border: "1px solid #F0F2F5",
                }}
              >
                <VisibilityOutlined sx={{ fontSize: 17, color: "#000000" }} />
              </IconButton>
            </div>
            <div>
              <ButtonAction />
            </div>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
