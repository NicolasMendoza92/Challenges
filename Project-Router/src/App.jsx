import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavbarRB } from './Components/navbar/NavbarRB';
import { Container } from 'react-bootstrap';
import Footer from './Components/footer/Footer';
import Memes from './pages/Memes';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Admin from './pages/Admin';
import { useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';
import DetalleMeme from './pages/DetalleMeme';


// siempre que necesitemos cambio en pantalla, necesitamos usar estados. UseState - y con setSection hacemos participe al ususario (funcion que actualiza)

// cuando arranque la app debe leer de local y mostrame esto, para que cuando actualice no desaparerza, le llamamos 'memes' por que al momento de guardarlo en local tambien le llamamos a la key 'memes'
const memesLocal = leerDeLocalStorage('memes') || [];
const userLocal = leerDeLocalStorage('user') || {};

function App() {

  const [memes, setMemes] = useState(memesLocal);

  const [user, setUser] = useState(userLocal);

  return (
    <div className="footer-fix">
      {/* usamos la navbar como actualizadora de estados  */}
      <NavbarRB user={user} />
      <Container>
        <Switch>
          <Route path="/" exact>
            {/* aca se le comparte al componente memes, le damos una prop llamada memes con el valor del estado "memes" el que defini antes  */}
            <Memes memes={memes} />
          </Route>

          <Route path="/login">
            <Login setUser={setUser} />
          </Route>

          <Route path="/perfil">
            <Perfil />
          </Route>

          <Route path="/admin">
            <Admin memes={memes} setMemes={setMemes} user={user} />
          </Route>

          {/* se define un identificador para un meme en detalle */}
          <Route path="/meme/:memeId">
            <DetalleMeme />
          </Route>

          <Route path="/404">
            404
          </Route>

          <Route path="*">
            <Redirect to="/404" />
          </Route>

        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
