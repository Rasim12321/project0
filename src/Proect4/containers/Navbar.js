import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navibar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" style={{ marginBottom: "30px" }}>
        <Container>
          <Navbar.Brand href="/">Continents</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
