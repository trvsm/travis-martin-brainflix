import "./commentCard.scss";

const CommentCard = (props) => {
  return (
    <>
      <section className="comment">
        <div className="comment__profile-pic"></div>
        <div className="comment__right-section">
          <div className="comment__attribution">
            <span className="comment__name">{props.user}</span>
            <span className="comment__timestamp">{props.timestamp}</span>
          </div>
          <p className="comment__comment">{props.comment}</p>
        </div>
      </section>
    </>
  );
};

export default CommentCard;
