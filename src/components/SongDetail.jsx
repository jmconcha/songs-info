import { connect } from 'react-redux';

function formatDuration(seconds) {
  return `${Math.floor(seconds / 60)}:${seconds % 60 > 10 ? seconds % 60 : `0${seconds % 60}`}`;
}

function SongDetail({ song }) {
  const title = song?.title;
  const duration = song?.duration;
  
  return song && (
    <div>
      <h2>{title}</h2>
      <h3>Title: {title}</h3>
      <h3>Length: {formatDuration(duration)}</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  song: state.selectedSong,
});

export default connect(mapStateToProps)(SongDetail);