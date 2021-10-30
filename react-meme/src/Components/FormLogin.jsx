import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { guardarEnLocalStorage } from '../utils/localStorage';

export default function FormLogin(props) {
    // lo dejamos aca desescturcturado y el useState lo elevo a App. 
    const { users, setUsers } = props;
    const [validated, setValidated] = useState(false);
    // con este useState tomamos los datos del usuario, como hicimos en la tarea de las noticias, ponemos los estados dentro de un objeto en este caso lo que escribe el usuario 
    const [input, setInput] = useState({ email: '', password: '' });
    // y una vez que creamos la vble de userLocal la usamos como el estado inciaal, osea lo que esta guardado en el local o si no hay nada un array vacio, asi como lo definimos en la const. 


    // aca creamos una funcion, que nos permite poder ejecutar eventos "onchange" de cualquiera de los input -- donde siempre vamos a recibir el objeto del evento -  entonces despues la ponesmo en el formulario que llene el usuario alla abajo  
    const handleChange = (event) => {

        // debemos identificar que dato se esta escribiendo -- lo vemos en los atributos que esta escribiendo el usuario, usamos "name" y en  esta vble guarda la prop value y la name del obj - value: donde escribe el usuario, y name es la prop que le pusiemos al input, uno es "email y el otro password"
        const { value, name } = event.target;

        // ahora debemos guardar la info de cada uno de los estados, usamos spread syntax (obtenemos las prop que estan dentro) y tambien accedemos a name - oea como los dos input tiene una prop que se llama name cuando el usuario escriba va a aprecer, osea si escribe en email guarda el email y si escribe en password lo toma a password. 
        const newInput = { ...input, [name]: value }
        // aca seteamos el valor, osea cuando hay neuvo input lo seateamos es mas facil de leer
        setInput(newInput)

    }

    // usamos la funcion submit para la validacion - esta funcion es una Local Scope, por que solo accedemos en este componente solo en login por que la definimos dentro de export default function Login 
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        const form = event.currentTarget;
        // Chequea que los campos del formulario sean válidos.(cremos la funcion y le llamamos checkValidity y digo cuando sea correcto que debe hacer, en este caso crea un nuevo array de productos para ir mostrandolos en alguna lista)
        if (form.checkValidity() === true) {
            // usamos el spread syntax siempre que queiro usar lo que ya tenemos
            const newUser = [...users, input]
            setUsers(newUser)
            // lo guardo en local storage, despues de que se agrege un usuario lo guardamos -  es necesario craar una key u un value, en este caso el value es el nuevo usuario (array) y la key lo que queira y llamo a al funcion que cree en utils 
            guardarEnLocalStorage({ key: 'users', value: newUser });
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
                            {/* pasamos como callback a la funcion sin usar comillas - en el evento onSubmit llamamos a la funcion que definimos arriba  */}
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>Email</Form.Label>
                                    {/* form.Control seria el input en el html vanilla */}
                                    <Form.Control
                                        name="email"
                                        // aca asignamos la funcion "handleChange" y ahi accede al evento cuando escribimos algo en el input
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02" className="mb-2">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            minLength="6"
                                            name="password"
                                            onChange={(e) => handleChange(e)}
                                            type="password"
                                            placeholder="*****"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password is required!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Row>
                                    <Button type="submit" className="btn btn-primary  mx-auto">
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
