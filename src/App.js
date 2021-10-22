import "./App.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./common/Protected.route";
import { Redirect, Route, Switch } from "react-router";
import UserDashboard from "./UserDashboard";
import Login from "./components/auth/Login.component";
import Logout from "./components/auth/Logout.component";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <ProtectedRoute path="/" component={UserDashboard} />
            </Switch>
        </div>
    );
}

export default App;
