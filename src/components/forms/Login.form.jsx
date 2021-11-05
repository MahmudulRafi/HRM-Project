import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginFormValidation } from "./Validation.schema";
import { login } from "../../services/User.service";

function LoginForm() {
    const history = useHistory();
     
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={loginFormValidation}
            onSubmit={async (values, actions) => {
                login(values);

                actions.setSubmitting(false);
            }}
        >
            {(formikProps) => (
                <div>
                    <Form onSubmit={formikProps.handleSubmit}>
                        <div class="form-group">
                            <label style={{ color: "#8d448b" }}>
                                &nbsp;Username
                            </label>
                            <Field
                                className={
                                    formikProps.errors.username &&
                                    formikProps.touched.username
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                type="text"
                                id="username"
                                name="username"
                                placeholder=""
                            />
                            {formikProps.errors.username && (
                                <div className="invalid-feedback">
                                    <ErrorMessage name="username" />
                                </div>
                            )}
                        </div>
                        <div class="form-group">
                            <label style={{ color: "#8d448b" }}>
                                &nbsp;Password
                            </label>
                            <Field
                                className={
                                    formikProps.errors.password &&
                                    formikProps.touched.password
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                type="password"
                                id="password"
                                name="password"
                                placeholder=""
                            />
                            {formikProps.errors.password && (
                                <div className="invalid-feedback">
                                    <ErrorMessage name="password" />
                                </div>
                            )}
                        </div>
                        <div className="form-group d-md-flex">
                            <label className="checkbox-wrap checkbox-primary">
                                Remember Me
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark" />
                            </label>
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary rounded submit p-3 px-5"
                            >
                                Get Started
                            </button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
}

export default LoginForm;
