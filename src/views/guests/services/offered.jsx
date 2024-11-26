import { Box } from "@mui/material";

export default function Offered({ activeService }) {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 0px 0px #00000040",
        border: "1px solid #E2E2E2",
        borderRadius: 2,
        padding: "20px 20px",
        lineHeight: 1.1,
        color: "#292626",
      }}
    >
      <h6
        style={{
          fontWeight: "600",
          fontSize: 22,
        }}
      >
        Service Details
      </h6>

      <Box
        sx={{
          padding: "10px 10px",
          border: "1px solid #E2E2E2",
          borderRadius: 1,
        }}
      >
        <ul className="service-list" style={{ lineHeight: 2 }}>
          {activeService?.services?.map((item, index) => (
            <li key={index} style={{ fontSize: 13, color: "#292626" }}>
              {item}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
