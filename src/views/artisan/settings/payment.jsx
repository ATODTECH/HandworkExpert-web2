import {
  AccountBalanceOutlined,
  CalendarMonth,
  DeleteOutlined,
  EditNoteOutlined,
  Email,
  EmailOutlined,
  MapOutlined,
  PersonOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { Box, Grid, Stack, Button } from "@mui/material";
import { useState } from "react";


export default function Payment() {
  const details = [
    {
      icon: PersonOutlined,
      value: "Oluwadamilola Blaq",
    },
    {
      icon: PhoneOutlined,
      value: "0123456789",
    },
    {
      icon: AccountBalanceOutlined,
      value: "United Bank of Africa",
    },
  ];
  const [dialog, setDialog] = useState(false);
  return (
    <Box>
   

      <Grid container spacing={2}>
        {[1].map((item, index) => (
          <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
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
                 Payment Information
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
                    <item.icon sx={{ color: "#F56630", fontSize:16 }} />
                  </div>
                  <div
                    style={{ marginTop: -6, color: "#667185", fontSize: 13 }}
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

       

      
    </Box>
  );
}
