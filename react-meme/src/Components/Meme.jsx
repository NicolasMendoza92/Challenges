import React from 'react'
import { Card} from 'react-bootstrap'
import './meme.css'

export default function Meme(props) {

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.meme.image} />
            <Card.Body>
                <Card.Title>{props.meme.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

