import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form, InputGroup, Row } from 'react-bootstrap';
import { guardarEnLocalStorage } from '../utils/localStorage';

export default function FormMemes(props) {
    // aca antes teniamos memes y setMemes pero lo elevamos y lo llevamos a App, y dejamos la desectructuracion solamente 
    const { memes, setMemes } = props;
    const [validated, setValidated] = useState(false);
    // ahora usamos estados para tomar la informacion del usuario -  antes lo usabamos con onChange
    const [input, setInput] = useState({ title: '', image: '' });


    // aca recibimos los datos del formulario (funcion para eso)
    const handleChange = (event) => {
        const { value, name } = event.target
        // usamos spread sintax, con los tres puntos e input conservamos los datos que tenian previamente, el [name] entre corchetes es importante ya que lo tenemos como atributo del input
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            // agregamos al array que ya creamos propiedades y elementos nuevos, lo que antes haciamos con push 
            const newArray = [...memes, input];
            setMemes(newArray);
            // aca a la funcion le debo poner los objetos que quiero guardar, si yo pongo memes en vez de newArray me guarda el anterior
            guardarEnLocalStorage({ key: 'memes', value: newArray });
        }
    };
  return (
    <>
     <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="card mt-5 p-5 mx-auto mb-2"
                style={{ width: '500px' }}
            >
                {/* aca se pone el id que tiene el input */}
                <Form.Group controlId="title">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        name="title"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="Meme"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="image" className="mb-2">
                    <Form.Label>Imagen</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="image"
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
                    <Button type="submit" className="btn btn-primary mx-auto">
                        Crear Meme
                    </Button>
                </Row>
            </Form>
    </>
  );
}
