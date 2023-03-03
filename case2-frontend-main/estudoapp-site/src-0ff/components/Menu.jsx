import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import './Menu.css'
//import logo from '../pages/img/logo/logo5.png'
import React, {useState,} from 'react'; // Navbar Transparente





function Menu() {
// Navbar Transparente
const [navbar, setNavbar] = useState(false);
const changeBackground = () => {
    if(window.scrollY >= 80) {
        setNavbar(true);
    } else{
        setNavbar(false);
    }
}
window.addEventListener('scroll',changeBackground);
//Navbar Transparente 

    return (
        
    <Navbar className={navbar ? 'navbar' : 'navbar active'} fixed="top">
        
            <LinkContainer to="/">
            <MDBNavbarBrand href='#'>
            {/* <img
              src={logo}
              height='100'
              alt=''
              loading='lazy'
            /> */}
          </MDBNavbarBrand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" >
                    <LinkContainer to="/">
                        <Nav.Link className='text-white '>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/quartos">
                        <Nav.Link className='text-white '>Quartos</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/eventos">
                        <Nav.Link className='text-white '>Eventos</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link className='text-white '>Sobre</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link className='text-white '>Contato</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        
    </Navbar>
    
    )
}

export default Menu;
