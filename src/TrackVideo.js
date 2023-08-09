import React from "react";

const TrackVideo = (props)=>{
    return (
        <div className='card'>
            <p>Show the YouTube Video of select track here:</p>
            <p>{props.video}</p>
        </div>
    );
};

export default TrackVideo;