import React from 'react';
import { Table } from 'react-bootstrap';

export default function TableMemes({memes}) {
    return (
        <div>
            <h2>Tabla de Memes cargados</h2>
        <Table striped bordered hover variant="dark" className="mb-2">
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
        </div>
    );
}

          
     