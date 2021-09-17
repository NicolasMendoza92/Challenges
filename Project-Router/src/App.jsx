import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarRB } from './Components/navbar/NavbarRB';
import { Container } from 'react-bootstrap';
import Footer from './Components/footer/Footer';
import Memes from './pages/Memes';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Admin from './pages/Admin';
import { useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';

// siempre que necesitemos cambio en pantalla, necesitamos usar estados. UseState - y con setSection hacemos participe al ususario (funcion que actualiza)

// cuando arranque la app debe leer de local y mostrame esto, para que cuando actualice no desaparerza, le llamamos 'memes' por que al momento de guardarlo en local tambien le llamamos a la key 'memes'
const memesLocal = leerDeLocalStorage('memes') || [];

function App() {
  
  const [section, setSection] = useState('memes');
  const [memes, setMemes] = useState(memesLocal);

  return (
    <div className="footer-fix">
      {/* usamos la navbar como actualizadora de estados  */}
      <NavbarRB setSection={setSection}/>
      <Container>
        {/* aca estamos creando un objeto a la propiedad memes, y lo va a recibir el componente Memes */}
        {section === 'memes' && <Memes memes={memes} />}
        {section === 'login' && <Login />}
        {section === 'perfil' && <Perfil />}
        {/* aca estoy colocando lo que va recibir el comp Admin y pongo los atributos pongo el nombre que quiera, pero son los que tengo que usar en el compoennte Admin */}
        {section === 'admin' && <Admin memes={memes} setMemes={setMemes} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
