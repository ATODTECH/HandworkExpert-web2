import { Add, DeleteOutlined, Remove } from "@mui/icons-material";
import { Box, Stack, Rating, IconButton, Button } from "@mui/material";
import CustomPagination from "../../../components/customPagination";

export default function Reviews() {
  return (
    <Box>
      <h4 style={{ color: "#101928", fontSize: 20, fontWeight: "600" }}>
        Reviews
      </h4>
      <p
        style={{
          color: "#667185",
          fontSize: 12,
          marginTop: -10,
        }}
      >
        All your reviews can be found on this page
      </p>
      <br />
      <Box>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #E4E7EC",
              padding: "20px 15px",
              borderRadius: 1.7,
              mb: 3,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <div>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  sx={{}}
                >
                  <div
                    style={{
                      color: "#667185",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    5.0
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <Rating readOnly value={5} size="small" fontSize="small" />
                  </div>
                </Stack>

                <div
                  style={{
                    maxWidth: 600,
                    color: "#344054",
                    fontSize: 12,
                    fontWeight: "500",
                    lineHeight: 1.6,
                  }}
                >
                  Office ipsum you must be muted. Meeting circle recap loss gave
                  who's book cc. Focus you're shoot downloaded those
                  cross-pollination rehydrate building just. Bells based are eat
                  stand member incompetent anyway. Stop re-inventing just stop
                  t-shaped adoption emails.
                </div>
                <p>
                  <b
                    style={{
                      color: "#344054",
                      fontSize: 13,
                      fontWeight: "600",
                    }}
                  >
                    Cottage Medicare Hospital
                  </b>
                </p>
              </div>
              <div>
                <IconButton aria-label="" sx={{ color: "#1D1B20" }}>
                  <DeleteOutlined sx={{ fontSize: 18 }} />
                </IconButton>
              </div>
            </Stack>
          </Box>
        ))}
      </Box>
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
  );
}
