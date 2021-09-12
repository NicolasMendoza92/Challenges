import React from 'react';
import { Card} from 'react-bootstrap';

const Curso = ({ cursillo }) => {
    return (
                <Card className="bg-dark text-white mb-2 cartiols">
                    <Card.Img className="cartiols" src={cursillo.img} alt="Card image" />
                    <Card.ImgOverlay className="text-cartiols">
                        <Card.Title>{cursillo.nombre}</Card.Title>
                        <Card.Text>
                            Veiw Projects
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
    )
}

export default Curso
