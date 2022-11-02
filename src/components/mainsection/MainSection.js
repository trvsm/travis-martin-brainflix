import "./mainSection.scss";
import { useState } from "react";
import CommentCard from "../commentCard/CommentCard.js";
import videoDetails from "../../data/video-details.json";

// replace this array with state to get local items

const MainSection = () => {
  const [activeComments] = useState(videoDetails[0].comments);
  // a function to map from JSON to comment card
  return (
    <section className="comments">
      <div className="comments__form-flex">
        <section className="comments__profile-pic"></section>
        <form className="comments__form" id="conversation">
          <label className="comments__label" for="comment">
            JOIN THE CONVERSATION
          </label>
          <input
            type="text"
            className="comments__form-comment"
            name="comment"
            id="comment"
            required
            placeholder="Add a new comment"
          />
          <button className="comments__button" type="submit">
            COMMENT
          </button>
        </form>
      </div>
      <div className="comments__cards">
        {activeComments.map((activeComment) => {
          return (
            <CommentCard key={activeComment.id} activeComment={activeComment} />
          );
        })}
      </div>
    </section>
  );
};

export default MainSection;
