import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import BookingUser from "../../../assets/img/booking-user.png";
import Map from "../../../assets/img/map.png";
import { Link } from "react-router-dom";

export default function Details({ setDialog, dialog, setComplete, setCancel }) {
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
          Job Description Info
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
              src={BookingUser}
              style={{ width: 80, height: 80 }}
              className="w3-image"
            />
            <br />
            <b
              style={{
                color: "#0F1117",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Adanma Amachree
            </b>
          </div>
          <br />
          <div>
            <p
              style={{
                color: "#77767A",
                fontSize: 12,
              }}
            >
              Address Line 1
            </p>
            <div
              style={{
                color: "#0F1117",
                fontWeight: "600",
                fontSize: 13,
              }}
            >
              Metropolitan Bas-Rhin, Grand Stre., Oberlauterbach, France France,
              Haguenau-Wissembourg, Est, 67160,
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <img src={Map} style={{ width: "100%" }} className="w3-image" />
            <br />
            <br />
            <Link
              to={"#"}
              style={{
                color: "#F2461D",
                textDecoration: "underline",
                textDecorationColor: "#F2461D",
                fontSize: 14,
              }}
            >
              <u>Open in Map</u>
            </Link>
          </div>
          <br />
          <div>
            <p
              style={{
                color: "#344054",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              Job Description
            </p>
            <div
              style={{
                padding: "15px 10px",
                color: "#344054",
                border: "1px solid #3C76F5",
                fontSize: 12,
                borderRadius: 8,
              }}
            >
              Office ipsum you must be muted. Unit plane message light let
              market info product then. Want submit crank submit low boy the.
              Wiggle deliverables economy boil driver's i'm. We've streamline
              manager floor scraps shoot here lean manage.
            </div>
          </div>
        </Box>
      </DialogContent>
      <DialogActions sx={{ gap: 1, flexDirection: "column", px: 3, pb: 3 }}>
        <Button
          color="error"
          variant="outlined"
          onClick={() => setCancel(true)}
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
          Cancel Appointment
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setComplete(true)}
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: "500",
            height: 40,
            backgroundColor: "#1E338A",
          }}
        >
          Mark As Completed
        </Button>
      </DialogActions>
    </Dialog>
  );
}
