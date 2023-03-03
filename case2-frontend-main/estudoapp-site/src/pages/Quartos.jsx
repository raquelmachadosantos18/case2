import { React, useState} from 'react';
import '../pages/Quartos.css';

import banheira1 from '../pages/img/quarto-1/banheira_quarto1.jpg'
import cama1 from '../pages/img/quarto-1/cama_quarto1.jpg'
import rede1 from '../pages/img/quarto-1/rede_quarto1.jpg'
import vista1 from '../pages/img/quarto-1/vista_quarto1.jpg'
import banheira2 from '../pages/img/quarto-2/banheira_quarto2.jpg'
import cama2 from '../pages/img/quarto-2/cama_quarto2.jpg'
import rede2 from '../pages/img/quarto-2/rede_quarto2.jpg'
import vista2 from '../pages/img/quarto-2/vista_quarto2.jpg'
import banheira3 from '../pages/img/quarto-3/banheira_quarto3.jpg'
import cama3 from '../pages/img/quarto-3/cama_quarto3.jpg'
import rede3 from '../pages/img/quarto-3/rede_quarto3.jpg'
import vista3 from '../pages/img/quarto-3/vista_quarto3.jpg'
import banheira4 from '../pages/img/quarto-4/banheira_quarto4.jpg'
import cama4 from '../pages/img/quarto-4/cama_quarto4.jpg'
import rede4 from '../pages/img/quarto-4/rede_quarto4.jpg'
import vista4 from '../pages/img/quarto-4/vista_quarto4.jpg'


import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol, MDBCarousel,
  MDBCarouselItem,
  MDBFooter,
  MDBContainer,
  
 
 } from 'mdb-react-ui-kit';

 function Quartos() {

 
  return (
    <>
    
    <div className='quarto'>
    <h1>Acomodações</h1>
    <br/>
    
    
    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-0 meu'>
        <MDBCol md='4'>
        <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={banheira1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={cama1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={rede1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={vista1}
        alt='...'
      />
    </MDBCarousel>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>SUITE 01</MDBCardTitle>
            <MDBCardText>
            Nossa SUITE 03 irá lhe proporcionar momentos de conforto e prazer. Para o seu conforto ele possui tv LCD de 32 polegadas, frigobar, som ambiente, lareira, ar-condicionado, internet wi-fi, box blindex e aquecimento central de água.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    
    <br/>

    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-0 meu'>
      <MDBCol md='7'>
          <MDBCardBody>
            <MDBCardTitle>SUITE 02</MDBCardTitle>
            <MDBCardText>
            Nossa SUITE 02 é simples, aconchegante e oferece ótima relação custo benefício. Para o seu conforto ele possui Tv LCD de 32, frigobar, som ambiente, varanda com rede, ar-condicionado, internet wi-fi, box blindex e aquecimento central de água.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='4'>
        <MDBCarousel showControls>
        <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={banheira2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={cama2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={rede2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={vista2}
        alt='...'
      />
    </MDBCarousel>
        </MDBCol>
        
      </MDBRow>
    </MDBCard>
    
    <br/>
    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-0 meu'>
        <MDBCol md='4'>
        <MDBCarousel showControls>
        <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={banheira3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={cama3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={rede3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={vista3}
        alt='...'
      />
    </MDBCarousel>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>SUITE 03</MDBCardTitle>
            <MDBCardText>
            Nossa SUITE 03 irá lhe proporcionar momentos de conforto e prazer. Para o seu conforto ele possui tv LCD de 32 polegadas, frigobar, som ambiente, lareira, ar-condicionado, internet wi-fi, box blindex e aquecimento central de água.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    
    <br/>
    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-0 meu'>
        
        <MDBCol md='7'>
          <MDBCardBody>
            <MDBCardTitle>SUITE 04</MDBCardTitle>
            <MDBCardText>
            Nossa SUITE 04 irá lhe proporcionar momentos de conforto e prazer. Para o seu conforto ele possui tv LCD de 32 polegadas, frigobar, som ambiente, lareira, varanda com rede, ar-condicionado, internet wi-fi, box blindex e aquecimento central de água.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='4'>
        <MDBCarousel showControls>
        <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={banheira4}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={cama4}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={rede4}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={vista4}
        alt='...'
      />
    </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    
    
    </div>

    <br/>

     <MDBFooter className='text-center text-lg-left  host'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h3 className='text-uppercase'>Dias de semana</h3>
            <h4>Hospedagem com check-in de domingo á quinta-feira</h4>
            <h4> Diária para duas  pessoas R$850,00</h4>
            <h4>Hóspede adicional R$120,00  POR DIA </h4>
            <h4>Crianças até 6 anos R$0,00 (NÃO PAGAM)</h4>
            <h4>Pet de pequeno e médio porte R$120 por pet</h4>
            <h4><strong>HOSPEDAGEM MÍNIMA DE DUAS NOITES</strong></h4>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h3 className='text-uppercase'>Finais de semana</h3>
            <h4>hospedagem com check-in de sexta à sabado e feriados</h4>
            <h4>
            Diaria para  duas  pessoas R$970,00
            </h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </>
  );
}

export default Quartos;