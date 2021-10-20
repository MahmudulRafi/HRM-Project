import http from "./http.service";
const apiUrl = "http://localhost:5000/Employees";

export function getEmployees() {
    return http.get(apiUrl);
}

export function getEmployeeById(employeeID) {
    return http.get(`${apiUrl}/${employeeID}`);
}

export function addEmployee(employee) {
    return http.post(apiUrl, employee);
}

export function updateEmployee(employeeID, employee) {
    return http.put(`${apiUrl}/${employeeID}`, employee);
}

export function deleteEmployee(employeeID) {
    return http.delete(`${apiUrl}/${employeeID}`);
}
