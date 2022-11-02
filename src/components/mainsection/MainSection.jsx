import "./mainSection.scss";

const MainSection = ({comments}) => {

  // a function to map from JSON to comment card
  return (
    comments.map((comment) => {
      return (
            <section className="comment" key={comment.id}>        
        <div className="comment__profile-pic"></div>
        <div className="comment__right-section">
          <div className="comment__attribution">
            <span className="comment__name">{comment.user}</span>
            <span className="comment__timestamp">{comment.timestamp}</span>
          </div>
          <p className="comment__comment">{comment.comment}</p>
        </div>
      </section>
      
          );
        })
  );
};

export default MainSection;
