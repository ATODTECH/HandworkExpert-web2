import { Button, Box } from "@mui/material";

export default function Appointments() {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button variant="contained" sx={{ textTransform: 'none' }}>
        Approve Artisan
      </Button>
    </Box>
  );
}
