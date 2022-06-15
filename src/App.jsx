import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { dispatch, getState, subscribe, unsubscribe } from "./store";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

function App() {
  const [textInputs, setTextInputs] = useState({
    title: "",
    duration: "",
  });
  const [songs, setSongs] = useState();
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (index) =>
    setSelectedSong(songs.find((song) => song.id === index));

  const handleInputChange = (e) => {
    setTextInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSongAdd = () => {
    dispatch({
      type: 'ADD_SONG',
      payload: {
        id: uuidv4(),
        title: textInputs.title,
        duration: Number(textInputs.duration),
      },
    });

    setTextInputs({ title: '', duration: '', });
  };

  useEffect(() => {
    const handleSongsChange = () => {
      const { songs } = getState();
      setSongs(songs);
    };

    const unsubscribe = subscribe(handleSongsChange);

    return unsubscribe;
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          style={{
            marginRight: "8px",
          }}
        />
        <input
          type="text"
          name="duration"
          onChange={handleInputChange}
          style={{
            marginRight: "8px",
          }}
        />
        <button onClick={handleSongAdd}>Add Song</button>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {songs && <SongList songs={songs} onClick={handleSongSelect} />}
        {selectedSong && <SongDetail song={selectedSong} />}
      </div>
    </div>
  );
}

export default App;
