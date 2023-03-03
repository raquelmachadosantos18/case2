import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'
import '../pages/Funcionalidades.css'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../pages/img/eventos/slide1.jpg'
import slide2 from '../pages/img/eventos/slide2.jpg'
import slide3 from '../pages/img/eventos/slide3.jpg'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if(!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <>
         <Carousel variant="dark" className='minha'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Slide incrível"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Outro slide incrível"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Último slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
        
        <Container className="minha conteudo-margin mp-5">
            <h1>Eventos</h1>
            <ListaFuncionalidades funcionalidades={funcionalidades} />
        </Container>
        </>
    );
}

export default Funcionalidades