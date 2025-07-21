// src/pages/admin/BookingTable.jsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const rows = [
  {
    id: 1,
    customer: "Jane Doe",
    artisan: "John Smith",
    service: "Haircut",
    date: "2025-07-19",
    status: "confirmed",
  },
  {
    id: 2,
    customer: "Mark Green",
    artisan: "Alice Brown",
    service: "Nail Fix",
    date: "2025-07-20",
    status: "pending",
  },
];

export default function BookingTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Artisan</TableCell>
          <TableCell>Service</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.customer}</TableCell>
            <TableCell>{row.artisan}</TableCell>
            <TableCell>{row.service}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <Tooltip title="Edit">
                <IconButton size="small" color="primary">
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton size="small" color="error">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
