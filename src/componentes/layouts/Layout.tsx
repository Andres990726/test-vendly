import Header from "../headers/Header";
import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(1.5),
  overflow: "auto",
  display: "grid",
}));

function Layout() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}

export default Layout;
