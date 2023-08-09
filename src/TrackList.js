import React from "react";
import TrackTitle from "./TrackTitle";

const TrackList = (props) => {
    const tracks = props.tracks.map((track)=>{
        return (
            <TrackTitle key={track.trackId} title={track.title} id={track.trackId} albumId={props.albumId}/>
        );
    });
    
    return (
        <div className='list-group'>
            {tracks}
        </div>
    );
}

export default TrackList;