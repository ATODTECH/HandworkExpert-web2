import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
  Paper,
  Select,
  MenuItem,
  Button,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from "@mui/icons-material/FilterList";

const bookingData = [
  { user: "Lawal Halima", artisan: "Samuel (Carpenter)", service: "Furniture Repair", date: "06, July 2025", status: "Completed" },
  { user: "Lawal Halima", artisan: "Olawal (Hair Stylist)", service: "Furniture Repair", date: "06, July 2025", status: "Completed" },
  { user: "Lawal Halima", artisan: "Festus (Plumber)", service: "Kitchen Plumbing", date: "06, July 2025", status: "Ongoing" },
  { user: "Lawal Halima", artisan: "Rebecca (Fashion Designer)", service: "Fashion Design", date: "06, July 2025", status: "Completed" },
  { user: "Lawal Halima", artisan: "Olawal (Hair Stylist)", service: "Styling of Hair", date: "06, July 2025", status: "Ongoing" },
  { user: "Lawal Halima", artisan: "Ayomikun (Painter)", service: "Shop Painting", date: "06, July 2025", status: "Completed" },
  { user: "Lawal Halima", artisan: "Samuel (Carpenter)", service: "Furniture Repair", date: "06, July 2025", status: "Cancelled" },
  { user: "Lawal Halima", artisan: "Festus (Plumber)", service: "Kitchen Plumbing", date: "06, July 2025", status: "Completed" },
  { user: "Lawal Halima", artisan: "Rebecca (Fashion Designer)", service: "Fashion Design", date: "06, July 2025", status: "Ongoing" },
];

const statusColor = {
  Completed: "success",
  Ongoing: "warning",
  Cancelled: "error",
};

const BookingsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  const handleChangePage = (_, newPage) => setPage(newPage);

  return (
    <Box p={3}>
      <Typography variant="body2" color="text.secondary">Admin / Dashboard</Typography>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Bookings
      </Typography>

      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Stack direction="row" spacing={1}>
          <Select
            size="small"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            displayEmpty
            sx={{ width: 150 }}
          >
            <MenuItem value="">Filter By</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Ongoing">Ongoing</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
          <Button variant="outlined" startIcon={<FilterListIcon />}>
            Filter
          </Button>
        </Stack>
      </Box>

      <Paper elevation={1}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>User</b></TableCell>
                <TableCell><b>Artisan</b></TableCell>
                <TableCell><b>Service</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell align="right"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingData
                .filter((row) => !filter || row.status === filter)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>{row.artisan}</TableCell>
                    <TableCell>{row.service}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={statusColor[row.status]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={bookingData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
        />
      </Paper>
    </Box>
  );
};

export default BookingsPage;
