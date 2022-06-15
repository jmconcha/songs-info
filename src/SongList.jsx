import SongItem from './SongItem';

function SongList({ songs, onClick }) {
  const songList = (
    songs.map((song, index) => (
      <SongItem key={index} song={song} onClick={() => onClick(song.id)} />
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

export default SongList;