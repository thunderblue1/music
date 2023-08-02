import React, { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';
import SearchForm from './SearchForm';
import dataSource from './dataSource';

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [albumList, setAlbumList] = useState([]);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log('phrase is '+phrase);
    setSearchPhrase(phrase);
  };

  useEffect(()=> {
    //setAlbumList(albums);
    loadAlbums();
  },[refresh]);

  const loadAlbums = async () => {
    const response = await dataSource.get('/albums');

    setAlbumList(response.data);
  }

  const renderedList = () => {
    return albumList.map((album) => {
      if(album.description.toLowerCase().includes(searchPhrase.toLowerCase())||searchPhrase==='') {
        return (
          <Card
            key={album.albumId}
            albumTitle={album.title}
            albumDescription={album.description}
            buttonText='OK'
            imageURL={album.image}
          />
        );
      } else {
        console.log('Does not match '+searchPhrase);
        return null;
      }
    });
  };

  return <div>
      <div className='container'>
        <SearchForm onSubmit={updateSearchResults}/>
      </div>
      <div className='container'>{renderedList()}</div>
    </div>;
};

export default App;
