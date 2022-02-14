import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Card, Button, Col } from "react-bootstrap";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
      <Col md={6}>
        <Card>
          <Card.Body>
            <h2>{props.text}</h2>
            <div className="actions">
              <Button variant="danger" onClick={openModalHandler}>
                Delete
              </Button>
            </div>
            {modalIsOpen && (
              <Modal
                onClick={closeModalHandler}
                onConfirm={closeModalHandler}
              />
            )}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
          </Card.Body>
        </Card>
      </Col>
  );
}

export default Todo;
