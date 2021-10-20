import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./common/Navbar.component";
import Employees from "./components/employee/Employees";
import { ToastContainer } from "react-toastify";
import Header from "./components/Template/Header.template";
import Footer from "./components/Template/Footer.template";
import Menu from "./components/Template/Menu.template";
import Dashboard from "./components/Template/Dashboard.template";
import Login from "./components/login.component";

function App() {
    return (
        <div class="wrapper">
            <Header />
            <Menu />
            <div className="content-wrapper">
                <ToastContainer />
                <Switch>
                    <Route>
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        {/* <Route path="/employees" component={Employees} /> */}
                        {/* <Route exact path="/" component={Employees} /> */}
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
