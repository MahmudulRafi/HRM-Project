import { addEmployee } from "../../services/employee.service";
import { Modal, Row, Col, Button, Form } from "react-bootstrap";
import React from "react";
import CustomToast from "../../utility/CustomToast";

function AddEmployee() {
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const employee = {
            name: event.target.name.value,
            address: event.target.address.value,
            designation: event.target.designation.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            salary: event.target.salary.value,
        };
        await addEmployee(employee);
        this.props.onHide();
        CustomToast.success("Successfully Added");
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
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Form onSubmit={handleSubmit}>
                        <Row className="g-2">
                            <Col md>
                                <div class="mb-3">
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            required
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
                                        />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <div class="mb-3">
                            <Form.Group>
                                <div className="d-grid gap-2">
                                    <Button
                                        className="btn btn-dark btn-md btn-block"
                                        type="submit"
                                    >
                                        Save
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

export default AddEmployee;
