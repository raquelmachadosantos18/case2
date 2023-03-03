import React from 'react';
import './Rodape.css'
import {
  MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon 
} from 'mdb-react-ui-kit';
//import facebook from '../assets/icons/facebook.png'
//import instagram from '../assets/icons/intagram.png'
//import twitter from '../assets/icons/twitter.png'
//import gmail from '../assets/icons/gmail.png'
//import linkedin from '../assets/icons/linkedin.png'
//import logo from '../pages/img/logo/logo5.png'

function Footer() {
  return (
    <MDBFooter className='Footer' fixed='top'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conecte-se conosco nas redes sociais:</span>
        </div>

        {/* <div>
          <a href='' className='me-4 text-reset'>
          <img src={facebook} />
          </a>
          <a href='' className='me-4 text-reset'>
          <img src={instagram} />
          </a>
          <a href='' className='me-4 text-reset'>
          <img src={twitter} />
          </a>
          <a href='' className='me-4 text-reset'>
          <img src={gmail} />
          </a>
          <a href='' className='me-4 text-reset'>
          <img src={linkedin} />
          </a>
        </div> */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* <div>
            <MDBCol  lg='4' xl='3' className='mx-auto mb-4'>
            <img className='logo' src={logo} width='450' /><br/>
          
            </MDBCol>
            </div>
            */}
           

            <div class="container text-center">
  <div class="diz">
    
    
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
  </div>
</div>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
