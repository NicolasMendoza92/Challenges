import {Redirect, useParams } from 'react-router';
import MemeFull from '../Components/MemeFull';
import { leerDeLocalStorage } from '../utils/localStorage';

export default function DetalleMeme() {

    const { memeId } = useParams();
    const memes = leerDeLocalStorage('memes')
    // usamos la logica de find (que encuetnre el que sea igual a meme)
    const memeEncontrado = memes.find((m) => m.id === memeId);

    if (memeEncontrado === undefined) {
        return <Redirect to="/404" />;
    }

    return (
            <MemeFull meme={memeEncontrado} />
    );
}
