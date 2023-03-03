import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import logo from '../pages/img/logo.icon/logo.png'
import '../components/css.menu/Menu.css'



export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>

      <MDBNavbar expand='lg' light style={{ backgroundColor: '#3B5044' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/"><img src={logo} width="200px"/></MDBNavbarBrand>
          <MDBNavbarToggler 
          className='burguer'
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            backgroundColor='black'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar className='me-auto'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/">Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/quartos">Quartos</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/eventos">Eventos</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/sobre">Sobre</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/contato">Contato</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}