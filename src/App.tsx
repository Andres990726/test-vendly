import { ThemeProvider } from "@mui/material";
import Routes from "./Routes";
import { SnackbarProvider } from "notistack";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
