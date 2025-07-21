import { Box, Grid, Button } from "@mui/material";
import Activity from "./Activity";
import Appointments from "./Appointments";
import RecentBooking from "./RecentBooking";
import Stats from "./stat";
import Payment from "./Payment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function Dashboard() {
  return (
    <Box sx={{ padding: "25px 30px", backgroundColor: "#F6F6F7", minHeight: "100vh" }}>
      <Grid container spacing={2}>

        {/* Appointments table */}
        <Grid item xs={12}>
          <Appointments />
        </Grid>
        
        {/* Top card e.g., Approve Artisan or Total Revenue */}
        <Grid item xs={12}>
          <Stats />
        </Grid>

        {/* Calendar button aligned right */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" startIcon={<CalendarTodayIcon />}>
            Calendar
          </Button>
        </Grid>

        {/* Recent bookings table */}
        <Grid item xs={12}>
          <RecentBooking />
        </Grid>
      </Grid>
    </Box>
  );
}