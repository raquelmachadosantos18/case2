[]
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../pages/Sobre.css'
import cabana2 from '../pages/img/card/card2.jpg';
import quitandinha from '../pages/img/card/card3.jpg';
import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';


function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <>

<Container className='conteudo-margin'>
        <Row>


<div class="container text-center">
  <div class="row">
    <div class="col-sm-6">
    <div class="col-sm-12"><h2>Sobre a Pousada Canto da Serra</h2></div>
     <div class="p-1">
      
      <p>A Pousada Canto da Serra possui uma ótima localização, está no coração da cidade imperial, que possui uma beleza singular, é o destino certo de centenas de pessoas que procuram natureza, tranquilidade e requinte.
A Pousada Canto da Serra se encaixa perfeitamente neste cenário, um lugar aconchegante cheio de charme, rodeado de natureza e um clima super agradável. A pousada dispõe de 21 suítes, sendo a melhor opção para descanso, passeio e viagens de negócios. Aqui você desfruta de tranquilidade e sofisticação ao mesmo tempo.
Nosso principal objetivo é fazer com que você se sinta especial, que consiga se conectar com o charme da Serra. Além disso, nossas suítes são totalmente equipadas para deixar você ainda mais à vontade. Com toda a certeza um lugar que você vai desejar voltar sempre que puder.
A Pousada é Pet Friendly!</p>
</div>
</div>
  <div class="col-sm-6"><img src={cabana2} width="450px"/></div>
   </div>
    </div>
<div class="container text-center">
  <div class="row">
    <div class="col-sm-6"><img src={cabana2} width="450px"/></div>
     <div class="col-sm-6">
     <div class="p-1">
      <p>Com características exclusivas, confortáveis e bem equipadas, nossas suítes são perfeitas para uma viagem de negócio, em família ou grupo. Esperam por você o conforto e equipamentos de qualidade: TV, Wifi, Secador de cabelo, Ar-condicionado, Aquecedor, Estacionamento gratuito.
      A Pousada Canto da Serra conta com uma localização privilegiada, bem no coração da Cidade Imperial.</p>
      </div>
</div>
  </div>
</div>



<div class="container text-center">
  <div class="row2">
    <div class="col-sm-6">
    <div class="col-sm-12"><h2>Sobre Petrópolis</h2></div>
     <div class="p-1">
      <p> Petrópolis é uma cidade que fica localizada no Parque Nacional da Serra dos Órgãos, conhecida não só pela biodiversidade, mas também por ser uma das poucas cidades do Brasil que pode ser considerada um Museu a céu aberto. Com um clima ameno, a Cidade Imperial era a rota preferida de Dom Pedro II para seus momentos de lazer e repouso.  
       Petrópolis conta com mais de 20 pontos turísticos em torno da cidade e alguns dos seus principais ficam a minutos da Pousada Catedral, como o Museu Imperial que também é conhecido como Palácio Imperial, que está instalado no antigo Palácio de Verão do imperador Dom Pedro II. A catedral São Pedro de Alcântara, Palácio de Cristal e outros.</p>
</div>
</div>
  <div class="col-sm-6"><img src={quitandinha} width="450px"/></div>
   </div>
    </div>

    <div class="container text-center">  
    <div class="equipediv"> 
    <div class="col-sm-12"><h2>Conheça a nossa Equipe</h2></div> 
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
  
    <div class="col">
      <div class="p-3"><h4><img class="equipe" src={quitandinha} width="150px"/>Fulado de Tal </h4><p>Pessoa Co-facilitadora</p></div>
    </div>
    <div class="col">
      <div class="p-3"><img class="equipe" src={quitandinha} width="150px"/><h4>Fulado de Tal </h4><p>Pessoa Gestora de Conhecimento</p></div>
    </div>
    <div class="col">
      <div class="p-3"><img class="equipe" src={quitandinha} width="150px"/><h4>Fulado de Tal </h4><p>Pessoa Gestora de Gente e Engajamento</p></div>
    </div>
    <div class="col">
      <div class="p-3"><img class="equipe" src={quitandinha} width="150px"/><h4>Fulado de Tal </h4><p>Pessoa Colaboradora I</p></div>
    </div>
    <div class="col">
      <div class="p-3"><img class="equipe" src={quitandinha} width="150px"/><h4>Fulado de Tal </h4><p>Pessoa Colaboradora II</p></div>
      </div> 
    </div>
  </div>
</div>
    

 </Row>

    
    
        
            <h1>Sobre</h1>
            <p>{sobre.text}</p>
          
          </Container>

        </>

    );
}

export default Sobre