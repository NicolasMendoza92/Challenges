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
const usersLocal = leerDeLocalStorage('users') || [];
// cuando arranque la app debe leer de local y mostrame esto, para que cuando actualice no desaparerza, le llamamos 'memes' por que al momento de guardarlo en local tambien le llamamos a la key 'memes'
const memesLocal = leerDeLocalStorage('memes') || [];

function App() {
  
// definimos el estado section y la actualizamos en la nabvar
  const [section, setSection] = useState('memes');
  // aca estamos elevando el estado, y traemos lo que estaba en el componente FormMemes a App, ya que App contiene a Admin, y memes 
  const [memes, setMemes] = useState(memesLocal);
// aca tambien elevamos el estado de users, ya no lo tenemos en Login ahora lo tenemos en App 
  const [users, setUsers] = useState(usersLocal);


  return (
    <div className="footer-fix">
      {/* usamos la navbar como actualizadora de estados, osea que al estado section lo pueda modificar la nabvar, y le pasamos la fn a traves de props, osea declaramos una que se llama setSection y le pasamos como valor a "setSection" que es la del useState */}
      <NavbarRB setSection={setSection}/>
      <Container>
        {/* aca estamos creando un objeto a la propiedad memes, y lo va a recibir el componente Memes */}
        {section === 'memes' && <Memes memes={memes} />}
        {section === 'login' && <Login users={users} setUsers={setUsers}/>}
        {section === 'perfil' && <Perfil />}
        {/* aca estoy colocando lo que va recibir el comp Admin y pongo los atributos pongo el nombre que quiera, pero son los que tengo que usar en el compoennte Admin, tambien le paso la vble users con el estado users por que ahi se iran guardando los usuarios que ingresan. */}
        {section === 'admin' && <Admin memes={memes} setMemes={setMemes} users={users} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
