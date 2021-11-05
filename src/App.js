import "./App.css";
import ProtectedRoute from "./common/Protected.route";
import { Redirect, Route, Switch } from "react-router";
import Login from "./components/authentication/Login.component";
import Logout from "./components/authentication/Logout.component";
import Home from "./Home";
import { useEffect, useState } from "react";

function App() {
    // const [isAuthenticated, setAuthenticated] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem("accessToken")) {
    //         setAuthenticated(true);
    //     } else {
    //         setAuthenticated(false);
    //     }
    // }, []);

    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                {/* <Route exact path="/">
                    {isAuthenticated ? (
                        <Redirect path="/" />
                    ) : (
                        <Login setAuthenticated={setAuthenticated} />
                    )}
                </Route> */}
                <ProtectedRoute path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default App;
