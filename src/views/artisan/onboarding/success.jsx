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
import CheckIcon from "../../../assets/img/check-icon.png";
import { Link } from "react-router-dom";
export default function SuccessDialog({ dialog, setDialog }) {
  return (
    <Dialog
      maxWidth={"xs"}
      fullWidth
      open={dialog}
      //   onClose={() => setDialog(false)}
    >
      <DialogTitle sx={{ textAlign: "right" }}>
        {/* <IconButton
          aria-label=""
          sx={{ color: "#667085" }}
          size="small"
          onClick={() => setDialog(false)}
        >
          <Close />
        </IconButton> */}
      </DialogTitle>
      <DialogContent
        sx={{
          py: 3,
          px: 3,
          textAlign: "center",
        }}
      >
        <div>
          <img
            src={CheckIcon}
            className="w3-image"
            style={{
              width: 80,
              height: 80,
            }}
          />
        </div>

        <h5 style={{ color: "#101828", fontSize: 22, fontWeight: "600" }}>
          Your Profile is Ready
        </h5>
        <p style={{ color: "#475467" }}>
          This blog post has been published. Team members will be able to edit
          this post and republish changes.
        </p>
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 4 }}>
        <Button
          component={Link}
          to={"/artisan/dashboard"}
          sx={{
            textTransform: "none",
            backgroundColor: "#1570EF",
            fontWeight: "600",
          }}
          fullWidth
          variant="contained"
          disableElevation
          color="primary"
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}
