import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box>
      <Outlet />
    </Box>
  );
}
 