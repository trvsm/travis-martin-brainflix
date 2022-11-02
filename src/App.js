import "./styles/main.scss";
import { useState } from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainSection from "./components/mainsection/MainSection";

// import Sidebar from "./components/sidebar/Sidebar";

// import videoDetails from "../src/data/video-details.json";
import videoData from "../src/data/videos.json";

// https://project-2-api.herokuapp.com/ BrainFlix api

function App() {
  // const [activeVideos, setActiveVideos] = useState(videoDetails);

  //try mapping videos to output cards
  const [videos] = useState(videoData);
  return (
    <>
      <Header />
      <Hero></Hero>
      <MainSection></MainSection>
      {videos.map((video) => {
        return (
          <Card
            key={video.id}
            video={video}
          />
        );
      })}
      {/* <Sidebar></Sidebar> */}
    </>
  );
}

export default App;
