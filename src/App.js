import "./styles/main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import Card from "./components/card/Card";
import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";
import MainSection from "./components/mainsection/MainSection";

//info to make and store api requests
const brainflixKey = "?api_key=29ea6abf-4f80-41fe-996e-c95e8069ab12";
const videoEndpoint = "https://project-2-api.herokuapp.com/videos";

const videoData = [];
let videoDetails = {};

const nextVideoList = (videoId) => {
  return videoData.filter((video) => video.id !== videoId);
};

function App() {
  const [defaultVideo, setDefaultVideo] = useState("");
  // can change all defaultVideo to video details, except initial video shows in side
  const [videos, setVideos] = useState(videoData);
  const [activeDetails, setActiveDetails] = useState(videoDetails);

  const params = useParams();


  useEffect(() => {
    // I see that params is empty object on logo click, how to set state to default
    if (params.videoId) {
      axios
        .get(`${videoEndpoint}/${params.videoId}${brainflixKey}`)
        .then((response) => {
          let active = response.data;
          setDefaultVideo(active.id);
          setActiveDetails(active);
          return active;
        })
        .then((active) => {
          axios.get(`${videoEndpoint}${brainflixKey}`).then((response) => {
            setVideos(response.data.filter((video) => video.id !== active.id));
          });
        });
      //setVideos in separate call to get video list & filter
      // setVideos(active.filter((video) => video.id !== response.data.id));
    } else {
      axios
        .get(`${videoEndpoint}${brainflixKey}`)
        .then((response) => {
          const firstVid = response.data[0].id;
          setDefaultVideo(firstVid);
          setVideos(response.data.filter((video) => video.id !== firstVid));
          return firstVid;
        })
        .then((firstVid) => {
          axios
            .get(`${videoEndpoint}/${firstVid}${brainflixKey}`)
            .then((response) => {
              setActiveDetails(response.data);
            });
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
