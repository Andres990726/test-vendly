import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { usePopover } from "../../hooks/usePopover";
import { AccountPopover } from "./AccountPopover";
import {
  Avatar,
  AppBar,
  Toolbar,
  styled,
  Stack,
  Typography,
  Button,
} from "@mui/material";

const MuiAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  m: 0,
}));

function Header() {
  const accountPopover = usePopover();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <MuiAppBar position="static">
        <Toolbar
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            color: "white",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h6">Multimedia APP</Typography>
            <Button color="inherit" onClick={() => navigate("/")}>
              Inicio
            </Button>
            <Button color="inherit">Búsqueda</Button>
            <Button color="inherit">Mi Lista</Button>
            <Button color="inherit">Originales</Button>
            <Button color="inherit">Películas</Button>
            <Button color="inherit">Series</Button>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography>{user.username}</Typography>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{ cursor: "pointer", bgcolor: "primary.main" }}
            >
              {user.username.substring(0, 1).toUpperCase()}
            </Avatar>
          </Stack>
        </Toolbar>
      </MuiAppBar>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
}

export default Header;
