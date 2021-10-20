import React from "react";
import { Modal } from "react-bootstrap";

function DetailEmployee() {
    const handleModalClose = () => {
        this.props.onHide();
    };

    return (
        <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Employee Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div style={{ textAlign: "left" }}>
                        <h5>
                            <kbd> Employee ID</kbd> :{this.props.employeeId}
                        </h5>

                        <h5>
                            <kbd> Name</kbd> : {this.props.name}
                        </h5>
                        <h5>
                            <kbd> Address</kbd> : {this.props.address}
                        </h5>
                        <h5>
                            <kbd> Designation</kbd> :{this.props.designation}
                        </h5>
                        <h5>
                            <kbd> Phone</kbd> : {this.props.phone}
                        </h5>
                        <h5>
                            <kbd> Email</kbd> : {this.props.email}
                        </h5>
                        <h5>
                            <kbd> Salary</kbd> : {this.props.salary}
                        </h5>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default DetailEmployee;
