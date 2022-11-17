import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ videos }) => {
  // generate side video cards

  return (
    <section className="gallery">
      <p className="gallery__title">Next Videos</p>
      {Object.keys(videos).length > 0 ? (
        videos.map((video) => (
          <div key={video.id} id={video.id} className="card">
            <Link to={`/videos/${video.id}`}>
              <img
                className="card__image"
                src={video.image}
                alt={video.title}
              />
            </Link>
            <div className="card__right">
              <p className="card__title">{video.title}</p>
              <p className="card__channel">{video.channel}</p>
            </div>
          </div>
        ))
      ) : (
        <p>loading</p>
      )}
    </section>
  );
};

export default Card;
