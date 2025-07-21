import { LocationOn, LocationOnOutlined } from "@mui/icons-material";
import { Box, Stack, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <Box
      sx={{
        border: "1px solid #E4E7EC",
        borderRadius: 1.5,
        padding: "12px 20px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h6
          style={{
            color: "#000000",
            fontWeight: "700",
            fontSize: 15,
          }}
        >
          Activity
        </h6>
        <Button
          component={Link}
          to={"/artisan/earnings"}
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: 14,
            color: "#F2461D",
          }}
          color="primary"
        >
          View All
        </Button>
      </Stack>
      <p
        style={{
          fontSize: 12,
          color: "#A3A7B1",
          fontWeight: "600",
        }}
      >
        Today
      </p>

      <Box>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            spacing={2}
            sx={{ mb: 3 }}
            alignItems={"center"}
          >
            <div>
              <LocationOn sx={{ fontSize: 18, color: "#0F172A" }} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div
                style={{ color: "#344054", fontWeight: "700", fontSize: 14 }}
              >
                Jaydon Korsgaard
              </div>
              <span
                style={{ color: "#475367", fontWeight: "400", fontSize: 12 }}
              >
                18 Iwaya Rd, Yaba 101245, Lagos
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
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
