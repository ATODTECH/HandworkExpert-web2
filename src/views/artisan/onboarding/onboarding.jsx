import { Box, CssBaseline, Grid, Stack } from "@mui/material";
import Topbar from "../../../components/users/topbar";
import { Circle } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import BasicInformation from "./basic-information";
import UploadDocument from "./upload-documents";
import AddSkills from "./add-skills";
import BankingDetails from "./bank-details";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../store/userStore";

export default function Onboarding() {
  const steps = useMemo(
    () => [
      { title: "Basic Information", value: "info" },
      { title: "Upload Documents", value: "documents" },
      { title: "Add Skills/Profession", value: "skills" },
      { title: "Add Bank Details", value: "bank" },
    ],
    []
  );

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [active, setActive] = useState("info");
  const [percent, setPercent] = useState(0);

  const step = useMemo(
    () => steps.findIndex((item) => item.value === active),
    [steps, active]
  );

  useEffect(() => {
    if (user?.onboarding_level?.level_1) setActive("info");
    if (user?.onboarding_level?.level_2) setActive("skills");
    if (user?.onboarding_level?.level_3) setActive("bank");

    dispatch(getUserDetails(user?.id));
  }, []);

  return (
    <Box>
      <Topbar />
      <CssBaseline />

      <Box
        sx={{
          backgroundColor: "#F6F6F7",
        }}
      >
        <Grid container spacing={0} minHeight={"100vh"} alignItems={"center"}>
          <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box>
              <h6
                style={{
                  color: "#313235",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                {steps[step].title}
              </h6>
              <br />

              <div
                style={{
                  width: "100%",
                  height: 8,
                  backgroundColor: "#F0F2F5",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F56630",
                    height: 8,
                    width: `${percent}%`,
                    borderRadius: 10,
                  }}
                />
              </div>
              <br />

              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                sx={{
                  color: "#475367",
                  fontSize: 13,
                  fontWeight: "500",
                }}
              >
                <div>Step {step + 1}</div>

                <div style={{ marginTop: -1 }}>
                  <Circle sx={{ color: "#98A2B3", fontSize: 6 }} />
                </div>

                <div>{steps[step].title}</div>
                <div style={{ flexGrow: 1 }} />
                <div style={{ fontWeight: "600" }}>{percent}%</div>
              </Stack>
              <br />
              <Box>
                {active === "info" && (
                  <BasicInformation
                    setActive={setActive}
                    setPercent={setPercent}
                  />
                )}
                {active === "documents" && (
                  <UploadDocument
                    setActive={setActive}
                    setPercent={setPercent}
                  />
                )}
                {active === "skills" && (
                  <AddSkills setActive={setActive} setPercent={setPercent} />
                )}
                {active === "bank" && (
                  <BankingDetails
                    setActive={setActive}
                    setPercent={setPercent}
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
