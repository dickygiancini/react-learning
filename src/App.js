import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
