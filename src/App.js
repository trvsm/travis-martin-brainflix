import "./styles/main.scss";
import { useState } from "react";

// source data
import videoDetails from "../src/data/video-details.json";
import videoData from "../src/data/videos.json";

import Card from "./components/card/Card";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainSection from "./components/mainsection/MainSection";

// https://project-2-api.herokuapp.com/ BrainFlix api

const nextVideoList = (videoId) => {
  return videoData.filter((video) => video.id !== videoId);
};

const getVideoDetails = (videoId) => {
  return videoDetails.find((video) => video.id === videoId);
};

function App() {
  const [defaultVideo, setDefaultVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [activeDetails, setActiveDetails] = useState(
    getVideoDetails(defaultVideo)
  );
  const [videos, setVideos] = useState(nextVideoList(defaultVideo));

  const clickEvent = (event, videoId) => {
    event.preventDefault();
    console.log(event)
    setDefaultVideo(videoId);
    setVideos(nextVideoList(videoId));
    setActiveDetails(getVideoDetails(videoId));
    // set the clicked card to active video
  };

  return (
    <>
      <Header />
      <div className="large-flex">
        <div className="left">
          <Hero key={activeDetails.id} activeVideo={activeDetails} />
          <Form />
          {/* TODO: add number of comments header above form */}
          <MainSection comments={activeDetails.comments} />
        </div>
        <div>
          <Card videos={videos} clickEvent={clickEvent} />
        </div>
      </div>
    </>
  );
}

export default App;
