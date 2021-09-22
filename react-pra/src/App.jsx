
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavRB from './Components/NavRB';
import Footer from './Components/Footer';
import Resultados from './Components/Resultados';


function App() {
  return (
    <div className="footer-fix">
      <NavRB/>
      <Resultados/>
      <Footer/>
    </div>
  );
}

export default App;
