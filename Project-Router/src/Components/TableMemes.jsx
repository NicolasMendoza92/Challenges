import React from 'react';
import { Table } from 'react-bootstrap';

export default function TableMemes({memes}) {
    return (
        <Table striped bordered hover variant="dark">
        <tbody>
            {memes.length === [] ? 'no hay memes colgados' :
                memes.map((meme, i) => (
                    <tr key={i}>
                        <td><img src={meme.image} alt="" style={{ width: '18rem' }} /></td>
                        <td>{meme.title}</td>
                    </tr>
                ))}
        </tbody>
        </Table>
    );
}

          
     