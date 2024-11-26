import { Box, Stack, Button, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import EscrowImage from "../../../assets/img/escrow.png";
import EarningDetails from "./earning-details";

//   import Details from "./details";

export default function Calendar() {
  const [dialog, setDialog] = useState(false);

  return (
    <Box>
      <h6
        style={{
          color: "#101928",
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        Earnings
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
      <Box>
        <h6 style={{ color: "06 July 2023", fontWeight: "400", fontSize: 13 }}>
          06 July 2023
        </h6>
        {[1, 2, 3, 4].map((item, index) => (
          <Stack
            onClick={() => setDialog(true)}
            key={index}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            sx={{
              backgroundColor: "#F6F6F6",
              borderRadius: 1.5,
              padding: "12px 20px",
              mb: 2,
              cursor: "pointer",
            }}
          >
            <div>
              <img
                src={EscrowImage}
                style={{ width: 30, height: 30 }}
                className="w3-image"
              />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  color: "#1E1E1E",
                  fontSize: 13,
                  fontWeight: "600",
                }}
              >
                Escrow Payment - Transfer to Account
              </div>
              <span
                style={{ color: "#7F7F7F", fontWeight: "500", fontSize: 12 }}
              >
                09:45 PM
              </span>
            </div>
            <div
              style={{
                color: "#009700",
                fontWeight: "700",
                fontSize: 14,
              }}
            >
              + ₦23,500
            </div>
          </Stack>
        ))}
      </Box>
      <br />
      <Box>
        <h6 style={{ color: "06 July 2023", fontWeight: "400", fontSize: 13 }}>
          05 July 2023
        </h6>
        {[1, 2, 3, 4].map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            onClick={() => setDialog(true)}
            alignItems={"center"}
            spacing={2}
            sx={{
              backgroundColor: "#F6F6F6",
              borderRadius: 1.5,
              padding: "12px 20px",
              mb: 2,
              cursor: "pointer",
            }}
          >
            <div>
              <img
                src={EscrowImage}
                style={{ width: 30, height: 30 }}
                className="w3-image"
              />
            </div>
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  color: "#1E1E1E",
                  fontSize: 13,
                  fontWeight: "600",
                }}
              >
                Escrow Payment - Transfer to Account
              </div>
              <span
                style={{ color: "#7F7F7F", fontWeight: "500", fontSize: 12 }}
              >
                09:45 PM
              </span>
            </div>
            <div
              style={{
                color: "#009700",
                fontWeight: "700",
                fontSize: 14,
              }}
            >
              + ₦23,500
            </div>
          </Stack>
        ))}
      </Box>

      <EarningDetails dialog={dialog} setDialog={setDialog} />
    </Box>
  );
}
