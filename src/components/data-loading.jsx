import { Box, CircularProgress } from "@mui/material";

export default function DataLoading({ mt }) {
  return (
    <Box sx={{ mt: mt || 16, textAlign:'center' }}>
      <CircularProgress size={30} color="primary" />
    </Box>
  );
}
