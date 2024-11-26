import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useState } from "react";
export default function ReportProvider({ dialog, setDialog }) {
  const [desc, setDesc] = useState("");
  return (
    <Dialog
      open={dialog}
      onClose={() => setDialog(false)}
      aria-labelledby={"report-provider"}
      fullWidth
      maxWidth={"sm"}
    >
      <DialogTitle
        sx={{
          borderBottom: "1px solid #C3C3C3",
        }}
      >
        <Stack direction={"row"} width={"100%"} alignItems={"center"}>
          <div style={{ textAlign: "center", flexGrow: 1 }}>
            Report This Provider
          </div>
          <IconButton
            size="small"
            sx={{
              backgroundColor: "#4F4F4F",
              color: "white",
              "&:hover": { backgroundColor: "#4F4F4F" },
            }}
            aria-label="close"
            onClick={() => setDialog(false)}
          >
            <Close sx={{ fontSize: 14 }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{
          px: 4,
          py: 4,
          borderBottom: "1px solid #C3C3C3",
        }}
      >
        <h6
          style={{
            fontSize: 17,
            color: "#4F4F4F",
            marginTop:20,
          }}
        >
          Description
        </h6>
        <textarea
          value={desc}
          onChange={({ target: { value } }) => setDesc(value)}
          rows={7}
          style={{
            border: "1px solid #C3C3C3",
            boxShadow: "0px 0px 0px 0px #00000040",
            resize: "none",
            width: "100%",
            borderRadius: 10,
            padding: "13px 18px ",
            fontSize: 13,
            color: "#4F4F4F",
          }}
        />
      </DialogContent>
      <DialogActions sx={{pt:2, pb:3}}>
        <Button
          variant="contained"
          disableElevation
          sx={{
            textTransform: "none",
            color: "white",
            backgroundColor: "#F56F46",
          }}
          onClick={() => setDialog(false)}
        >
          Confirm
        </Button>
        <Button
          onClick={() => setDialog(false)}
          variant="contained"
          disableElevation
          sx={{
            textTransform: "none",
            color: "white",
            backgroundColor: "#858585",
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
