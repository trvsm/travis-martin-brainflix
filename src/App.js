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



const getVideoDetails = (videoId) => {
  return videoDetails.find((vid) => vid.id === videoId);
};

function App() {
  const [defaultVideo, setDefaultVideo] = useState(videoDetails[0]);
  const [videos] = useState(videoData);
  const [activeDetails, setActiveDetails] = useState(
    getVideoDetails(videoDetails[0].id)
  );

  const clickEvent = (event, videoId) => {
    event.preventDefault();
    setActiveDetails(getVideoDetails(videoId));
    setDefaultVideo(videoId)
    // set the clicked card to active video
   
  };

  return (
    <>
      <Header />
      <Hero key={activeDetails.id} activeVideo={activeDetails} />
      <Form />
      {/* TODO: set active video as default, set var to accept changed video */}
      <MainSection comments={activeDetails.comments} />
      <Card videos={videos} clickEvent={clickEvent} />;
    </>
  );
}

export default App;
