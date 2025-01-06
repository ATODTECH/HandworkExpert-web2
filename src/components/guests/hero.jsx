import { Box, Grid } from "@mui/material";
import BgImage from "../../assets/img/home-bg.png";
export default function Hero({ coloredText, whiteText, subtitle }) {
  return (
    <Box
      sx={{
        mt: 0,
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        minHeight: 750,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(23, 33, 83, 0.5)",
          width: "100%",

          minHeight: 750,
        }}
      >
        <Grid container spacing={1} alignItems={"center"} minHeight={750}>
          <Grid item xs={12} sm={3} md={3} lg={3} />
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={{ textAlign: "center" }}>
              <h3
                style={{
                  color: "white",
                  fontSize: 60,
                  fontWeight: "700",
                  lineHeight: 1.3,
                }}
              >
                <span style={{ color: "#F56F46" }}>{coloredText}</span>{" "}
                {whiteText}
              </h3>
         
              <p
                style={{
                  color: "white",
                  fontSize: 30,
                  lineHeight: 2,
                }}
              >
                {subtitle}
              </p>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
