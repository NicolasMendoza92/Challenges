
import FormMemes from '../Components/FormMemes';
import TableMemes from '../Components/TableMemes';

// ahora tenemos que obtener el dato de memes, osea al componente admin en app le pasamos dos datos ahora lo tenemos que desectructurar aca como parametro de la funcion.
export default function Admin({memes,setMemes}) {
  
    return (
        <>
            <FormMemes memes={memes} setMemes={setMemes}/>
            <TableMemes memes={memes} />
        </>
    );
}
