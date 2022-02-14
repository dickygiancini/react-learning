import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>...</span>
        <button className="btn" onClick={openModalHandler}>Delete</button>
      </div>
      { modalIsOpen ? <Modal onClick={closeModalHandler} onConfirm={closeModalHandler} /> : null }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
    </div>
  );
}

export default Todo;
