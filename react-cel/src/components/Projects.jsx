import React from 'react'
import {Row, Container} from 'react-bootstrap';
import Project from './Project'

const Projects = ({projects}) => {
    const mapProjects =  projects.map((project) => <Project project={project}/>);
    return (
        <Container className="justify-content-md-center">
        <Row className="mb-4">
        {mapProjects}
        </Row>
        </Container>
    )
}

export default Projects
