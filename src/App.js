import "./styles/main.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
// import MainSection from "./components/mainsection/MainSection";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <Sidebar></Sidebar>
    </>
  );
}

export default App;
