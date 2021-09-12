import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarRB } from './Components/navbar/NavbarRB';
import { Container } from 'react-bootstrap';
import Footer from './Components/footer/Footer';
import Memes from './Components/Memes';
import Login from './Components/pages/Login';
import Perfil from './Components/pages/Perfil';
import Admin from './Components/pages/Admin';
import { useState } from 'react';

// siempre que necesitemos cambio en pantalla, necesitamos usar estados. UseState - y con setSection hacemos participe al ususario (funcion que actualiza)

const memes = [
  { image:'', title: ''},
  { image:'', title: ''},
  { image:'', title: ''},
]

function App() {

  const [section, setSection] = useState('memes')
  return (
    <div className="footer-fix">
      {/* usamos la navbar como actualizadora de estados  */}
      <NavbarRB setSection={setSection}/>
      <Container>
        {section === 'memes' && <Memes memes={memes} />}
        {section === 'login' && <Login />}
        {section === 'perfil' && <Perfil />}
        {section === 'admin' && <Admin />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
