import './assets/css/main.css'

import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Rotas from './routes/Rotas.jsx'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

function App() {
    
    return (
       
        <div className="App">
        
            <Menu />
            <Rotas />
            <Rodape />
        </div>
    )
}

export default App