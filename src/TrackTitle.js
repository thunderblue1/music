import React from 'react';
import { Link } from 'react-router-dom';

const TrackTitle = (props)=>{
    return (
        <li><Link to={'/show/'+props.albumId+'/'+props.id}>{props.title}</Link></li>
    );
};

export default TrackTitle;