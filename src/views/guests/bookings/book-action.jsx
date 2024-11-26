import { Box, Stack, Button } from "@mui/material";
export default function BookAction({ active, handlePrev, handleNext, run }) {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <div>
        <Button
          onClick={() => handlePrev()}
          variant="contained"
          disableElevation
          sx={{
            textTransform: "none",
            height: 40,
            px: 3,
            width: 200,
            backgroundColor: "#F1F5F9",
            color: "#0F172A",
            fontSize: 14,
            fontWeight: "600",
            "&:hover": {
              color: "white",
            },
          }}
        >
          {active === "create" ? " Back to Service Page" : "Back"}
        </Button>
      </div>
      <div>
        <Button
          type="submit"
          onClick={() => handleNext(run)}
          variant="contained"
          disableElevation
          sx={{
            textTransform: "none",
            height: 40,
            width: 220,
            backgroundColor: "#172153",
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: "600",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Continue
        </Button>
      </div>
    </Stack>
  );
}
