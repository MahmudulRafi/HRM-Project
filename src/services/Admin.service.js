import http from "./Http.service";
import CustomToast from "../utility/CustomToast";
const apiUrl = "http://localhost:5000";
const accessToken = localStorage.getItem("accessToken");

export async function addCompany(data) {
    try {
        const response = await http.post(`${apiUrl}/admin/add-company`, data, {
            headers: { authorization: "Bearer " + accessToken },
        });
        CustomToast.success("Company Added Successfully");
        return Promise.resolve(response);
    } catch (error) {
        CustomToast.error(error.response.data.message);
        return Promise.reject(error);
    }
}

export async function getCompanyInfo(company) {
    try {
        const { data } = await http.post(
            `${apiUrl}/admin/one-company-info`,
            company,
            { headers: { authorization: "Bearer " + accessToken } }
        );
        return Promise.resolve(data.user);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getCompaniesInfo(admin_id) {
    try {
        const { data } = await http.post(
            `${apiUrl}/admin/all-company-info`,
            admin_id,
            { headers: { authorization: "Bearer " + accessToken } }
        );
        return Promise.resolve(data.companies);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function updateCompanyInfo(data) {
    try {
        const response = await http.post(
            `${apiUrl}/admin/update-company-info`,
            data,
            { headers: { authorization: "Bearer " + accessToken } }
        );
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error);
    }
}
