import "./hero.scss";

const Hero = () => {
    //props for video banner
    // const videoBanner = {}
  return (
    <>
      <video
        controls
        poster="https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg"
      ></video>
      <h1 className="video__title">video title</h1>
      <div className="video__stats">Who Posted | Views | Timestamp | Likes</div>
      <section className="video__description">
        Description: Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus
      </section>
    </>
  );
};

export default Hero;
