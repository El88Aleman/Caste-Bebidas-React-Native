import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  password: string()
    .required("La contraseña es requerida")
    .min(5, "Minimo 5 caracteres"),
  email: string()
    .required("El email es requerido")
    .email("El email no es valido"),
});
export const loginSchema = object().shape({
  password: string()
    .required("La contraseña es requerida")
    .min(5, "Minimo 5 caracteres"),

  email: string()
    .required("El email es requerido")
    .email("El email no es valido"),
});
