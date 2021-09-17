import React from 'react'
import { Card} from 'react-bootstrap'
import './meme.css'

export default function Meme(props) {

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.meme.image} />
            <Card.Body>
                <Card.Title className="text-center">{props.meme.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

