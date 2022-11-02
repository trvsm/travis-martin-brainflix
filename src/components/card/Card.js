import "./card.scss";

const Card = ({ videos, clickEvent }) => {
  return (
    <section className="gallery">Next Videos
      {videos.map((video) => {
        return (
          <div key={video.id} onClick={clickEvent} id={video.id} className="card">
            {/* assign id to card to be able to target id in event */}
            <img className="card__image" src={video.image} alt={video.title} />
            <div className="card__right">
              <p className="card__title">{video.title}</p>
              <p className="card__channel">{video.channel}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
