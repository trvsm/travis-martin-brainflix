import "./hero.scss";

const Hero = (props) => {
  //props for video banner
  // const videoBanner = {}
  return (
    <div className="hero">
      <video
        className="hero__video"
        controls
        poster={props.activeVideo.image}
      ></video>
      <h1 className="hero__title">{props.activeVideo.title}</h1>
      <div className="hero__stats">
        <span className="hero__channel">By {props.activeVideo.channel}</span> | <img alt="view icon"/>{props.activeVideo.views} |
        {props.activeVideo.timestamp} | <img alt="like icon"/>{props.activeVideo.likes}
      </div>
      <section className="hero__description">
        {props.activeVideo.description}
      </section>
    </div>
  );
};

export default Hero;
