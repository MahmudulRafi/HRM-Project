import { getCurrentUser, logout } from "../../services/User.service";
import { useEffect } from "react";
import { useHistory } from "react-router";

function Logout() {
    const history = useHistory();
    useEffect(() => {
        const email = getCurrentUser().email;
        const userEmail = { email: email };
        logout(userEmail);
        history.push("/login");
    });
    return null;
}

export default Logout;
