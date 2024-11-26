import {
  Add,
  ExpandMore,
  Filter,
  FilterAlt,
  LocationOnOutlined,
  MoreVert,
  Remove,
  UnfoldMore,
  Visibility,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  Button,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popper,
  IconButton,
} from "@mui/material";
import { useRef, useState } from "react";
import CustomPagination from "../../../components/customPagination";
import ButtonAction from "./button-action";
import Details from "./details";
import CompleteAppointment from "./complete-appointment";
import CancelAppointment from "./cancel-appointment";

export default function Calendar() {
  const tabs = [
    { title: "Pending", value: "pending" },
    { title: "Accepted", value: "accepted" },
    { title: "Completed", value: "completed" },
    { title: "Cancelled", value: "cancelled" },
  ];
  const [active, setActive] = useState("pending");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
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

  const categories = [
    { title: "All Categories", url: "/categories" },
    {
      title: "Fashion and Beauty",
      url: "/category-details/fashion-and-beauty",
    },
    { title: "Export Services", url: "/category-details/export-services" },
    { title: "Home and Property", url: "/category-details/home-and-property" },
    {
      title: "Logistics And Warehousing",
      url: "/category-details/logistics-and-Warehousing",
    },
    { title: "Agriculture", url: "/category-details/agriculture" },
  ];

  const [dialog, setDialog] = useState(false);
  const [complete, setComplete] = useState(false);
  const [cancel, setCancel] = useState(false);
  return (
    <Box>
      <h6
        style={{
          color: "#101928",
          fontWeight: "600",
          fontSize: 18,
        }}
      >
        Calendar
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

        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
              color: "#98A2B3",
              border: "1px solid #D0D5DD",
              textTransform: "none",
              fontWeight: "600",
              minWidth: 120,
            }}
            variant="text"
            size="small"
            endIcon={<ExpandMore sx={{ color: "#667185" }} />}
          >
            All Categories
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
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
                      sx={{
                        backgroundColor: "white",
                      }}
                    >
                      {categories.map((item, index) => (
                        <MenuItem
                          sx={{
                            fontSize: 12,
                            color: "#344054",
                          }}
                          key={index}
                          onClick={(e) => handleClose(e, item)}
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
        </div>
        <div>
          <Button
            sx={{
              color: "#F56630",
              border: "1px solid #F56630",
              textTransform: "none",
              fontWeight: "600",
            }}
            variant="outlined"
            size="small"
            startIcon={<FilterAlt sx={{ color: "#F56630" }} />}
          >
            Filter
          </Button>
        </div>
      </Stack>

      <br />
      <Box>
        <h6 style={{ color: "#475367", fontWeight: "600", fontSize: 14 }}>
          This week
        </h6>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            sx={{
              border: "1px solid #E4E7EC",
              borderRadius: 1.5,
              padding: "12px 20px",
              mb: 3,
            }}
          >
            <div>
              <b style={{ color: "#344054", fontWeight: "600", fontSize: 14 }}>
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
                <LocationOnOutlined sx={{ color: "#667085", fontSize: 16 }} />
                <div
                  style={{ color: "#475367", fontWeight: "600", fontSize: 14 }}
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
            <div>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#FEF6E7",
                  textTransform: "none",
                  color: "#865503",
                }}
                disableElevation
              >
                Pending
              </Button>
            </div>
            <div>
              <IconButton
                size="small"
                aria-label=""
                onClick={() => {
                  setDialog(true);
                }}
                sx={{
                  borderRadius: 1,
                  border: "1px solid #F0F2F5",
                }}
              >
                <VisibilityOutlined sx={{ fontSize: 17, color: "#000000" }} />
              </IconButton>
            </div>
            <div>
              <ButtonAction />
            </div>
          </Stack>
        ))}
      </Box>

      <Details
        dialog={dialog}
        setDialog={setDialog}
        setComplete={setComplete}
        setCancel={setCancel}
      />
      <CompleteAppointment
        dialog={complete}
        setDialog={setComplete}
        setDetails={setDialog}
      />
      <CancelAppointment
        dialog={cancel}
        setDialog={setCancel}
        setDetails={setDialog}
      />
    </Box>
  );
}
