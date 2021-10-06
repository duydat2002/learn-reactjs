import React from 'react';
import './styles.scss';

const AlbumItem = ( { album: { name, thumb } }) => {
    return (
        <div className="albums__item">
            <div className="album__img">
                <img src={thumb} alt={name}/>
            </div>
            <p className="album__name">{name}</p>
        </div>
    );
};

export default AlbumItem;