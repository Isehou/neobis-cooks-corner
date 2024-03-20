import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup.string().email("Correct your email").required("Required"),
  username: yup.string().required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(8, "From 8 to 15 characters")
    .max(15, "From 8 to 15 characters")
    .matches(/[a-zA-Z]/, "Lowercase and uppercase letters")
    .matches(/\d/, "Minimum 1 digit")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Minimum 1 special character"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password"),
});
