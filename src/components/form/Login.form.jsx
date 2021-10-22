import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginFormValidation } from "./Validation.schema";
import { login } from "../../services/User.service";

function LoginForm() {
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={loginFormValidation}
            onSubmit={(values, actions) => {
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
                                className="form-control"
                                label="Username"
                                type="text"
                                id="username"
                                name="username"
                                placeholder=""
                            />
                            <div className="custom-validation">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label style={{ color: "#8d448b" }}>
                                &nbsp;Password
                            </label>
                            <Field
                                className="form-control"
                                label="Password"
                                type="password"
                                id="password"
                                name="password"
                                placeholder=""
                            />
                            <div className="custom-validation">
                                <ErrorMessage name="password" />
                            </div>
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
