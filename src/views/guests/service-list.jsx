import { Box,Button,Avatar } from "@mui/material";

export default function ServiceList({ image }) {
  return (
    <Box>
      <div className="w3-display-container">
        <Avatar
          src={image}
          sx={{
            borderRadius: 2,
            width: {
              xl: 600,
              lg: 480,
              sm: 300,
              xs: 400,
              md: 350,
            },
            height: { xl: 400, lg: 320, sm: 300, xs: 400, md: 300 },
          }}
        />
        <Box
          className="w3-display-bottommiddle"
          sx={{
            backgroundColor: "rgba(23, 33, 83, 0.3)",
            width: {
              xl: 603,
              lg: 480,
              sm: 300,
              xs: 400,
              md: 350,
            },
            height: { xl: 400, lg: 320, sm: 300, xs: 400, md: 300 },
            borderRadius: 2,
            marginLeft: { xl: -1.8, lg: 1.3, md: 2, sm: 4.4 },
            paddingTop: { xl: "52%", lg: "55%", md: "68%", sm: "95%" },
            textAlign: "center",
          }}
        >
          <Button
            disableElevation
            sx={{
              textTransform: "none",
              borderRadius: 50,
              height: 40,
              width: 150,
              color: "white",
              backgroundColor: "#F56F46",
            }}
            variant="contained"
            color="primary"
          >
            View All Service
          </Button>
        </Box>
      </div>
    </Box>
  );
}
