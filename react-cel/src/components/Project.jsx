import React from 'react'
import { Card, Col } from 'react-bootstrap';


const Project = ({project}) => {
    return (
        <Col className="col-12 col-md-6 col-lg-4 justify-content-center">
        <Card style={{width: '15rem',border:'none'}}>
            <Card.Img variant="top" src={project.img} />
            <Card.Body className="text-center">
                <Card.Title>{project.nombre}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Project
