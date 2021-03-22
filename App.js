import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</Nav.Link>
      <ReactBootStrap.Nav.Link href="#link">Link</Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

