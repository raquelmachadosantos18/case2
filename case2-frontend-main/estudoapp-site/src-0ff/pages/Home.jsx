import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import slide1 from '../pages/img/Slide/slide1.jpg'
import slide2 from '../pages/img/Slide/slide2.jpg'
import slide3 from '../pages/img/Slide/slide3.jpg'
import card1 from '../pages/img/card/card1.jpg'
import card2 from '../pages/img/card/card2.jpg'
import card5 from '../pages/img/card/card5.jpg'
import card6 from '../pages/img/card/card6.jpg'
import Card from 'react-bootstrap/Card';

import {MDBCarousel, MDBCarouselItem,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,MDBIcon
   } from 'mdb-react-ui-kit';


function Home() {
    return (
        <>
         {/* CARROSEL */}
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100d-block'
        itemId={1}
        src={slide1}
        alt='...'
        
      />
      <MDBCarouselItem
        className='w-100d-block'
        itemId={2}
        src={slide2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100d-block'
        itemId={3}
        src={slide3}
        alt='...'
      />
    </MDBCarousel>


   

    <br/>

<hr></hr>
<h1>Canto da serra</h1>


    <div>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol>
        <MDBCard>
        <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
           </MDBCardBody>
           <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/044.webp' alt='...' position='top'/>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>

    <br/>

    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Renovar as energias</MDBCardTitle>
          </MDBCardBody>
          <MDBCardImage
            src={card1}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Paz e silêncio</MDBCardTitle>
          </MDBCardBody>
          <MDBCardImage
            src={card2}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Um banho de natureza</MDBCardTitle>
          </MDBCardBody>
           <MDBCardImage
            src={card5}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Um baquete para os sentidos</MDBCardTitle>
          </MDBCardBody>
          <MDBCardImage
            src={card6}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <br/>

    <div>
    <MDBIcon fab icon="accessible-icon" />
    
    </div>

    <br/>



            <Container>
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;