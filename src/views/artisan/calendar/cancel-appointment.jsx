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
  TextField,
} from "@mui/material";
import CancelIcon from "../../../assets/img/cancel-icon.png";
import Map from "../../../assets/img/map.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CancelAppointment({ setDialog, dialog, setDetails }) {
  const [text, setText] = useState("");
  return (
    <Dialog
      maxWidth={"sm"}
      fullWidth
      open={dialog}
      onClose={() => setDialog(false)}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
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
        <Box sx={{ px: 4, pb: 3 }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={CancelIcon}
              style={{ width: 80, height: 80 }}
              className="w3-image"
            />
            <br />
            <b
              style={{
                color: "#0A090B",
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              Cancel Appointment
            </b>
            <p style={{ color: "#525256", fontSize: 13 }}>
              Do you want to proceed with this action? This user will be{" "}
              <br className="w3-hide-small" />
              notified that you cancelled this appointment
            </p>
          </div>
          <br />
          <div>
            <label
              style={{
                fontSize: 12,
                color: "#0E1B28",
                fontWeight: "500",
              }}
            >
              Why are you cancelling?{" "}
              <span style={{ color: "#E31E18" }}>*</span>
            </label>
            <TextField
              fullWidth
              id="text"
              placeholder="Kindly give a description for cancelling"
              value={text}
              onChange={({ target: { value } }) => setText(value)}
              multiline
              rows={5}
              sx={{ mt: 1 }}
              variant="outlined"
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions sx={{ gap: 10, flexDirection: "row", px: 3, pb: 3 }}>
        <Button
          variant="contained"
          onClick={() => {
            setDialog(false)
            setDetails(false)
            setText("")
        }}
          disableElevation
          disabled={!text}
          sx={{
            textTransform: "none",
            fontWeight: "500",
            height: 40,
            backgroundColor: "#1E338A",
            width: 200,
          }}
        >
          Continue
        </Button>

        <Button
          color="error"
          variant="outlined"
          onClick={() => setDialog(false)}

          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: "500",
            height: 40,
            color: "#77767A",
            borderColor: "#E2E2EB",
            backgroundColor: "white",
            width: 200,
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
