import React from 'react'
import { Row, Col} from 'react-bootstrap';
import Curso from './Curso'

const Cursos = ({ course, courses }) => {
    const mapCursillos = courses.map((cursillo) => <Curso cursillo={cursillo} />);
    return (
        <Row className="mb-5">
            <Col className="col-12 col-lg-8 d-flex flex-column justify-content-between">
                {/* se llama a solo un curso, singular y genero solo una card -- no es necesario recorrer el array con.map se accede directo a las propiedaes del objeto */}
            <Curso cursillo={course}/>
            </Col>
            <Col className="col-12 col-lg-4 d-flex flex-column justify-content-between ">
                {mapCursillos}
            </Col>
        </Row>
    )
}

export default Cursos

      