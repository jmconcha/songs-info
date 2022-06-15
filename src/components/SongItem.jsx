function SongItem({ song, onClick }) {
  const { title } = song;

  return (
    <div>
      <h2
        style={{
          display: 'inline-block',
          marginRight: '12px',
        }}
      >
        {title}
      </h2>
      <button
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >Select</button>
    </div>
  );
}

export default SongItem;