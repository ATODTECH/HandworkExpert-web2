import {
  Close,
  CopyAllOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import EscrowImage from "../../../assets/img/escrow.png";

import { Link } from "react-router-dom";
import { useMemo } from "react";
import copyText from "../../../hooks/copytext";

export default function EarningDetails({ setDialog, dialog }) {
  const details = useMemo(
    () => [
      { title: "Date", value: "Jul 6, 2023 at 10:23 AM" },
      { title: "Beneficiary", value: "Fagba Agba - 8198903210 " },
      { title: "Ref. no ", value: "234030919920113" },
      { title: "Status", value: "Successful" },
      { title: "Amount sent", value: "NGN 2000.00" },
    ],
    []
  );

  return (
    <Dialog
      maxWidth={"xs"}
      fullWidth
      open={dialog}
      onClose={() => setDialog(false)}
    >
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            color: "#0F1117",
            fontWeight: "600",
            fontSize: 14,
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Payment Details
        </div>
        <IconButton
          sx={{ color: "#1D1B20" }}
          aria-label=""
          onClick={() => setDialog(false)}
          size="small"
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box>
          <div style={{ textAlign: "center" }}>
            <img
              src={EscrowImage}
              style={{ width: 60, height: 60 }}
              className="w3-image"
            />
            <br />
            <br />
            <b
              style={{
                color: "#0F1117",
                fontWeight: "600",
                fontSize: 12,
              }}
            >
              Escrow Payment - Transfer to Account
            </b>
          </div>

          <br />
          <div>
            <p
              style={{
                color: "#344054",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Transaction details
            </p>
            <div
              style={{
                padding: "10px 15px",
                backgroundColor: "#FAFAFA",
                fontSize: 12,
                borderRadius: 8,
              }}
            >
              {details.map((item, index) => (
                <Stack
                  direction={"row"}
                  key={index}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{
                    py: 1,
                  }}
                >
                  <div style={{ color: "#616161", fontSize: 12 }}>
                    {item.title}:
                  </div>
                  <div
                    style={{
                      color: "#464646",
                      fontWeight: index === details.length - 1 ? "700" : "500",
                      fontSize: 12,
                    }}
                  >
                    {item.value}
                    {index === 2 && (
                      <IconButton
                        aria-label=""
                        size="small"
                        onClick={() => copyText("123455432")}
                      >
                        <CopyAllOutlined
                          sx={{ fontSize: 14, color: "#575757" }}
                        />
                      </IconButton>
                    )}
                  </div>
                </Stack>
              ))}
            </div>
          </div>
          <br />
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={'space-between'}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 1.5,
              padding: "12px 20px",
              mb: 3,
            }}
          >
            <div>
              <b style={{ color: "#344054", fontWeight: "600", fontSize: 13 }}>
                AUG
              </b>
              <br />
              <span
                style={{ color: "#475367", fontWeight: "400", fontSize: 12 }}
              >
                12
              </span>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <LocationOnOutlined sx={{ color: "#667085", fontSize: 15 }} />
                <div
                  style={{ color: "#475367", fontWeight: "600", fontSize: 13 }}
                >
                  18 Iwaya Rd, Yaba 101245, Lagos
                </div>
              </Stack>
              <span
                style={{ color: "#344054", fontWeight: "500", fontSize: 12 }}
              >
                Stephen Awolowo
              </span>
            </div>
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions sx={{ gap: 1, flexDirection: "column", px: 3, pb: 3 }}>
        <Button
          color="error"
          variant="outlined"
          disableElevation
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: "500",
            height: 40,
            color: "#20525C",
            borderColor: "#D0D5DD",
            backgroundColor: "white",
          }}
        >
          Report
        </Button>
        <Button
          variant="contained"
          fullWidth
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: "500",
            height: 40,
            backgroundColor: "#1E338A",
          }}
        >
          Download Receipt
        </Button>
      </DialogActions>
    </Dialog>
  );
}
