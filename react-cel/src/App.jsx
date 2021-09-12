import './App.css';
// este import me sirve para usar estilos y cosas de reactbootstrap, sin la necesidad de colocar className 
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheNav from './components/TheNav';
import ImagenPrin from './components/ImagenPrin';
import Cursos from './components/Cursos';
import PiePag from './components/PiePag';
import Projects from './components/Projects';

let cursillo =  {
  id:1,
  nombre:'Web Design',
  img:'https://wallpaperaccess.com/full/1947484.jpg',
}

let cursillos = [
 
 {
  id:2,
  nombre:'App Design',
  img:'https://c.pxhere.com/photos/1d/d3/computer_mouse_keyboard_technology_business-1411510.jpg!d'
},
{
  id:3,
  nombre:'Graphic Design',
  img:'https://wallpaperaccess.com/full/521111.jpg'
}
]

let projects = [
  {
    id:1,
    nombre:'Data Analist',
    img:'https://cdn.pixabay.com/photo/2018/02/04/02/37/zirkel-3128952_960_720.png',
  },
  {
    id:2,
    nombre:'Social Network',
    img:'https://image.flaticon.com/icons/png/512/306/306473.png',
  },
  {
    id:3,
    nombre:'Scrum Master',
    img:'https://www.tombrauter.no/wp-content/uploads/2018/11/vector_mac.circle-1024x1024.png',
  }
]


function App() {
  return (
    <>
      <TheNav/>
        <Container>
          <ImagenPrin/>
          {/* llamamos a los componentes y reciben un dato, en este caso le pusimos nombres course y courses, y en la propiedad de ellos van a aparecer las vbles que creamos, cursillo y cursillos respectivamente   */}
          <Cursos course={cursillo} courses={cursillos}/>
          <Projects projects={projects} />
        </Container>
        <PiePag/>
    </>
  );
}

export default App;
