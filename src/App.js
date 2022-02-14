import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
        <div>
          <h1>Todos</h1>
          <Row>
            <Todo text="Learn React" />
            <Todo text="Master React" />
          </Row>
        </div>
    </Container>
  );
}

export default App;
