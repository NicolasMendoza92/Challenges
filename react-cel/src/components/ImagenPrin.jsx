import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import movil from './movil.png'

const ImagenPrin = () => {
    return (
        <div className="contenedor-img mb-4">
            <Row>
                <Col className="principal">
                <div className="letras-prin">
                    <h2 className="m-4"> Award winning custom design and digital branding solution</h2>
                    <p className="m-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim rerum quasi saepe perferendis perspiciatis. Voluptatum adipisci libero, est praesentium vero dolorum? Quod culpa praesentium deserunt exercitationem saepe tenetur illo quidem.</p>
                    <Button variant="light" className="m-4"> Learn More</Button>
                </div>
                </Col>
                <Col className="principal-cell">
                    <div className="d-flex justify-content-center">
                        <img className="cellphone" src={movil} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ImagenPrin
