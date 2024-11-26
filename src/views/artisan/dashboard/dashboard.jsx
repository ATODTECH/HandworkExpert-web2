import { Box, Grid } from "@mui/material";
import Activity from "./activity";
import Appointments from "./appointment";
import RecentBooking from "./recent-booking";
import Stats from "./stat";
import Payment from "./payment";

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
        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Activity/>
            <br/>
            <Payment/>
        </Grid>
      </Grid>
    </Box>
  );
}
