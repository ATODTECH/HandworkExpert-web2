import {
  CalendarMonth,
  EditNoteOutlined,
  Email,
  EmailOutlined,
  MapOutlined,
  PhoneOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { Box, Grid, Stack, Button } from "@mui/material";
import { useState } from "react";
import NewAddress from "./new-address";

export default function Address() {
  const details = [
    {
      icon: MapOutlined,
      value: "20386 Donovans Rd, Georgetown, Delaware(DE)",
    },
    {
      icon: PhoneOutlined,
      value: "+1 23455246337",
    },
    {
      icon: EmailOutlined,
      value: "alexandramcpherson@email.com",
    },
  ];
  const [dialog, setDialog] = useState(false);
  return (
    <Box>
      <h4 style={{ color: "#101928", fontSize: 20, fontWeight: "600" }}>
        Address Information
      </h4>
      <p
        style={{
          color: "#667185",
          fontSize: 12,
          marginTop: -10,
        }}
      >
        All your addresses can be found here. You can create new ones or edit
        old ones
      </p>
      <br />

      <Grid container spacing={2}>
        {[1, 2].map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Box
              sx={{
                borderRadius: 1,
                padding: "20px 25px",
                backgroundColor: "#F6F6F7",
              }}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <h5
                  style={{
                    color: "#101928",
                    fontWeight: "600",
                    fontSize: 17,
                    flexGrow: 1,
                  }}
                >
                  Address {index + 1}
                </h5>
                <div>
                  <Button
                    onClick={() => setDialog(true)}
                    variant="text"
                    sx={{ textTransform: "none", color: "#EB5017" }}
                    startIcon={<EditNoteOutlined />}
                  >
                    Edit
                  </Button>
                </div>
                <div>
                  <Button
                    variant="text"
                    sx={{ textTransform: "none", color: "#344054" }}
                    startIcon={<DeleteOutlined />}
                  >
                    Delete
                  </Button>
                </div>
              </Stack>
              {details.map((item, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  sx={{ my: 1 }}
                >
                  <div>
                    <item.icon sx={{ color: "#F56630" }} />
                  </div>
                  <div
                    style={{ marginTop: -6, color: "#667185", fontSize: 15 }}
                  >
                    {item.value}
                  </div>
                </Stack>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <br />

      <Button
        variant="contained"
        disableElevation
        onClick={() => setDialog(true)}
        sx={{
          backgroundColor: "#F5F6F6",
          border: "1px solid #E2E4E5",
          textTransform: "capitalize",
          color: "#0E1B28",
          "&:hover": {
            color: "white",
          },
        }}
      >
        Add New Address
      </Button>

      <NewAddress dialog={dialog} setDialog={setDialog} />
    </Box>
  );
}
