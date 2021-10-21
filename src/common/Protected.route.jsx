import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../services/User.service";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            path={path}
            render={(props) => {
                if (!getCurrentUser()) return <Redirect to="/login" />;
                return <Component {...props} />;
            }}
        />
    );
};

export default ProtectedRoute;
