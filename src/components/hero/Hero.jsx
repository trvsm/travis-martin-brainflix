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
        <div className="hero__top">
          <span className="hero__channel">By {props.activeVideo.channel}</span>
          <span className="hero__views">{props.activeVideo.views}</span>
        </div>
        <div className="hero__bottom">
          <div className="hero__timestamp">{props.activeVideo.timestamp}</div>
          <div className="hero__likes">{props.activeVideo.likes}</div>
        </div>
      </div>
      <section className="hero__description">
        {props.activeVideo.description}
      </section>
    </div>
  );
};

export default Hero;
