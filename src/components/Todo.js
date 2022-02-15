import { useState } from "react";
// import Modal from "./Modal";
// import Backdrop from "./Backdrop";
import { Card, Button, Col, Modal } from "react-bootstrap";

function Todo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={6}>
      <Card>
        <Card.Body>
          <h2>{props.text}</h2>
          <div className="actions">
            <Button variant="danger" onClick={handleShow}>
              Delete
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure?</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Todo;
