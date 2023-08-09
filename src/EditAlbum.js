import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const EditAlbum = (props) => {
    let album = {
        title: '',
        artist:'',
        year:'',
        image: '',
        tracks:[]
    };
    let newAlbumCreation = true;

    if(props.album) {
        album = props.album;
        newAlbumCreation = false;
    }


    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const [tracks, setTracks] = useState('');
    const navigate = useNavigate();
    
    const updateTitle = (event) => {
        setAlbumTitle(event.target.value);
    };

    const updateArtist = (event) => {
        setArtist(event.target.value);
    };
    const updateDescription = (event)=> {
        setDescription(event.target.value);
    };
    const updateYear = (event) => {
        setYear(event.target.value);
    };
    const updateImage = (event)=> {
        setImage(event.target.value);
    };
    const updateTracks = (event)=> {
        setTracks(event.target.value)
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const tracksArray = tracks.split('\n');
        let tempTracks = [];
        for(let i=0;i<tracksArray.length;i++) {
            let title = "";
            let lyrics = "";
            let video = "";
            let trackInfo = tracksArray[i];
            let trackParts = trackInfo.split(':');
            if (trackParts.length == 3) {
              title = trackParts[0];
              lyrics = trackParts[1];
              video = trackParts[2];
            }
            else if (trackParts.length == 2) {
              title = trackParts[0];
              lyrics = trackParts[1];
            }
            else {
              title = trackParts[0];
            }
            tempTracks.push({"trackId":Math.floor(Math.random() * 1000000),"number":i+1,"title": title, "lyrics": lyrics, "video": video})
        }
        console.log("Submit");
        const editedAlbum = {
            albumId: album.albumId,
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: tempTracks
        };
        console.log(editedAlbum);

        saveAlbum(editedAlbum);
    }

    const saveAlbum = async (album) => {
        let response;
        if (newAlbumCreation) {
            response = await dataSource.post('/albums',album);
        } else {
            response = await dataSource.put('/albums',album);
        }
        console.log(response);
        console.log(response.data);
        if(response.status===200) {
            alert(`The status of your album creation is : ${response.status} (Success)`)
        } else {
            alert(`The status of your album creation is : ${response.status} (Failed)`)
        }

        props.onEditAlbum(navigate);
    }

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>{newAlbumCreation?"Create New":"Edit"} Album</h1>
                <div className="mb-3">
                    <label htmlFor="albumTitle" className="form-label">Album Title</label>
                    <input type="text" className="form-control" id="albumTitle" placeholder="Enter Album Title" value={albumTitle} onChange={updateTitle} aria-describedby="album title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="albumArtist" className="form-label">Artist</label>
                    <input type="text" className="form-control" id="albumArtist" placeholder="Enter Album Artist" value={artist} onChange={updateArtist} aria-describedby="album artist" />
                </div>
                <div className="mb-3">
                    <label htmlFor="albumDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="albumDescription" placeholder="Enter Album Description" value={description} onChange={updateDescription} aria-describedby="album description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="albumYear" className="form-label">Year</label>
                    <input type="text" className="form-control" id="albumYear" placeholder="Enter Album Year" value={year} onChange={updateYear} aria-describedby="album year" />
                </div>
                <div className="mb-3">
                    <label htmlFor="albumImage" className="form-label">Image</label>
                    <input type="text" className="form-control" id="albumImage" placeholder="Enter Album Image" value={image} onChange={updateImage} aria-describedby="album image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="albumTracks" className="form-label">Tracks</label>
                    <textarea type="text" className="form-control" id="albumTracks" placeholder="Enter one track on each line" value={tracks} onChange={updateTracks} aria-describedby="album tracks"></textarea>
                </div>
                <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditAlbum;