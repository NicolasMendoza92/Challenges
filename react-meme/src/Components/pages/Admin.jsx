import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';

export default function Admin() {

    const [validated, setValidated] = useState(false);
    // ahora usamos estados para tomar la informacion del usuario -  antes lo usabamos con onChange
    const [input, setInput] = useState({ title: '', image: '' });
    const [memes, setMemes] =useState([]);
    console.log=(memes)


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            // agregamos al array que ya creamos propiedades y elementos nuevos, lo que antes haciamos con push 
            setMemes([...memes, input]);
        }
    };

    // aca recibimos los datos del formulario (funcion para eso)
    const handleChange = (event) => {
        const {value,name} = event.target
        // usamos spread sintax, con los tres puntos e input conservamos los datos que tenian previamente 
        setInput({...input, [name]:value })
    };

    return (
        <>
            <h2 className="mt-5">Formulario Crear Meme</h2>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="card mt-5 p-5 mx-auto"
                style={{ width: '500px' }}
            >
                {/* aca se pone el id que tiene el input */}
                <Form.Group controlId="title">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        name="titulo"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="Meme"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="imagen"
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="http://meme.jpg"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Imagen requerida!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button type="submit" className="mx-auto">
                        Crear Meme
                    </Button>
                </Row>
            </Form>
        </>
    );
}
