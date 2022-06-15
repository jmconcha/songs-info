import React, { useState } from "react";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { addSong } from '../actions';

function App({ addSong }) {
  const [textInputs, setTextInputs] = useState({
    title: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    setTextInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSongAdd = () => {
    addSong({
      id: uuidv4(),
      title: textInputs.title,
      duration: Number(textInputs.duration),
    });

    setTextInputs({
      title: '',
      duration: '',
    });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          value={textInputs.title}
          onChange={handleInputChange}
          style={{
            marginRight: "8px",
          }}
        />
        <input
          type="text"
          name="duration"
          value={textInputs.duration}
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
        <SongList />
        <SongDetail />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addSong: payload => dispatch(addSong(payload)),
});

export default connect(null, mapDispatchToProps)(App);
