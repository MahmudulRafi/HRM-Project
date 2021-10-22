import { logout } from "../../services/User.service";
import React, { useEffect } from "react";
import { getCurrentUser } from "../../services/User.service";

function Logout() {
    useEffect(() => {
        logout(getCurrentUser.email);
        localStorage.removeItem("accessToken");
        window.location = "/login";
    });
    return null;
}

export default Logout;
