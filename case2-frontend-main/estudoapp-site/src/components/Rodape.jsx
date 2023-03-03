import React from 'react';
import '../components/css.menu/Rodape.css'
import {
  MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon 
} from 'mdb-react-ui-kit';
import facebook from '../pages/img/logo.icon/facebook.png'
import instagram from '../pages/img/logo.icon/instagram.png'
import twitter from '../pages/img/logo.icon/twitter.png'
import gmail from '../pages/img/logo.icon/gmail.png'
import logo from '../pages/img/logo.icon/logo.png'
import whatsapp from '../pages/img/logo.icon/whatsapp.png'

function Footer() {
  return (
    <MDBFooter className='Footer' fixed='top'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-4'>

            <div className='logo'>
            <MDBCol lg='4'  className='logo'>
            <img className='logo' src={logo} width='450' /><br/>
            </MDBCol>
            </div> <br/><br/>
            
           

            <div class="container text-center" >
  <div class="diz">
    
    
    <div class="col">
      <div class="p-3">
        <h2>Endereço:</h2>
        <h5>Estrada Philuvio Cerqueira Rodrigues
2875, Itaipava, Petrópolis - RJ,</h5>
        </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2>Contato:</h2>
        <h4><img src={whatsapp} /> (21) 99112-2334 </h4>
        <h4><img src={gmail} /> cantod@gmail.com</h4>
        </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2>Redes Sociais:</h2>
        <h4><a href='https://www.facebook.com'><img src={facebook} />&nbsp;</a>   <a href='https://www.instagram.com'> <img src={instagram}  />&nbsp;&nbsp;</a>   <a href='https://twitter.com'><img src={twitter} /></a></h4></div>
    </div>
  </div>
</div>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Grupo3.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
