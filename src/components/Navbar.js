import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import cartICO from "../assets/images/cart.png";
import { useSelector } from "react-redux";

export default function Navol() {
  
  const cart = useSelector(state => state.cart)

  return (
    <Navbar expand="lg" fixed="top">
      <Container className="sec-padding">
        <Navbar.Brand>
          <div className="r-logo">
            <span className="car-hand"></span>R
          </div>
          eactommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} to="cart" className="cartICOLink">
                <img src={cartICO} className="cartICO" />
                <span className="num-of-cart-items">{cart.length}</span>
              </Nav.Link>
            </Nav.Item>
            <div className="nav-links-holder">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="cart">
                  Cart
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Go to" id="basic-nav-dropdown">
                <NavDropdown.Item href="#deals">Deals</NavDropdown.Item>
                <NavDropdown.Item href="#products">Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  My Account
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
