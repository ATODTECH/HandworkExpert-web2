import { Box, Stack, Button } from "@mui/material";
import ProfileImage from "../../../assets/img/profile-image.png";
import { useMemo, useState } from "react";
import DeleteAccount from "./delete-account";
import EditProfile from "./edit-profile";
import { useSelector } from "react-redux";
export default function Profile() {
  const { user } = useSelector((state) => state.user);
  const details = useMemo(
    () => [
      { title: "First Name", value: user?.first_name || "Ajortisedere" },
      { title: "Last Name", value: user?.last_name || "Rone-Orugboh" },
      { title: "Phone Number", value: user?.contact || "(+234)8032699233" },
      { title: "Email", value: user?.email || "ajoritsedere@gmail.com" },
      { title: "Address", value: user?.address },
      { title: "Country of Residence", value: user?.country || "Nigeria" },
      { title: "Nationality", value: user?.country || "Nigeria" },
    ],
    [user]
  );

  const [delDiag, setDelDialog] = useState(false);
  const [dialog, setDialog] = useState(false);
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} spacing={4}>
        <div>
          <img
            src={ProfileImage}
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
            }}
          />
        </div>
        <Button
          variant="contained"
          disableElevation
          onClick={() => setDialog(true)}
          sx={{
            backgroundColor: "#F5F6F6",
            border: "1px solid #E2E4E5",
            textTransform: "capitalize",
            color: "#0E1B28",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Edit Profile Details
        </Button>
      </Stack>
      <br />
      <p style={{ fontSize: 12, color: "#0E1B28" }}>BASIC INFORMATION</p>
      <Box sx={{}}>
        <table className="w3-table">
          <thead>
            <th>{""}</th>
            <th>{""}</th>
          </thead>
          <tbody>
            {details.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    color: "#82898F",
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </td>
                <td
                  style={{ textAlign: "right", color: "#0E1B28", fontSize: 13 }}
                >
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{ px: 2 }}
        >
          <Button
            variant="contained"
            disableElevation
            onClick={() => setDialog(true)}
            sx={{
              textTransform: "none",
              backgroundColor: "#172153",
              color: "white",
              width: 160,
            }}
          >
            Edit Profile
          </Button>
          <Button
            variant="outlined"
            disableElevation
            color="error"
            onClick={() => setDelDialog(true)}
            sx={{
              textTransform: "none",
              //   backgroundColor: "#172153",
              //   color: "white",
              width: 160,
            }}
          >
            Delete Account
          </Button>
        </Stack>
      </Box>

      <DeleteAccount dialog={delDiag} setDialog={setDelDialog} />
      <EditProfile dialog={dialog} setDialog={setDialog} />
    </Box>
  );
}
