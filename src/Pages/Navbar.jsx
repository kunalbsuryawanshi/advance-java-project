import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import InNavbar from "./InNavbar";
import { Link } from "react-router-dom";

function NewNavbar() {
  return (
    <Navbar bg="ps-3 pe-1 shadow" data-bs-theme="info-subtle" expand="lg">
      <Navbar.Brand as={Link} to={"/HomeBody"}>
        <a className="navbar-brand d-lg-block d-sm-none d-none ">
          <img
            className="img-fluid"
            src="https://www.cdac.in/img/cdac-logo.png"
            alt="cdac-logo.png"
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link className=" me-2" as={Link} to={"/home"}>
            Home
          </Nav.Link>

          <Nav.Link className=" me-2" as={Link} to={"/aboutus"}>
            About Us
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/studentlogin"}>
            Student Login
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/facultylogin"}>
            Faculty Login
          </Nav.Link>
          <Nav.Link className=" me-2" as={Link} to={"/courses"}>
            Courses
          </Nav.Link>
          <Nav.Link>
            <input
              className="btn bg-danger shadow rounded-pill text-light"
              type="button"
              value="Log Out"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewNavbar;
