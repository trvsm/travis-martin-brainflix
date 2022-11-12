import "./MainSection.scss";

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

let time = (timestamp) => {
  formatCommentDate(timestamp);
};
const MainSection = ({ comments }) => {
  // a function to map from JSON to comment card
  return comments.map((comment) => {
    time(comment.timestamp);
    return (
      <section className="comment" key={comment.id}>
        <div className="comment__profile-pic"></div>
        <div className="comment__right-section">
          <div className="comment__attribution">
            <span className="comment__name">{comment.name}</span>
            <span className="comment__timestamp">{dateString}</span>
          </div>
          <p className="comment__comment">{comment.comment}</p>
        </div>
      </section>
    );
  });
};

export default MainSection;
