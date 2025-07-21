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

const artisanData = [
  { name: "Lawal Halima", skill: "Fashion Designer", rating: 4.8, jobs: 50, status: "Approved" },
  { name: "Lawal Halima", skill: "Carpenter", rating: 4.8, jobs: 15, status: "Approved" },
  { name: "Lawal Halima", skill: "Plumber", rating: 4.8, jobs: 5, status: "Suspended" },
  { name: "Lawal Halima", skill: "Fashion Designer", rating: 4.8, jobs: 25, status: "Approved" },
  { name: "Lawal Halima", skill: "Plumber", rating: 4.8, jobs: 2, status: "Suspended" },
  { name: "Lawal Halima", skill: "Fashion Designer", rating: 4.8, jobs: 17, status: "Approved" },
  { name: "Lawal Halima", skill: "Carpenter", rating: 4.8, jobs: 0, status: "Rejected" },
  { name: "Lawal Halima", skill: "Plumber", rating: 4.8, jobs: 0, status: "Approved" },
  { name: "Lawal Halima", skill: "Carpenter", rating: 4.8, jobs: 41, status: "Approved" },
];

const statusColor = {
  Approved: "success",
  Suspended: "warning",
  Rejected: "error",
};

const ArtisansPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  const handleChangePage = (_, newPage) => setPage(newPage);

  return (
    <Box p={3}>
      <Typography variant="body2" color="text.secondary">Admin / Dashboard</Typography>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Artisans
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
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Suspended">Suspended</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
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
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Skill</b></TableCell>
                <TableCell><b>Rating</b></TableCell>
                <TableCell><b>Jobs done</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell align="right"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artisanData
                .filter((row) => !filter || row.status === filter)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.skill}</TableCell>
                    <TableCell>{row.rating}★</TableCell>
                    <TableCell>{row.jobs}</TableCell>
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
          count={artisanData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
        />
      </Paper>
    </Box>
  );
};

export default ArtisansPage;
