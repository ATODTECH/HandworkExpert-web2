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

const supportData = [
  { reportId: "#R2016", reporter: "Samuel Festus", issueType: "Artisan Misconduct", date: "06, July 2025", status: "Resolved" },
  { reportId: "#R2016", reporter: "Olowo Tobi", issueType: "Payment Dispute", date: "06, July 2025", status: "Resolved" },
  { reportId: "#R2016", reporter: "Ann Mary", issueType: "Artisan Misconduct", date: "06, July 2025", status: "Pending" },
  { reportId: "#R2016", reporter: "Oyin Deb", issueType: "Payment Dispute", date: "06, July 2025", status: "Resolved" },
  { reportId: "#R2016", reporter: "Rebecca Ojo", issueType: "Artisan Misconduct", date: "06, July 2025", status: "Pending" },
  { reportId: "#R2016", reporter: "Ayomiku Kunle", issueType: "Payment Dispute", date: "06, July 2025", status: "Resolved" },
  { reportId: "#R2016", reporter: "Gods Will", issueType: "Artisan Misconduct", date: "06, July 2025", status: "Pending" },
  { reportId: "#R2016", reporter: "Amaka Uzo", issueType: "Payment Dispute", date: "06, July 2025", status: "Resolved" },
  { reportId: "#R2016", reporter: "Marvina Ugo", issueType: "Payment Dispute", date: "06, July 2025", status: "Pending" },
];

const statusColor = {
  Resolved: "success",
  Pending: "error",
};

const SupportPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  const handleChangePage = (_, newPage) => setPage(newPage);

  return (
    <Box p={3}>
      <Typography variant="body2" color="text.secondary">Admin / Dashboard</Typography>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Support
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
            <MenuItem value="Resolved">Resolved</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
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
                <TableCell><b>Report ID</b></TableCell>
                <TableCell><b>Reporter</b></TableCell>
                <TableCell><b>Issue Type</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell align="right"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {supportData
                .filter((row) => !filter || row.status === filter)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.reportId}</TableCell>
                    <TableCell>{row.reporter}</TableCell>
                    <TableCell>{row.issueType}</TableCell>
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
          count={supportData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
          style={{ backgroundColor: "#f5f5f5", padding: "8px", display: "flex", justifyContent: "space-between" }}
          ActionsComponent={() => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => setPage(page - 1)} disabled={page === 0}>
                <MoreVertIcon />
              </IconButton>
              <span>{`Page ${page + 1} of ${Math.ceil(supportData.length / rowsPerPage)}`}</span>
              <IconButton
                onClick={() => setPage(page + 1)}
                disabled={page >= Math.ceil(supportData.length / rowsPerPage) - 1}
              >
                <MoreVertIcon />
              </IconButton>
            </div>
          )}
        />
      </Paper>
    </Box>
  );
};

export default SupportPage;