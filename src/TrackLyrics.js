import React from 'react';

const TrackLyrics = (props) => {
    return (
        <div className='card'>
            <p>Show the lyrics of select track here:</p>
            <p>{props.lyrics}</p>
        </div>
    );
};

export default TrackLyrics;