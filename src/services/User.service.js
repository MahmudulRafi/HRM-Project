import http from "./Http.service";
import jwtDecode from "jwt-decode";
const apiUrl = "http://localhost:5000";

export async function login(user) {
    try {
        const response = await http.post(`${apiUrl}/user/login`, user);
        window.location = "/";
        localStorage.setItem("accessToken", response.data.info.token);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function logout(email) {
    try {
        const response = await http.post(`${apiUrl}/user/log-out`, email);
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}

export function getCurrentUser() {
    try {
        const accessToken = localStorage.getItem("accessToken");
        console.log(jwtDecode(accessToken));
        return jwtDecode(accessToken);
    } catch (error) {
        return null;
    }
}
