import React from 'react';
import '../pages/Home.css';
import slide1 from '../pages/img/Slide/slide1.png';
import slide2 from '../pages/img/Slide/slide2.png';
import slide3 from '../pages/img/Slide/slide3.png';
import foto1 from '../pages/img/home/foto1.png';
import foto2 from '../pages/img/home/foto2.jpg';
import cafe from '../pages/img/home/cafe.jpg';
import exercicio from '../pages/img/home/exercicio.jpg';
import energia from '../pages/img/home/energia.jpg';
import natureza from '../pages/img/home/natureza.jpg';
import diversao from '../pages/img/home/diversao.jpg';
import massagem from '../pages/icons/massagem.png';
import piscina from '../pages/icons/piscina.png';
import restaurante from '../pages/icons/restaurante.png';
import academia from '../pages/icons/academia.png';
import wifi from '../pages/icons/wifi.png';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBRow,
  MDBFooter,
  MDBContainer,
  MDBCol 
} from 'mdb-react-ui-kit';


function Home() {
return (
  <>
<MDBCarousel className='car' showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={slide1}
        alt='...'
      >
        <h5>Curta momentos inesquecíveis</h5>
        <p></p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={slide2}
        alt='...'
      >
        <h5>Se conecte com a Natureza</h5>
        <p></p>
      </MDBCarouselItem>

      <MDBCarouselItem    
        className='w-100 d-block'
        itemId={3}
        src={slide3}
        alt='...'
      >
        <h5>Contemple a Serra conosco</h5>
        <p></p>
      </MDBCarouselItem>
    </MDBCarousel>

   <h1>Canto da serra</h1>
   <hr width="40%" ></hr>

   <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-4"><img src={foto1} width="500px"/></div>
    </div>
    <div class="col">
      <div class="p-3"> A Pousada Canto da Serra é um lugar tranquilo, perfeito para quem deseja relaxar em meio a natureza da região petropolitana. A pousada Canto da Serra promete, traz uma proposta diferenciada de hospedagem em 
Petrópolis / RJ. Além do conforto de nossas acomodações e do delicioso café da manhã, também oferecemos parcerias com eventos sazonais da região.</div>
    </div>
  </div>
</div>

<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">Rodeada pelas Montanhas de Petrópolis e pela exuberante Floresta Atlântica, o Canto da Serra, dispõe de belos quartos com vistas cénicas. Os quartos possuem amplas janelas com 
muita luz, móveis elegantes e decoração rústica. 
Venha se hospedar em nossa pousada e viva dias inesquecíveis com quem você ama! 
Ligue para nós, estamos com preços especiais.</div>
    </div>
    <div class="col">
      <div class="p-4"><img src={foto2} width="500px"/></div>
    </div>
  </div>
</div>




<div class="container text-center">  
    <div class="cards1"> 
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
  
    <div class="col2">
    <div class="p-5"><img class="equipe1" src={natureza} width="180px"/><h4 class="atividade">Comtemple a Natureza</h4></div>
    </div>
    <div class="col2">
      <div class="p-5"><img class="equipe1" src={energia} width="180px"/><h4 class="atividade">Renove as Energias</h4></div>
    </div>
    <div class="col2">
      <div class="p-5"><img class="equipe1" src={cafe} width="180px"/><h4 class="atividade">Se delicie</h4></div>
    </div>
    <div class="col2">
      <div class="p-5"><img class="equipe1" src={exercicio} width="180px"/><h4 class="atividade">Patique exercicios</h4></div>
    </div>
    <div class="col2">
      <div class="p-5"><img class="equipe1" src={diversao} width="180px"/><h4 class="atividade">Se divirta</h4></div>
    </div>
    </div>
  </div>
</div>


     

    

<h2 class="o-que-oferecemos">O que oferecemos</h2>
<hr width="15%" ></hr>


<div className='container1'>
    
        
        <div class="icon col-2" >
        <img src={wifi} />
        <p class="p-1">Wi-fi</p>
        </div>

        <div class="icon col-2" >
        <img src={massagem} />
        <p class="p-1">Massagens</p>
        </div>

        <div class="icon col-2" >
        <img src={piscina} />
        <p class="p-1">Piscina climatizada</p>
        </div>

        <div class="icon col-2" >
        <img src={restaurante} />
        <p class="p-1">Restaurante</p> 
        </div>
        <div class="icon col-2" >
        <img src={academia} />
        <p class="p-1">Academia</p> 
        </div>
        </div>
        <hr width="100%" ></hr>



        <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
      <h5 className='text-uppercase'>Depoimentos</h5>
      <hr width="15%" ></hr>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            

            <p>
            "Gostaria de agradecer a cada colaborador que nos atenderam tão bem nesses dias de descanso. Desde a gerência, ao atendimento no restaurante ou nos quartos todos estão de parabéns. Não mencionarei nomes porque posso esquecer de alguém, mas recebam nossa gratidão por esses dias"
            </p>
            <p>-Maria Aparecida</p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
         

            <p>
            "Pousada excelente com atendimento diferenciado. Cheguei a noite e no caminho pra a pousada liguei pra saber se o restaurente estaria aberto por causa das crianças. Eles falaram que manteriam aberto apenas pra nos receber. Quarto grandes e excelentes para viagem em família. Limpos e arrumados. Recomendo!"
            </p>
            <p>-Antônio José</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

     
    </MDBFooter>
   
   </>






  );
}

export default Home