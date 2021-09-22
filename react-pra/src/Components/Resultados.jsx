import Resultado from './Resultado';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

const Resultados = () => {

    // creamos la vble fundamental que se llama resultados
    const [resultados, setResultados] = useState([]);

    const [page, setPage] = useState(1);

    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        const request = async () => {
            try {
                // sintaxis para traer info de una API - debo fijarme cual es el array en este caso "results"- aca puedo acceder a todas las prop y vbales que me tiene la API
                const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}`);
                const result = response.data.results;
                setResultados(result)
            } catch (error) {
                alert('Hubo un error en la consulta del servidor')
            }
        }
        request();
    }, [page,species,gender])

    const changeSpecies = (event) => {
        // funcion que setea el estado y le pasamos por parametro los datos que queremos actualizar 
        setSpecies(event.target.value)
    };

    const changeGender = (event) => {
        // funcion que setea el estado y le pasamos por parametro los datos que queremos actualizar 
        setGender(event.target.value)
    };

    // recorremos el array de la pagina Api que consultamos 
    const mapResultados = resultados.map((result) => <Resultado key={result.url} result={result} />);

    const previusDisabled = page === 1;


    return (
        <div>
            <Container>
                <div className="d-flex justify-content-lg-center">
             <form>
                <label htmlFor="species">Species</label>
                {/* selectCategory es un callback-- por que es una fn que le pasamos la declaracion, osea cuando el evento ocurra llamamos a esta funcion */}
                <select name="species" id="species" onChange={changeSpecies}>
                    {/* en el value pongo lo que dice en newapi */}
                    <option value="/">All</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Robot">Robot</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Mythological Creature">Mythological Creature</option>
                    <option value="unknown">unknown</option>
                </select>
            </form> 
            <form>
                <label htmlFor="gender">Gender</label>
                {/* selectCategory es un callback-- por que es una fn que le pasamos la declaracion, osea cuando el evento ocurra llamamos a esta funcion */}
                <select name="gender" id="gender" onChange={changeGender}>
                    {/* en el value pongo lo que dice en newapi */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </form> 
            </div>
            <div className="row justify-content-center p-2">
            {mapResultados}
            </div>
            <div className="d-flex justify-content-md-center">{page}</div>
            <div className="d-flex justify-content-md-center mb-4">
                <Button onClick={() => { setPage(page - 1) }} disabled={previusDisabled}>Previus</Button>
                {/* aca vemos si el array esta vacio, consultamos con la propiedad length del array resultados que habiamos definido antes */}
                <Button onClick={() => { setPage(page + 1) }} disabled={resultados.length === 0}>Next</Button>
            </div>
            </Container>
        </div>

    )
}

export default Resultados
