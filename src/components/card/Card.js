import "./card.scss";

const Card = ({video, clickEvent}) => {
  
  return (
    //pretty sure will be passing parameters so wrap in annon func
      <div onClick={clickEvent} id={video.id} className="card">
        {/* assign id to card to be able to target id in event */}
        <img
          className="card__image"
          src={video.image} alt={video.title}
        />
        <div className="card__right">
          <p className="card__title">{video.title}</p>
          <p className="card__channel">{video.channel}</p>
        </div>
      </div>
  );
};

export default Card;
