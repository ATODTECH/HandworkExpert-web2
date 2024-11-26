import {
  Add,
  ExpandMore,
  Filter,
  FilterAlt,
  MoreVert,
  Remove,
  UnfoldMore,
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
import SupportDetails from "./support-details";
import OpenTicket from "./open-ticket";

export default function Support() {
  const tabs = [
    { title: "Pending", value: "pending" },
    { title: "Resolved", value: "resolved" },
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

  const header = [
    { title: "Ticket ID", showFilter: true, width: "" },
    { title: "Task Reference", showFilter: true, width: "" },
    { title: "Type", showFilter: true, width: "" },
    { title: "Status", showFilter: false, width: "" },
    { title: "Date Created", showFilter: false, width: "" },
    { title: "", showFilter: false, width: "" },
  ];

  const [dialog, setDialog] = useState(false);
  const [ticket, setTicket] = useState(false);
  return (
    <Box>
      <Stack
        direction={"row"}
        spacing={0}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <div>
          <h6
            style={{
              color: "#101928",
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Support
          </h6>
          <div
            style={{
              color: "#667185",
              fontSize: 13,
            }}
          >
            Take a look at your policies and the new policy to see what is
            covered
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              fontSize: 13,
              backgroundColor: "#1E338A",
            }}
            color="primary"
            onClick={()=>setTicket(true)}
          >
            Create New Ticket
          </Button>
        </div>
      </Stack>

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
        <table
          className="w3-table w3-hoverable"
          style={{
            border: "1px solid #E4E7EC",
            borderRadius: 15,
          }}
        >
          <thead
            style={{
              backgroundColor: "#F9FAFB",
              borderRadius: "15px 15px 0 0",
            }}
          >
            {header.map((item, index) => (
              <th
                style={{
                  color: "#344054",
                  fontSize: 12,
                }}
                key={index}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div> {item.title}</div>
                  {item.showFilter ? (
                    <IconButton size="small" aria-label="">
                      <UnfoldMore sx={{ fontSize: 12 }} />
                    </IconButton>
                  ) : (
                    <div>{""}</div>
                  )}
                </div>
              </th>
            ))}
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16].map(
              (item, index) => (
                <tr
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => setDialog(true)}
                >
                  <td style={{ padding: "10px 15px" }}>
                    <span
                      style={{
                        color: "#101928",
                        fontWeight: "500",
                        fontSize: 13,
                      }}
                    >
                      #45544884
                    </span>
                  </td>
                  <td style={{ padding: "10px 5px" }}>
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "400",
                        fontSize: 13,
                      }}
                    >
                      17, Bamidele Street, Osapa London, Lekki, Ibeju-Lekki
                    </span>
                  </td>
                  <td style={{ padding: "10px 5px" }}>
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "400",
                        fontSize: 13,
                      }}
                    >
                      No Payment
                    </span>
                  </td>
                  <td style={{ padding: "10px 5px" }}>
                    <span
                      style={{
                        color: "#AD3307",
                        fontWeight: "500",
                        fontSize: 13,
                        backgroundColor: "#FFECE5",
                        padding: "5px 12px",
                        borderRadius: 50,
                      }}
                    >
                      Pending
                    </span>
                  </td>
                  <td style={{ padding: "10px 5px" }}>
                    <span
                      style={{
                        color: "#101928",
                        fontWeight: "500",
                        fontSize: 13,
                      }}
                    >
                      24 August 2024
                    </span>
                  </td>

                  <td style={{ padding: "10px 5px" }}>
                    <div>
                      <IconButton
                        size="small"
                        aria-label=""
                        sx={{
                          borderRadius: 1,
                          border: "1px solid #F0F2F5",
                        }}
                      >
                        <MoreVert sx={{ fontSize: 17, color: "#000000" }} />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <br />

        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{
            borderTop: "1px solid #E4E7EC",
            px: 2,
            py: 3,
          }}
        >
          <div style={{ fontSize: 12, color: "black", fontWeight: "600" }}>
            Page 1 of 30
          </div>
          <div
            style={{
              textAlign: "center",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomPagination />
          </div>
          <div>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Remove />}
              sx={{
                textTransform: "none",
                color: "#344054",
                fontWeight: "600",
                fontSize: 11,
                border: "1px solid #D0D5DD",
              }}
            >
              Previous
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              size="small"
              endIcon={<Add />}
              sx={{
                textTransform: "none",
                color: "#344054",
                fontWeight: "600",
                fontSize: 11,
                border: "1px solid #D0D5DD",
              }}
            >
              Next
            </Button>
          </div>
        </Stack>
      </Box>

      <SupportDetails dialog={dialog} setDialog={setDialog} />
      <OpenTicket dialog={ticket} setDialog={setTicket} />
    </Box>
  );
}
