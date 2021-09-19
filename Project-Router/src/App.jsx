import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
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

  const [memes, setMemes] = useState(memesLocal);

  return (
    <div className="footer-fix">
      {/* usamos la navbar como actualizadora de estados  */}
      <NavbarRB/>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Memes memes={memes} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/perfil">
            <Perfil />
          </Route>

          <Route path="/admin">
            <Admin memes={memes} setMemes={setMemes} />
          </Route>

        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
