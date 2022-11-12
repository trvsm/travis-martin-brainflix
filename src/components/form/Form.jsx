import "./Form.scss";

const Form = () => {
  return (
    <div className="comments__form-flex">
      <section className="comments__profile-pic"></section>
      <form className="comments__form" id="conversation">
        <div className="comments__input-wrapper">
          <label className="comments__label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            type="text"
            className="comments__form-comment"
            name="comment"
            id="comment"
            required
            placeholder="Add a new comment"
          />
        </div>
        <button className="comments__button" type="submit">
          COMMENT
        </button>
      </form>
    </div>
  );
};

export default Form;
