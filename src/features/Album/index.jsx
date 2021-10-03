import React from 'react';
import AlbumList from './components/AlbumList';

const AlbumFeature = () => {

    const albumList = [
        {
            id: 1,
            name: 'Boyfriend material',
            thumb: 'https://i1.sndcdn.com/artworks-bIkuIb7fy5uPdG06-IJON4g-t200x200.jpg'
        },
        {
            id: 2,
            name: 'Missed Call - Billis x OllB x Minh Quang',
            thumb: 'https://i1.sndcdn.com/artworks-000499585929-vyeu8a-t200x200.jpg'
        },
        {
            id: 3,
            name: 'CITY9 - RPT Orijinn X Simple DEESLOWZ X RPT Groovie X Nguyễn Tune',
            thumb: 'https://i1.sndcdn.com/avatars-ar0wcuN54XH3HNjZ-1sbgDA-t200x200.jpg'
        },
        {
            id: 4,
            name: 'Only Us - Kewwi x Freddyverybad x Liz Panda',
            thumb: 'https://i1.sndcdn.com/artworks-HXHdz1CzWQnIeLzx-jf8L4g-t200x200.jpg'
        },
        {
            id: 5,
            name: 'GPS - NIDEBIG ft BINQANG , PURR ( PROD : HS YAFU )',
            thumb: 'https://i1.sndcdn.com/artworks-452wzhRszLjTliyf-YYAOxQ-t200x200.jpg'
        },
    ];

    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
};

export default AlbumFeature;