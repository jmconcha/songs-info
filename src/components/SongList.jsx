import { connect } from 'react-redux';

import SongItem from './SongItem';
import { selectSong } from '../actions';

function SongList({ songs, selectSong }) {
  const songList = (
    songs.map((song, index) => (
      <SongItem key={index} song={song} onClick={() => selectSong(song)} />
    ))
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: "100px",
      }}
    >
      {songList}
    </div>
  );
}

const mapStateToProps = state => ({
  songs: state.songs,
});
const mapDispatchToProps = dispatch => ({
  selectSong: song => dispatch(selectSong(song)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongList);