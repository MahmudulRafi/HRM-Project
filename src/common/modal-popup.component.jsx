import React from "react";
import { Modal } from "react-bootstrap";

function ModalPopup() {
    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Title
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>body</Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}

export default ModalPopup;
