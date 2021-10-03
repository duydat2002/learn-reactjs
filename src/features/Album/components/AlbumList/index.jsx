import React from 'react';
import AlbumItem from '../AlbumItem';

const AlbumList = ({albumList}) => {
    return (
        <ul className="albums__list">
            {albumList.map((album) => (
                <li key={album.id}>
                    <AlbumItem album={album} />
                </li>
            ))}
        </ul>
    );
};

export default AlbumList;