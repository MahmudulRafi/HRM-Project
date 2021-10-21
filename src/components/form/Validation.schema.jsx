import * as Yup from "yup";

const loginFormValidation = Yup.object({
    username: Yup.string().required("Required Filed"),
    password: Yup.string()
        .required("Required Field")
        .min(6, "Password Must Be 6 Character Long"),
});

export { loginFormValidation };
