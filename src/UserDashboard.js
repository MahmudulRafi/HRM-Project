import React from "react";
import Header from "./components/template/Header.template";
import Menu from "./components/template/Menu.template";
import Dashboard from "./components/template/Dashboard.template";
import Footer from "./components/template/Footer.template";

function UserDashboard() {
    return (
        <div>
            <Header />
            <Menu />
            <Dashboard />
            <Footer />
        </div>
    );
}
export default UserDashboard;
