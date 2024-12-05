import { Link as RRDLink } from "react-router-dom";
import { Link, Paper, Stack, Typography } from "@mui/material";
import { routes } from "../../utils/routes";

interface Footer {
  [key: string]: JSX.Element;
}

const title: { [key: string]: string } = {
  login: "Inicio de sesión",
  register: "Crear cuenta",
};

const footer: Footer = {
  login: (
    <Typography>
      ¿No tienes una cuenta?{" "}
      <Link to={routes.auth.register} component={RRDLink}>
        Crear una cuenta
      </Link>
    </Typography>
  ),
  register: (
    <Typography>
      ¿Ya tienes una cuenta?{" "}
      <Link to={routes.auth.login} component={RRDLink}>
        Iniciar sesión
      </Link>
    </Typography>
  ),
};

interface AuthLayoutProps {
  children: React.ReactNode;
  variant: string;
}

function AuthLayout({ children, variant }: AuthLayoutProps): JSX.Element {
  return (
    <Stack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="#1A1D29"
    >
      <Paper
        sx={{
          padding: 2,
          minWidth: "400px",
          textAlign: "center",
          bgcolor: "linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50))",
        }}
      >
        <Stack gap={2}>
          <Typography>{title[variant]}</Typography>
          {children}
          {footer[variant]}
        </Stack>
      </Paper>
    </Stack>
  );
}

export default AuthLayout;
