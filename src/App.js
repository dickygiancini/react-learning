import { Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourite from "./pages/Favourite";
import NewMeetups from "./pages/NewMeetup";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    // <Container>
    //   <Route path="/">
    //     <AllMeetups></AllMeetups>
    //   </Route>
    //   <Route path='/new-meetup'>
    //     <NewMeetups></NewMeetups>
    //   </Route>
    //   <Route path='/favourite'>
    //     <Favourite></Favourite>
    //   </Route>
    // </Container>
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">All Meetups</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/new-meetup">New Meetups</Nav.Link>
            <Nav.Link href="/favourite">Favourite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default App;
