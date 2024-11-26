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
  FormControlLabel,
  Radio,
} from "@mui/material";
import CompleteIcon from "../../../assets/img/complete-icon.png";
import Map from "../../../assets/img/map.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CompleteAppointment({ setDialog, dialog, setDetails }) {
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
        <Box sx={{ px: 4, pb: 4 }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={CompleteIcon}
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
              Mark as completed
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
                fontSize: 14,
                color: "#344054",
                fontWeight: "500",
              }}
            >
              Please the option below to continue
            </label>
            <br />
            <FormControlLabel
              size={"small"}
              value={text}
              onChange={({ target: { value } }) => setText(value)}
              label={
                <span style={{ color: "#344054", fontSize: 13 }}>
                  I have received payment for this service
                </span>
              }
              control={<Radio size="small" value={"received"} />}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          gap: 6,
          flexDirection: "row",
          justifyContent: "center",
          px: 3,
          pb: 3,
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setDialog(false);
            setDetails(false);
          }}
          disabled={!text}
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: "500",
            height: 40,
            backgroundColor: "#1E338A",
            width: 150,
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
            width: 150,
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
