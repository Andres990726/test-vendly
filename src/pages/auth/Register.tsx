import AuthLayout from "../../componentes/layouts/AuthLayout";
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "codegods@codegods.com",
      fullName: "codegods",
      password: "************",
    },
  });

  const onSubmit = () => {};

  return (
    <AuthLayout variant="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField
            disabled
            type="text"
            {...register("fullName")}
            label="Nombre completo"
          />
          <TextField
            disabled
            type="email"
            {...register("email")}
            label="Correo"
          />
          <TextField
            disabled
            type="password"
            {...register("password")}
            label="Contraseña"
          />
          <LoadingButton
            disabled
            type="submit"
            variant="contained"
            loading={formState.isSubmitting}
          >
            Registrarme
          </LoadingButton>
        </Stack>
      </form>
    </AuthLayout>
  );
}

export default Register;
