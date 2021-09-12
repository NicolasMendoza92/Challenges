import React from 'react';
import Meme from './Meme';
import './memes.css'


const Memes = ({ memes }) => {

    const mapMemes = memes.map((meme) => (<Meme key={meme.id} meme={meme} />));

    return (
        <>
            <h2>Memes</h2>
            <div className="d-flex flex-wrap justify-content-between">{mapMemes}</div>
        </>
    );
};

export default Memes;
