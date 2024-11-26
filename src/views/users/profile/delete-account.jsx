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
import { Close } from "@mui/icons-material";
import DeleteImage from "../../../assets/img/featured-delete.png";
export default function DeleteAccount({ dialog, setDialog }) {
  return (
    <Dialog
      open={dialog}
      maxWidth={"xs"}
      fullWidth
      onClose={() => setDialog(false)}
    >
      <DialogTitle sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          aria-label="close"
          onClick={() => setDialog(false)}
          sx={{ color: "#667085" }}
        >
          <Close sx={{ fontSize: 18 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent component={"div"} sx={{ px: 3, pt: 3, pb:1.5 }}>
        <Box sx={{ textAlign: "center" }}>
          <img
            src={DeleteImage}
            className="w3-image"
            style={{ width: 50, height: 50 }}
          />
          <br />
          <h4
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#101828",
            }}
          >
            Delete Account?
          </h4>
          <p style={{ color: "#475467", fontSize: 15, lineHeight: 1.8 }}>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
        </Box>
      </DialogContent>
      <DialogActions
        justifyContent={"center"}
        spacing={3}
        sx={{ pt: 1, pb: 3, px:3 }}
      >
        <Button
          color="error"
          variant="outlined"
          onClick={()=>setDialog(false)}
          fullWidth
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: "600",
            height: 40,
            color: "#344054",
            borderColor: "#D0D5DD",
          }}
        >
          Cancel
        </Button>
        <Button
          color="error"
          variant="contained"
          fullWidth
          disableElevation
          sx={{ textTransform: "none", fontWeight: "600", height: 40 }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
