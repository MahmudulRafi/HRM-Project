import React from "react";

function Login() {
    return (
        <div class="hold-transition login-page">
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <div className="h1">
                            <b>ERP</b>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">
                            Sign in to start your session
                        </p>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            &nbsp; Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <br />
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                >
                                    Sign In
                                </button>
                            </div>
                            <br />
                        </form>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
            {/* /.login-box */}
        </div>
    );
}

export default Login;
