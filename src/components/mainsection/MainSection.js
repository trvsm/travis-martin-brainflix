import "./mainSection.scss";
import CommentCard from "../commentCard/CommentCard.js";

// replace this array with state to get local items
const testComments = [
  {
    id: "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
    likes: 0,
    timestamp: 1628522461000,
  },
  {
    id: "091de676-61af-4ee6-90de-3a7a53af7521",
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    likes: 0,
    timestamp: 1626359541000,
  },
  {
    id: "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
    likes: 0,
    timestamp: 1626011132000,
  },
];

const MainSection = () => {
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
        {testComments.map((testComment) => {
          return (
            <CommentCard
              key={testComment.id}
              // key tied to component within map function so component uniquely identified
              user={testComment.name}
              timestamp={testComment.timestamp}
              comment={testComment.comment}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MainSection;
