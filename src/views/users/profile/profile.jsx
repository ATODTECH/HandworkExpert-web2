import { Box, Stack, Button } from "@mui/material";
import ProfileImage from "../../../assets/img/profile-image.png";
import { useMemo, useState } from "react";
import DeleteAccount from "./delete-account";
import EditProfile from "./edit-profile";
import { useSelector } from "react-redux";
export default function Profile() {
  const { user_details } = useSelector((state) => state.user);
  const details = useMemo(
    () => [
      { title: "First Name", value: user_details?.first_name || '' },
      { title: "Last Name", value: user_details?.last_name || ''  },
      { title: "Phone Number", value: user_details?.contact || ''  },
      { title: "Email", value: user_details?.email || ''  },
      { title: "State", value: user_details?.state || ''  },
      { title: "Country ", value: user_details?.country || ''  },
      // { title: "Nationality", value: "Nigeria" },
    ],
    [user_details]
  );

  const [delDiag, setDelDialog] = useState(false);
  const [dialog, setDialog] = useState(false);
  return (
    <Box>
      <h4 style={{ color: "#101928", fontSize: 20, fontWeight: "600" }}>
        Profile Details
      </h4>
      <p
        style={{
          color: "#667185",
          fontSize: 12,
          marginTop: -10,
        }}
      >
        Take a look at your policies and the new policy to see what is covered
      </p>
      <br />

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
      <Box sx={{ maxWidth: 600 }}>
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
