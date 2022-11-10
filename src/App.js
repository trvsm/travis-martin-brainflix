import "./styles/main.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "./components/card/Card";
import Form from "./components/form/Form";
import Hero from "./components/hero/Hero";
import MainSection from "./components/mainsection/MainSection";

//info to make and store api requests
const brainflixKey = "?api_key=29ea6abf-4f80-41fe-996e-c95e8069ab12";
const videoEndpoint = "https://project-2-api.herokuapp.com/videos";

let videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
const videoData = [];
let videoDetails = {};

const nextVideoList = (videoId) => {
  return videoData.filter((video) => video.id !== videoId);
};



function App() {
  const [defaultVideo, setDefaultVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  // can change all defaultVideo to video details, except initial video shows in side
  const [videos, setVideos] = useState(nextVideoList(defaultVideo));
  const [activeDetails, setActiveDetails] = useState(videoDetails);

  const params = useParams();

  //TODO: replace videoId with defaultVideo?
  // gets active video stats and comments, sets to state
  useEffect(() => {
    axios.get(`${videoEndpoint}/${videoId}${brainflixKey}`).then((response) => {
      videoDetails = response.data;
      setActiveDetails(videoDetails);
    });
  }, []);

  //gets video thumbnail, sets to next videos list, filters out video set to default (details)
  useEffect(() => {
    axios.get(videoEndpoint + brainflixKey).then((response) => {
      for (let index = 0; index < response.data.length; index++) {
        videoData[index] = response.data[index];
      }
      setVideos(nextVideoList(defaultVideo));
    });
  }, [defaultVideo]);

  // when params updated make api call, use to set main video, & video details
  // another API call?
  useEffect(() => {
    // I see that params is empty object on logo click, how to set state to default
    console.log(params);
    if (params.videoId) {
      axios
        .get(`${videoEndpoint}/${params.videoId}${brainflixKey}`)
        .then((response) => {
          setDefaultVideo(response.data.id);
          setActiveDetails(response.data);
          setVideos(nextVideoList(response.data.id));
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
