import { Box, Stack, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function Activity() {
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
          Payments
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
      <br />
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
              <Avatar
                sx={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#101928",

                  backgroundColor: "#ECEEEE",
                }}
              >
                <span>OM</span>
              </Avatar>
            </div>
            <div style={{ color: "#899192", fontSize: 13, paddingRight:20 }}>
              You were paid. You received payment from Escrow
            </div>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
