import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  TablePagination,
} from "@mui/material";
import { ChevronLeft, ChevronRight, MoreVert } from "@mui/icons-material";

const mockUsers = Array.from({ length: 10 }, (_, i) => ({
  name: "Lawal Halima",
  role: ["User", "Artisan", "Admin", "Moderator", "Contributor", "Subscriber", "Guest", "Super Admin"][i % 8],
  email: "lawalhalima017@gmail.com",
  phone: "08136401829",
  dateJoined: "04 July 2025",
}));

export default function UserTable() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => setPage(newPage);

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {["Name", "Role", "Email", "Phone No", "Date Joined", ""].map((col) => (
                <TableCell key={col} style={{ backgroundColor: "#f5f5f5", padding: "8px" }}>
                  <Typography fontWeight="medium">{col}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, idx) => (
                <TableRow key={idx} hover style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <TableCell style={{ padding: "8px" }}>{user.name}</TableCell>
                  <TableCell style={{ padding: "8px" }}>{user.role}</TableCell>
                  <TableCell style={{ padding: "8px" }}>{user.email}</TableCell>
                  <TableCell style={{ padding: "8px" }}>{user.phone}</TableCell>
                  <TableCell style={{ padding: "8px" }}>{user.dateJoined}</TableCell>
                  <TableCell align="right" style={{ padding: "8px" }}>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={mockUsers.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
        labelDisplayedRows={({ from, to, count }) => `Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`}
        backIconButtonProps={{ disabled: page === 0 }}
        nextIconButtonProps={{ disabled: page >= Math.ceil(mockUsers.length / rowsPerPage) - 1 }}
        style={{ backgroundColor: "#f5f5f5", padding: "8px", display: "flex", justifyContent: "space-between" }}
        ActionsComponent={() => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => setPage(page - 1)} disabled={page === 0}>
              <ChevronLeft />
            </IconButton>
            <span>{`Page ${page + 1} of ${Math.ceil(mockUsers.length / rowsPerPage)}`}</span>
            <IconButton
              onClick={() => setPage(page + 1)}
              disabled={page >= Math.ceil(mockUsers.length / rowsPerPage) - 1}
            >
              <ChevronRight />
            </IconButton>
          </div>
        )}
      />
    </Paper>
  );
}