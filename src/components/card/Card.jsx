import "./card.scss";
import { Link} from "react-router-dom";

const Card = ({ videos }) => {


  return (
    <section className="gallery">
      <p className="gallery__title">Next Videos</p>
      {videos.map((video) => (
        <div key={video.id} id={video.id} className="card">
          <Link to={`/videos/${video.id}`}>
            <img className="card__image" src={video.image} alt={video.title} />
          </Link>
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
