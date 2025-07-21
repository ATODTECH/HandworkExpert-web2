// src/pages/admin/UserManagement.jsx
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import UserTable from "./UserTable";

export default function UserManagement() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
        <Typography variant="body2" color="text.secondary">Admin / Dashboard</Typography>
          <Typography variant="h5" fontWeight="bold">User Management</Typography>
        </Box>
        <Button variant="contained" color="primary">Approve Artisan</Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 2 }}>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Filter By</InputLabel>
          <Select label="Filter By" defaultValue="">
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="moderator">Moderator</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined">Filter</Button>
      </Box>

      <Card>
        <CardContent sx={{ p: 0 }}>
          <UserTable />
        </CardContent>
      </Card>
    </Box>
  );
}
