import { Box } from "@mui/material";

export default function Overview({activeService}) {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 0px 0px #00000040",
        border: "1px solid #E2E2E2",
        borderRadius: 2,
        padding: "20px 30px",
        lineHeight: 1.1,
        color: "#292626",
      }}
    >
      <h6
        style={{
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        Service Details
      </h6>

      <p style={{ fontSize: 14 }}>
        {activeService?.description}
      </p>
      <p style={{ fontSize: 14 }}>
        Call or WhatsApp: <b>{activeService?.contact}</b>
      </p>
     
    </Box>
  );
}
