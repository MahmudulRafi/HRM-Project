import React, { useState, useEffect } from "react";
import { getEmployees, deleteEmployee } from "../../services/employee.service";
import { Button } from "react-bootstrap";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import DetailEmployee from "./DetailEmployee";
import CustomToast from "../../utility/CustomToast";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [updateModalShow, setUpateModalShow] = useState(false);
    const [detailModalShow, setDetailModalShow] = useState(false);

    useEffect(() => {
        refreshList();
    });

    async function refreshList() {
        const { data: employees } = await getEmployees();
        setEmployees(employees);
    }

    const handleDelete = async (employeeID) => {
        const response = window.confirm("Would like to delete? ");

        if (response) {
            await deleteEmployee(employeeID);
            const employeesList = employees;
            const updatedEmployeeList = employeesList.filter(
                (employee) => employee.employeeID !== employeeID
            );
            setEmployees(updatedEmployeeList);
            CustomToast.error("Deleted Succesfully");
        }
    };

    const [employeeID, setEmployeeID] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [designation, setDesignation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");

    const addModalClose = () => setAddModalShow(false);
    const updateModalClose = () => setUpateModalShow(false);
    const detailModalClose = () => setDetailModalShow(false);

    return (
        <>
            <div className="container">
                <br />

                <Button
                    variant="success"
                    style={{ outline: "none", boxShadow: "none" }}
                    onClick={() => setAddModalShow(true)}
                >
                    Add Employee
                </Button>
                <br />
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.employeeID}>
                                <th scope="row">{employee.name}</th>
                                <td>{employee.designation}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setDetailModalShow(true);
                                            setEmployeeID(employee.employeeID);
                                            setName(employee.name);
                                            setAddress(employee.address);
                                            setDesignation(
                                                employee.designation
                                            );
                                            setPhone(employee.phone);
                                            setEmail(employee.email);
                                            setSalary(employee.salary);
                                        }}
                                        className="btn btn-warning mr-1"
                                        style={{
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-file-earmark-person-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setUpateModalShow(true);
                                            setEmployeeID(employee.employeeID);
                                            setName(employee.name);
                                            setAddress(employee.address);
                                            setDesignation(
                                                employee.designation
                                            );
                                            setPhone(employee.phone);
                                            setEmail(employee.email);
                                            setSalary(employee.salary);
                                        }}
                                        className="btn btn-dark"
                                        style={{
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                            />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(employee.employeeID)
                                        }
                                        className="btn btn-danger"
                                        style={{
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddEmployee // Add Employee Popup Modal
                show={addModalShow}
                onHide={addModalClose}
            />

            <UpdateEmployee // update Employee Popup Modal
                employeeId={employeeID}
                name={name}
                address={address}
                designation={designation}
                phone={phone}
                email={email}
                salary={salary}
                show={updateModalShow}
                onHide={updateModalClose}
            />
            <DetailEmployee // Employee Details Popup Modal
                employeeId={employeeID}
                name={name}
                address={address}
                designation={designation}
                phone={phone}
                email={email}
                salary={salary}
                show={detailModalShow}
                onHide={detailModalClose}
            />
        </>
    );
}

export default Employees;
