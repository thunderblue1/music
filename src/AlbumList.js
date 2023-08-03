import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const AlbumList = (props) => {
    const handleSelectionOne = (albumId) => {
        console.log('Selected ID is '+albumId);
        props.onClick(albumId, navigator);
    };

    console.log('props albumsList',props);
    const navigator = useNavigate();
    const albums = props.albumList.map((album)=>{
        return (
            <Card
                key={album.albumId}
                albumId={album.albumId}
                albumTitle={album.title}
                albumDescription={album.description}
                buttonText='OK'
                imageURL={album.image}
                onClick={handleSelectionOne}
            />
        );
    });
    return <div className='container'>{albums}</div>
}

export default AlbumList;