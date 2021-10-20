import React from "react";

function Login() {
    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o" />
                                </div>
                                <h3 className="text-center mb-4">ERP LOGIN</h3>
                                <form action="#" className="login-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control rounded-left"
                                            placeholder="Username"
                                            required
                                        />
                                    </div>
                                    <div className="form-group d-flex">
                                        <input
                                            type="password"
                                            className="form-control rounded-left"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50">
                                            <label className="checkbox-wrap checkbox-primary">
                                                Remember Me
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded submit p-3 px-5"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
