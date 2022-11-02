import "./styles/main.scss";
import { useState } from "react";
import Card from "./components/card/Card";
import Form from "./components/form/Form"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainSection from "./components/mainsection/MainSection";

// import Sidebar from "./components/sidebar/Sidebar";

import videoDetails from "../src/data/video-details.json";
import videoData from "../src/data/videos.json";

// https://project-2-api.herokuapp.com/ BrainFlix api

const getVideoDetails = (videoId) => {
  return videoDetails.find((vid)=>vid.id === videoId);
}

function App() {
  const [defaultVideo, setDefaultVideo] = useState(videoDetails[0]);
  const [videos] = useState(videoData);
  const [activeDetails, setActiveDetails] = useState(getVideoDetails(videoDetails[0].id));
  let displayedVideo = ''


  const clickEvent = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.id);
    const clickedCard = event.currentTarget.id;
    // set the clicked card to active video
    displayedVideo = clickedCard
    return displayedVideo
  };

  return (
    <>
      <Header />
      <Hero key={defaultVideo.id} activeVideo={defaultVideo} />
      <Form />
      {/* TODO: set active video as default, set var to accept changed video */}
      <MainSection />
      {videos.map((video) => {
        return <Card key={video.id} video={video} clickEvent={clickEvent} />;
      })}
      {/* <Sidebar></Sidebar> */}
    </>
  );
}

export default App;
