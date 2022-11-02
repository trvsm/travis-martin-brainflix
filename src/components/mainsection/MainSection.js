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
        {activeComments.map((activeComment) => {
          return (
            <CommentCard key={activeComment.id} activeComment={activeComment} />
          );
        })}
    </section>
  );
};

export default MainSection;
