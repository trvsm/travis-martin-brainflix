import "../../styles/main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* supports back end as a variable; 
can easily use different back end for diff environments; dev, production, etc
*/

import Card from "../../components/card/Card";
import Form from "../../components/form/Form";
import Hero from "../../components/hero/Hero";
import MainSection from "../../components/mainsection/MainSection";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

//info to make and store api requests
const brainflixKey = "?api_key=29ea6abf-4f80-41fe-996e-c95e8069ab12";
const videoEndpoint = "https://project-2-api.herokuapp.com/videos";

function App() {
  const [videos, setVideos] = useState([]);
  const [activeDetails, setActiveDetails] = useState({});

  const params = useParams();

  useEffect(() => {
    if (params.videoId) {
      // get video details via params ID, display as active with stats & comments
      axios
        .get(`${BACK_END}/videos/${params.videoId}`)
        .then((response) => {
          let active = response.data;
          setActiveDetails(active);
          return active;
        })
        .then((active) => {
          // filter video list to exclude active video
          axios.get(`${BACK_END}/videos`).then((response) => {
            setVideos(response.data.filter((video) => video.id !== active.id));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // set default video to first video on API, filter side videos
      axios
        .get(`${BACK_END}/videos`)
        .then((response) => {
          const firstVid = response.data[0].id;
          setVideos(response.data.filter((video) => video.id !== firstVid));
          return firstVid;
        })
        .then((firstVid) => {
          axios.get(`${BACK_END}/videos/${firstVid}`).then((response) => {
            setActiveDetails(response.data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params]);

  return (
    <>
      <div className="large-flex">
        <div className="left">
          <Hero key={activeDetails.id} activeVideo={activeDetails} />
          <Form />
          {Object.keys(activeDetails).length > 0 && (
            <MainSection comments={activeDetails.comments} />
          )}
        </div>
        <div>
          <Card videos={videos} />
        </div>
      </div>
    </>
  );
}

export default App;
