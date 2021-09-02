import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './resultado.css'


const Resultado = (props) => {

    const { result } = props;
    const { name, status, species, image, gender, location} = result


    return (
        <Card className="m-2 card-result">
            <div>
            <Image className="imagen-card" src={image}/>
            </div>
            <div className="">
                <Card.Title>{name}</Card.Title>
                <p>Gender:{gender}</p>
                <p> Species:{species} </p>
                {/* accedo al obejto name de la prop location del array result */}
                <p> Origen:{location.name}</p>
                <p>Status:{status}</p>
            </div>
        </Card>
    )
}

export default Resultado
