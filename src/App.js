import "./App.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./common/Protected.route";
import Login from "../src/components/template/Login.template";
import { Redirect, Route, Switch } from "react-router";
import UserDashboard from "./UserDashboard";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/" component={UserDashboard} />
            </Switch>
        </div>
    );
}

export default App;
