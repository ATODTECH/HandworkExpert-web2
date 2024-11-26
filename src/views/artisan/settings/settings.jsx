import { Box, Stack, Button, Grid } from "@mui/material";
import { useState } from "react";
import Profile from "./profile";
import Password from "./password";
import Payment from "./payment";
import Notifications from "./notifications";

export default function Settings() {
  const tabs = [
    { title: "Profile", value: "Profile" },
    { title: "Password", value: "Password" },

    { title: "Payment", value: "Payment" },
    { title: "Notifications", value: "Notifications" },
  ];
  const [active, setActive] = useState("Profile");

  return (
    <Box>
      <h6
        style={{
          color: "#101928",
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        Settings
      </h6>
      <div
        style={{
          color: "#667185",
          fontSize: 13,
        }}
      >
        Take a look at your policies and the new policy to see what is covered
      </div>
      <br />

      <Stack direction={"row"} width={"100%"} alignItems={"center"} spacing={1}>
        <div>
          <Stack direction={"row"} spacing={0} alignItems={"center"}>
            {tabs.map((item, index) => (
              <div key={index}>
                <Button
                  onClick={() => setActive(item.value)}
                  variant="text"
                  sx={{
                    color: active === item.value ? "#F56630" : "#344054",
                    borderBottom:
                      active === item.value
                        ? "1px solid #F56630"
                        : "1px solid #E4E7EC",
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: "500",
                    borderRadius: 0,
                    px: 3,
                  }}
                >
                  {item.title}
                </Button>
              </div>
            ))}
          </Stack>
        </div>
        <div style={{ flexGrow: 1 }} />
      </Stack>

      <br />
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          {active === "Profile" && <Profile />}
          {active === "Password" && <Password />}
          {active === "Payment" && <Payment />}
          {active === "Notifications" && <Notifications />}
        </Grid>
      </Grid>
    </Box>
  );
}
