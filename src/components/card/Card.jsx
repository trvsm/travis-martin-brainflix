import "./card.scss";

const Card = ({ videos, clickEvent }) => {
  return (
    <section className="gallery">
      <p className="gallery__title">Next Videos</p>
      {videos.map((video) => (
        <div
          key={video.id}
          onClick={(event) => clickEvent(event, video.id)}
          id={video.id}
          className="card"
        >
          <img className="card__image" src={video.image} alt={video.title} />
          <div className="card__right">
            <p className="card__title">{video.title}</p>
            <p className="card__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
