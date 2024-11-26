import { Box, Grid, Stack, Button } from "@mui/material";
import PromotionImage from "../../assets/img/promotion.png";
export default function Promotions() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: {
            xl:"5px 10px 10px",
            lg:"15px 10px 10px",
            sm:"25px 10px 10px",
            md:"25px 10px 10px",
            xs:"5px 10px 10px",
        },
      }}
    >
      <Grid container spacing={1} alignItems={"center"}>
        <Grid item xs={12} sm={1} md={1} lg={2} />
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Box
            sx={{
              backgroundColor: "#F56F46",
              padding: {
                xl:"30px 60px 40px 100px",
                lg:"30px 60px 40px 100px",
                md:"10px 0px 40px 30px",
                sm:"0px 0px 40px 20px",
                xs:"40px 15px 40px 15px",
            },
              borderRadius:1
            }}
          >
            <Grid container spacing={1} alignItems={"center"}>
              <Grid item xs={12} sm={7} md={6} lg={7}>
                <Box>
                  <h4
                    style={{
                      color: "white",
                      fontSize: 30,
                      fontWeight: "800",
                      lineHeight: 1.2,
                    }}
                  >
                    Join the network of professionals{" "}
                    <br className="w3-hide-small w3-hide-medium" /> around you
                  </h4>
                  <p
                    style={{
                      color: "white",
                      fontSize: 17,
                      fontWeight: "500",
                    }}
                  >
                    Become part the working class community and find{" "}
                    <br className="w3-hide-small w3-hide-medium" /> your next client and extra
                    income.
                  </p>
                  <br />
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Button
                      sx={{
                        textTransform: "none",
                        backgroundColor: "white",
                        borderRadius: 1,
                        height: 40,
                        color: "#172153",
                        fontWeight: "700",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                      variant="contained"
                      disableElevation
                    >
                      Register as a Professional
                    </Button>

                    <Button
                      variant="text"
                      sx={{
                        color: "white",
                        fontWeight: "600",
                        textTransform: "none",
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} md={6} lg={5} sx={{
                display:{xs:'none', sm:'flex'}
              }}>
                <Box sx={{ mb: -5 }}>
                  <img
                    src={PromotionImage}
                    className="w3-image"
                    style={{ height: 420 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
