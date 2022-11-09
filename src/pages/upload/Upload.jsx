import "./upload.scss";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    alert("Thanks for uploading");
    navigate("/");
  };
  return (
    <>
      <h1>Upload</h1>
      <form action="submit" onSubmit={submitHandler}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" />
        </label>
        <label htmlFor="description">
          Description
          <input name="description" type="textarea" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
