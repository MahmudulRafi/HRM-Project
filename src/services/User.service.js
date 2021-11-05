import http from "./Http.service";
import jwtDecode from "jwt-decode";
import CustomToast from "../utility/CustomToast";
import { createBrowserHistory } from "history";
const apiUrl = "http://localhost:5000";

export async function login(user) {
    try {
        const response = await http.post(`${apiUrl}/user/login`, user);
        localStorage.setItem("accessToken", response.data.info.token);
        localStorage.setItem("userRole", response.data.info.role);
        window.location = "/";
        return Promise.resolve(response);
    } catch (error) {
        CustomToast.error(error.response.data.message);
        return Promise.reject(error);
    }
}

export async function logout(userEmail) {
    try {
        const response = await http.post(`${apiUrl}/user/log-out`, userEmail);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userRole");

        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}

export function getCurrentUser() {
    try {
        const accessToken = localStorage.getItem("accessToken");
        return jwtDecode(accessToken);
    } catch (error) {
        return null;
    }
}

export function getUserRole() {
    try {
        const userRole = localStorage.getItem("userRole");
        return parseInt(userRole);
    } catch (error) {
        return null;
    }
}

export async function getAllCountries() {
    try {
        const { data } = await http.get(`${apiUrl}/user/all-countries`);
        return Promise.resolve(data.countries);
    } catch (error) {
        return Promise.reject(error);
    }
}
