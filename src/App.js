import "./styles/main.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// source data
import videoDetails from "../src/data/video-details.json";

import Card from "./components/card/Card";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainSection from "./components/mainsection/MainSection";
import axios from "axios";

//info to make and store api requests
const brainflixKey = "29ea6abf-4f80-41fe-996e-c95e8069ab12";
const videoEndpoint = "https://project-2-api.herokuapp.com/videos?api_key=";
const videoData = [];

axios
  .get(videoEndpoint + brainflixKey)
  .then((response) => {
    for (let index = 0; index < response.data.length; index++) {
      videoData[index] = response.data[index];
    }
    return videoData;
  })
  //getting a string successfully; filter video list
  .then((response) => {
    console.log(typeof response[0].id);
  });

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
    console.log(event);
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
