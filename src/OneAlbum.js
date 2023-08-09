import React, { useState, useEffect } from 'react';
import TrackLyrics from './TrackLyrics';
import TrackVideo from './TrackVideo';
import TrackList from './TrackList';
import { useLocation,useParams } from 'react-router-dom';

const OneAlbum = (props) => {
    const [currentTrack, setCurrentTrack] = useState({});
    const location = useLocation();
    const {albumId, trackId} = useParams();

    useEffect(()=>{
        console.log('Query params :'+trackId);
        const oneTrack = props.album.tracks.filter((track)=> {
            console.log('Iterate  :'+track.title+track.trackId);
            if(Number.parseInt(track.trackId)===Number.parseInt(trackId)) {
                console.log("GOT HERE.");
                return true;
            } else {
                return false;
            }
        });
        if(oneTrack.length===0) {
            setCurrentTrack(props.album.tracks[0]);
        } else {
            console.log('Current track'+oneTrack[0].title);
            setCurrentTrack(oneTrack[0]);
        }
    },[props.album.tracks, location, trackId]);

    return (
        <div className='container'>

                <h2>Album Details for {props.album.title}</h2>
                <div className='row'>
                    <div className='col col-sm-3'>
                        <div className='card'>
                            <img
                                src={props.album.image}
                                className='card-img-top'
                                alt={props.album.title}
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>{props.album.title}</h5>
                                <p className='card-text'>{props.album.description}</p>
                                <p className='card-text'>{props.album.artist}</p>
                                <p className='card-text'>{props.album.year}</p>
                                <TrackList tracks={props.album.tracks} albumId={props.album.albumId} />
                                <a href='/#' className='btn btn-primary'>
                                    Edit
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col col-sm-9'>
                        <TrackLyrics lyrics={currentTrack.lyrics} />
                        <TrackVideo video={currentTrack.video} />
                    </div>
                </div>
        </div>
    );
};

export default OneAlbum;