import AuthLayout from "../../componentes/layouts/AuthLayout";
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { api } from "../../services/endpoints";
import { useAuth } from "../../hooks/useAuth";
import { enqueueSnackbar } from "notistack";

function Login() {
  const { mutate } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "codegods@codegods.com",
      password: "codegods",
    },
  });

  const onSubmit = (values: Record<string, string>) => {
    return api
      .signInWithEmailAndPassword({
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        if (response) mutate();
        else
          enqueueSnackbar({
            message: "Email o contraseña incorrectos",
            variant: "error",
          });
      })

      .catch(() => {});
  };

  return (
    <AuthLayout variant="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={2}
          bgcolor={"linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50))"}
        >
          <TextField
            type="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email is not valid.",
              },
            })}
            label="Correo"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 4,
                message: "Password should be at-least 4 characters.",
              },
            })}
            label="Contraseña"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Iniciar sesión
          </LoadingButton>
        </Stack>
      </form>
    </AuthLayout>
  );
}

export default Login;
