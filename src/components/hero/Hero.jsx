import "./hero.scss";
let dateString;
const formatCommentDate = (dateMS) => {
  //grabs current date as string
  const inputDate = new Date(dateMS);
  const stringDate = inputDate.toDateString();
  const dateArr = stringDate.split(" ");
  //splits date string to array
  const trimDateArr = dateArr.slice(1, 4);
  //trim date array to relevant fields
  dateString = trimDateArr[0] + "/" + trimDateArr[1] + "/" + trimDateArr[2];
  //converts array to '/' separated string
  return dateString;
  //returns current date
};


const Hero = (props) => {
  //props for video banner
let time = ()=>{formatCommentDate(props.activeVideo.timestamp);}
time();

  return (
    Object.keys(props.activeVideo).length > 0 &&(
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
          <div className="hero__timestamp">{dateString}</div>
        </div>
        <div className="hero__bottom">
          <span className="hero__views">{props.activeVideo.views}</span>
          <div className="hero__likes">{props.activeVideo.likes}</div>
        </div>
      </div>
      <section className="hero__description">
        {props.activeVideo.description}
      </section>
      <p className="hero__comments">{props.activeVideo.comments.length} Comments</p>
    </div>)
  );
};

export default Hero;
