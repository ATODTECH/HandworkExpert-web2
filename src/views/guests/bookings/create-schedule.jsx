import { Box, Radio, Stack, InputAdornment } from "@mui/material";
import { useCallback, useState } from "react";
import CssTextField from "../../../components/cssTextField";
import { CalendarMonth } from "@mui/icons-material";
import BookAction from "./book-action";
import ToastMessage from "../../../hooks/toastMessage";

export default function CreateSchedule({ handlePrev, handleNext, active }) {
  const [option, setOption] = useState("one");
  const pref = [
    {
      title: "One Day",
      content: "You require this service for a day",
      value: "one",
    },
    {
      title: "A Number of Days",
      content: "What you want will take a number of days to finalize.",
      value: "multi",
    },
  ];
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const action = useCallback(() => {
    if (option == "one" && from.length > 0) return handleNext();
    if (option === "multi" && from.length > 0 && to.length > 0)
      return handleNext();
    return ToastMessage("error", "Kindly fill missing fields");
  }, [handleNext, to, from, option]);
  return (
    <Box>
      <h5
        style={{
          color: "#101928",
          fontSize: 14,
          fontWeight: "700",
        }}
      >
        When do you require this services
      </h5>

      <Box
        sx={{
          border: "1px solid #E4E7EC",
          borderRadius: 1,
          padding: "30px 25px",
        }}
      >
        <h6
          style={{
            fontSize: 13,
            color: "#101928",
            fontWeight: "600",
          }}
        >
          Select Preferred Option
        </h6>
        <div>
          {pref.map((item, index) => (
            <Stack direction={"row"} spacing={1} key={index} sx={{ my: 1 }}>
              <div>
                <Radio
                  size="small"
                  checked={item.value === option}
                  value={item.value}
                  onChange={({ target: { checked } }) => setOption(item.value)}
                  sx={{ color: "#1F37AE" }}
                />
              </div>
              <div style={{ lineHeight: 0.3, marginTop: 1 }}>
                <p
                  style={{
                    color: "#101928",
                    fontWeight: "500",
                    fontSize: 13,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: "#667185",
                    fontWeight: "400",
                    fontSize: 10,
                  }}
                >
                  {item.content}
                </p>
              </div>
            </Stack>
          ))}
        </div>
        {option === "one" ? (
          <div>
            <label
              style={{
                fontSize: 12,
                color: "#667085",
                fontWeight: "500",
              }}
            >
              Choose a day
            </label>
            <CssTextField
              size="small"
              fullWidth
              type="date"
              value={from}
              onChange={({ target: { value } }) => setFrom(value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonth sx={{ fontSize: 13 }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        ) : (
          <div>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={3}
              width={"100%"}
            >
              <div style={{ flexGrow: 1 }}>
                <label
                  style={{
                    fontSize: 12,
                    color: "#667085",
                    fontWeight: "500",
                  }}
                >
                  From When
                </label>
                <CssTextField
                  size="small"
                  fullWidth
                  type="date"
                  value={from}
                  onChange={({ target: { value } }) => setFrom(value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonth sx={{ fontSize: 13 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <label
                  style={{
                    fontSize: 12,
                    color: "#667085",
                    fontWeight: "500",
                  }}
                >
                  To When
                </label>
                <CssTextField
                  size="small"
                  fullWidth
                  type="date"
                  value={to}
                  onChange={({ target: { value } }) => setTo(value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonth sx={{ fontSize: 13 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Stack>
          </div>
        )}
        <br />
        <br />
        <BookAction
          handlePrev={handlePrev}
          handleNext={action}
          active={active}
        />
      </Box>
    </Box>
  );
}
