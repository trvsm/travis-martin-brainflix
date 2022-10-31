import "./styles/main.scss";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import MainSection from "./components/mainsection/MainSection";


function App() {
  return (
    <>
      <Header />

      <MainSection>
        <Gallery></Gallery>
      </MainSection>
      <Footer></Footer>
    </>
  );
}

export default App;
