import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { App, MyModal } from "../modal/ContactenosModal";
import { MyVerticallyCenteredModal, Appr } from "../modal/Modal";
import Perfil from "../perfiles/Perfil";

function Navb() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TraderPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/QuienesSomos">Quienes somos</Nav.Link>
            <NavDropdown title="Contactos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="tel:543814982513">
                Numero
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:alexxxfernandez50@gmail.com">
                Correo
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item>
                <>
                    <a href="#" onClick={() => setModalShow(true)}>
                      Ayuda
                    </a>
                  <MyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Appr /> <MyVerticallyCenteredModal />
            <Perfil />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
