import { MoreVert, MoreVertOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@mui/material";
import { useRef, useState } from "react";

export default function ButtonAction() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleClose = (event, value) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const actionOptions = [
    { title: "Mark as Completed", value: "complete" },
    { title: "Open Dispute", value: "dispute" },
    { title: "Cancel Booking", value: "cancel" },
  ];
  return (
    <Box>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        size={"small"}
        sx={{
          borderRadius: 1,
          border: "1px solid #F0F2F5",
        }}
      >
        <MoreVertOutlined sx={{ fontSize: 17, color: "#000000" }} />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 10 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {actionOptions.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={(e) => handleClose(e, item.action)}
                      sx={{
                        fontSize: "13px",
                        color:
                          index < actionOptions.length - 1
                            ? "#0F172A"
                            : "#F2461D",
                      }}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
