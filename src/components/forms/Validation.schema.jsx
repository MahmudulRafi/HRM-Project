import * as Yup from "yup";
const phoneNumberDigits =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginFormValidation = Yup.object({
    username: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required"),
});

export const addCompanyFormValidation = Yup.object({
    name_en: Yup.string().required("Company name is required"),
    contact_person_name_en: Yup.string().required(
        "Contact person name is required"
    ),
    country_id: Yup.string().required("Select country"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password1: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    password2: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password1"), null], "Passwords must match"),
    phone_no: Yup.string().matches(
        phoneNumberDigits,
        "Phone number is not valid"
    ),
    is_active: Yup.string().required("Select status"),
    license_start_date: Yup.string().required(
        "License information is required"
    ),
    license_end_date: Yup.string().required("License information is required"),
    users_limit: Yup.string().required("User limit is required"),
    branches_limit: Yup.string().required("Branch limit is required"),
});
