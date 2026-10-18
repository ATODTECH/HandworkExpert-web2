import { Box, Stack } from "@mui/material";
import { useMemo } from "react";
import formatAmount from "../../../../hooks/formatAmount";

export default function Stats() {
  const stats = useMemo(
    () => [
      { title: "Your Services", value: "1" },
      { title: "Active Bookings", value: "8" },
      { title: "Completed Bookings", value: "24" },
      { title: "Earnings", value: "240478" },
    ],
    []
  );
  return (
    <Box sx={{ backgroundColor: "#F6F6F7", padding: "25px 30px" }}>
      <h5 style={{ color: "#101928", fontWeight: "600", fontSize: 20 }}>
        Your Dashboard
      </h5>
      <p
        style={{
          color: "#F2461D",
          fontWeight: "400",
          fontSize: 13,
          marginTop: -8,
        }}
      >
        Welcome Oluwakemi, Today is a good day.
      </p>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 2 }}
      >
        {stats.map((item, index) => (
          <div key={index}>
            <span style={{ color: "#8E909D", fontWeight: "500", fontSize: 14 }}>
              {item.title}
            </span>
            <br />
            <b style={{ color: "#1E338A", fontWeight: "700", fontSize: 18 }}>
              {formatAmount(item.value)}
            </b>
          </div>
        ))}
      </Stack>
    </Box>
  );
}
