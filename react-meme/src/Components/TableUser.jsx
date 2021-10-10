import React from 'react';
import { Table } from 'react-bootstrap';

export default function TableUser(props) {
    const { users } = props;
    return (
        <div>
            <h2>Tabla de Usuarios que se logean</h2>
        <Table striped bordered hover variant="dark" >
            <tbody>
                {users.length === [] ? 'no hay usuarios' :
                    users.map(({ email, password }, i) => (
                        <tr key={i}>
                            <td>{email}</td>
                            <td>{password}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
        </div>
    );
}

