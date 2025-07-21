import { Box, Grid } from "@mui/material";
import Appointments from "./appointment";
import RecentBooking from "./recent-booking";
import Stats from "./stat";

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Stats />
          <br />
          <Appointments />
          <br />
          <RecentBooking />
        </Grid>
        {/* Right section removed based on your instruction */}
      </Grid>
    </Box>
  );
}
