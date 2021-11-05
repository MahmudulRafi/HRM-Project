import React from "react";
import Header from "./components/template/Header.template";
import Menu from "./components/template/Menu.template";
import Dashboard from "./components/template/Dashboard.template";
import Footer from "./components/template/Footer.template";
import { Switch } from "react-router";
import ProtectedRoute from "./common/Protected.route";
import { AddCompany } from "./components/admin/AddCompany.component";
import { Company } from "./components/admin/Company.component";
import { Companies } from "./components/admin/Companies.component";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <Switch>
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute path="/add-company" component={AddCompany} />
                <ProtectedRoute path="/company/:username" component={Company} />
                <ProtectedRoute path="/companies" component={Companies} />
            </Switch>
            <Footer />
        </div>
    );
}
export default Home;
