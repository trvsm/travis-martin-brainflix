import "./upload.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Upload() {
  const navigate = useNavigate();

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");


// track & set form fields via state
  const handleChangeTitle = (event) => {
    setUploadTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setUploadDescription(event.target.value);
  };


  // handle form submit & return user to homepage
  const submitHandler = (event) => {
    event.preventDefault();

    setUploadMessage("Thanks for uploading! Automatic redirect in 5 seconds");
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  return (
    <div className="upload__wrapper">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__success">{uploadMessage}</div>
      <form className="upload__form" action="submit" onSubmit={submitHandler}>
        <section className="upload__video">
          <p className="upload__thumbnail-label">VIDEO THUMBNAIL</p>
          <div className="upload__thumbnail"></div>
        </section>
        <section className="upload__form-contents">
          <label className="upload__label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload__input"
            placeholder="Add a title to your video"
            type="text"
            name="title"
            onChange={handleChangeTitle}
            value={uploadTitle}
          />
          <label className="upload__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__input upload__input--textarea"
            placeholder="Add a description to your video"
            name="description"
            type="textarea"
            onChange={handleChangeDescription}
            value={uploadDescription}
          />

          <div className="upload__buttons">
            <button
              onClick={() => navigate("/")}
              className="upload__button upload__button--cancel"
            >
              CANCEL
            </button>
            <button className="upload__button">PUBLISH</button>
          </div>
        </section>
      </form>
    </div>
  );
}
