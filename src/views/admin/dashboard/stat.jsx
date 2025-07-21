import { Box, Stack } from "@mui/material";
import { useMemo } from "react";
import formatAmount from "../../../hooks/formatAmount";

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
      
      <p
        style={{
          color: "#2e2a29ff",
          fontWeight: "400",
          fontSize: 9,
          marginTop: -8,
        }}
      >
        Admin/Dashboard
      </p>

      <h5 style={{ color: "#101928", fontWeight: "600", fontSize: 20 }}>
        Dashboard
      </h5>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        sx={{ mt: 2 }}
      >

        {/* Total Revenue Card */}
        <div
          style={{
            backgroundColor: "#1E338A",
            borderRadius: 10,
            padding: "20px 25px",
            width: "100%",
            color: "#fff",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <span
            style={{ fontWeight: "500", fontSize: 14, color: "#C3D1FF" }}
          >
            Total Revenue
          </span>
          <br />
          <b style={{ fontWeight: "700", fontSize: 20 }}>
            ₦3,672,500
          </b>
        </div>
        
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: "20px 25px",
              width: "100%",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
            }}
          >
            <span
              style={{ color: "#8E909D", fontWeight: "500", fontSize: 14 }}
            >
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
