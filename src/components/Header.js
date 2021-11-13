import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
    return (
        <div className="wrapper">
            <div className="multi_color_border"></div>
                <div className="top_nav bg-dark">
                    <div className="left">
                        <div className="logo">
                        <img src="/images/fextralife-logo114.png" alt="fextra" />
                        </div>
                        </div> 
            </div>
                <Navbar bg="bg-secondary"
        sticky="top" expand="sm" collapseOnSelect>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown className="text-uppercase" title="Products">
              <NavDropdown.Item className="active" href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-uppercase" href="#blog">Blog</Nav.Link>
            <Nav.Link className="text-uppercase" href="#about-us">About Us</Nav.Link>
            <Nav.Link className="text-uppercase" href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
    )
}

export default Header
