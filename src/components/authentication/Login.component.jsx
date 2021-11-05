import React from "react";
import { Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import LoginForm from "../forms/Login.form";

function Login() {
    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    <ToastContainer
                        progressClassName="toastProgress"
                        bodyClassName="toastBody"
                    />
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o" />
                                </div>
                                <h3 className="text-center mb-4">USER LOGIN</h3>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
