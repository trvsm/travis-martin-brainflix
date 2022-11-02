import './form.scss'

const Form = () =>{
    return (
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
    );
}

export default Form