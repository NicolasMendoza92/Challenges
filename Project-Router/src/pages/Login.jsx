
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const user = {nombre:'rick', email:'rick@gmail.com', password:'123456'};

export default function Login() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({email:'',password:''});
    const history = useHistory();

    const handleChange = (event) => {
        const { value, name } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            if (user.email === input.email && user.password === input.password){
                alert('Hola Admin' + user.nombre)
                history.push('/admin');
            } else{
                alert('datos incorrectos')
            }
        }
    }
  return (
    <Container>
    <Row>
        <Col xs={12} sm={8} md={6} className="mx-auto my-5">
            <Card className="border">
                <Card.Header className="bg-info">
                    <h4 className="text-white">MeMes</h4>
                </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                onChange={(e) => handleChange(e)}
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    minLength="6"
                                    name="password"
                                    onChange={(e) => handleChange(e)}
                                    type="password"
                                    placeholder="****"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">s
                                    Password is required!
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Row>
                            <Button type="submit" className="mx-auto mt-4">
                                Iniciar Sesión
                            </Button>
                        </Row>
                        <Row>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
  );
}
