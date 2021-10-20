import { updateEmployee } from "../../services/employee.service";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import React from "react";
import CustomToast from "../../utility/CustomToast";

function UpdateEmployee() {
    const handleUpdate = async (event) => {
        event.preventDefault();

        const employee = {
            employeeID: event.target.employeeID.value,
            name: event.target.name.value,
            address: event.target.address.value,
            designation: event.target.designation.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            salary: event.target.salary.value,
        };

        await updateEmployee(this.props.employeeId, employee);
        this.props.onHide();
        CustomToast.info("Updated Successfully");
    };

    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <br />
                    <Form onSubmit={handleUpdate}>
                        <Row className="g-2">
                            <Col md>
                                <div class="mb-3">
                                    <Form.Group controlId="employeeID">
                                        <Form.Label>Employee ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="employeeID"
                                            required
                                            disabled
                                            defaultValue={this.props.employeeId}
                                        />
                                    </Form.Group>
                                </div>
                                <div class="mb-3">
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            required
                                            defaultValue={this.props.name}
                                            placeholder="Name"
                                        />
                                    </Form.Group>
                                </div>
                                <div class="mb-3">
                                    <Form.Group controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            required
                                            defaultValue={this.props.address}
                                            placeholder="Address"
                                        />
                                    </Form.Group>
                                </div>
                                <div class="mb-3">
                                    <Form.Group controlId="designation">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="designation"
                                            required
                                            defaultValue={
                                                this.props.designation
                                            }
                                            placeholder="Designation"
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col md>
                                <div class="mb-3">
                                    <Form.Group controlId="phone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            required
                                            defaultValue={this.props.phone}
                                            placeholder="Phone"
                                        />
                                    </Form.Group>
                                </div>
                                <div class="mb-3">
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            required
                                            defaultValue={this.props.email}
                                            placeholder="Email"
                                        />
                                    </Form.Group>
                                </div>
                                <div class="mb-3">
                                    <Form.Group controlId="salary">
                                        <Form.Label>Salary</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="salary"
                                            required
                                            defaultValue={this.props.salary}
                                            placeholder="Salary"
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                        <div class="mb-3">
                            <Form.Group>
                                <div className="d-grid gap-2">
                                    <Button
                                        className="btn btn-dark btn-md btn-block"
                                        type="submit"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}

export default UpdateEmployee;
