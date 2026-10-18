import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./store/store.js";
import { createTheme, ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ScreenLoading from "./components/loaders/screenLoading.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryProvider } from "@/providers/query-provider";

const theme = createTheme({
  typography: {
    fontFamily: '"Abrade", sans-serif',
  },
  palette: {
    primary: {
      main: "#172153",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryProvider>
        <Provider store={store}>
          <PersistGate loading={<ScreenLoading />} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
            <Toaster position="top-right" richColors />
          </PersistGate>
        </Provider>
      </QueryProvider>
    </HelmetProvider>
  </React.StrictMode>
);
