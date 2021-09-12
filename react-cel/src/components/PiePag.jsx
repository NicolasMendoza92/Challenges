import React from 'react'
import { Container, Row } from 'react-bootstrap';

const PiePag = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                    <div>
                        <div className="icon-footer">
                            <h2 className="titulo-footer">DESIGNO SOCIAL</h2>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-discord "></i>
                            <i className="fab fa-twitter "></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="d-flex justify-content-around ">
                        <ul className="py-2 lista">
                            <h3 className="titulo-footer">Contact Us</h3>
                            <li>www.projectx.com</li>
                            <li>oficinaManonlo@hotmail.com</li>
                        </ul>
                        <ul className="py-2 lista">
                            <h3 className="titulo-footer">Location</h3>
                            <li>Calle de los palotes 17</li>
                            <li>Madrid -España</li>
                        </ul>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default PiePag
