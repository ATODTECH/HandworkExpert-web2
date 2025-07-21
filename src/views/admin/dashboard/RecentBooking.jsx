import {
  MoreVertOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Box, Stack, Button, IconButton, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonAction from "./button-action";
import UserImage from "../../../assets/img/artisan.png";

export default function RecentUsers() {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography
          sx={{
            color: "#3F4343",
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          Recent Users
        </Typography>
        <Button
          component={Link}
          to={"/admin/users"}
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: 14,
            color: "#3F4343",
          }}
        >
          View All
        </Button>
      </Stack>

      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            fontWeight: 600,
            fontSize: 13,
            color: "#667085",
            mb: 1,
            px: 2,
          }}
        >
          <Box width="10%">Name</Box>
          <Box width="20%">Email</Box>
          <Box width="15%">Phone</Box>
          <Box width="15%">Status</Box>
          <Box width="20%">Date Created</Box>
          <Box width="20%">Actions</Box>
        </Stack>

        {[1, 2, 3, 4, 5].map((item, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 1.5,
              padding: "12px 20px",
              mb: 1.5,
            }}
          >
            <Box width="10%" display="flex" alignItems="center" gap={1}>
              <img
                src={UserImage}
                alt="user"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
              <Typography fontSize={13} fontWeight={600} color="#475367">
                Jaydon Korsgaard
              </Typography>
            </Box>
            <Box width="20%">
              <Typography fontSize={13} color="#475367">
                jaydon@email.com
              </Typography>
            </Box>
            <Box width="15%">
              <Typography fontSize={13} color="#475367">
                +234 901 234 5678
              </Typography>
            </Box>
            <Box width="15%">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#ECFDF3",
                  textTransform: "none",
                  color: "#027A48",
                  fontWeight: 500,
                }}
              >
                Active
              </Button>
            </Box>
            <Box width="20%">
              <Typography fontSize={13} color="#475367">
                Apr 12, 2023 | 09:32AM
              </Typography>
            </Box>
            <Box width="20%" display="flex" gap={1}>
              <IconButton
                size="small"
                sx={{
                  borderRadius: 1,
                  border: "1px solid #F0F2F5",
                }}
              >
                <VisibilityOutlined sx={{ fontSize: 17, color: "#000000" }} />
              </IconButton>
              <ButtonAction />
            </Box>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
