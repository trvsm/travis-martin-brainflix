import "./commentCard.scss";

const CommentCard = ({activeComment}) => {
  return (
    <>
      <section className="comment">
        <div className="comment__profile-pic"></div>
        <div className="comment__right-section">
          <div className="comment__attribution">
            <span className="comment__name">{activeComment.user}</span>
            <span className="comment__timestamp">{activeComment.timestamp}</span>
          </div>
          <p className="comment__comment">{activeComment.comment}</p>
        </div>
      </section>
    </>
  );
};

export default CommentCard;
