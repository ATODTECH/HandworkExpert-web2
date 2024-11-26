import { Box } from "@mui/material";

export default function Reviews() {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 0px 0px #00000040",
        border: "1px solid #E2E2E2",
        borderRadius: 1,
        padding: "20px 30px",
        lineHeight: 1.1,
        color: "#292626",
      }}
    >
      <p style={{ fontSize: 12 }}>No reviews found</p>
    </Box>
  );
}
