import "./upload.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Upload() {
  const navigate = useNavigate();

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleChangeTitle = (event) => {
    setUploadTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setUploadDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setUploadMessage("Thanks for uploading, redirect in 5 seconds");
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  return (
    <div className="upload__wrapper">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__success">{uploadMessage}</div>
      <section>
        <form action="submit" onSubmit={submitHandler}>
          <label htmlFor="title">
            TITLE YOUR VIDEO
            <input
              placeholder="Add a title to your video"
              type="text"
              name="title"
              onChange={handleChangeTitle}
              value={uploadTitle}
            />
          </label>
          <label htmlFor="description">
            ADD A VIDEO DESCRIPTION
            <input
              placeholder="Add a description to your video"
              name="description"
              type="textarea"
              onChange={handleChangeDescription}
              value={uploadDescription}
            />
          </label>
          <div className="upload__buttons">
            <button>CANCEL</button>
            <button>SUBMIT</button>
          </div>
        </form>
      </section>
    </div>
  );
}
