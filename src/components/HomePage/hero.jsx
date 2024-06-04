import Navbar from "../Navbar/navbar";
import hero_banner from "../../assets/hero_banner.jpeg";
import hero_title from "../../assets/hero_title.png";
import hero_play from "../../assets/play_icon.png";
import hero_info from "../../assets/info_icon.png";
import TitleCards from "../TitleCards/titleCards";
import Footer from "../Footer/footerPage";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <div className="hero">
          <img src={hero_banner} alt="" className="hero-img" />

          <div className="hero-caption">
            <img src={hero_title} alt="" className="caption-img" />
            <p>
              Hello Everyone I am Jeevan and I created This Netflix Clone
              Website. Hope you like it. Please explore around and watch some
              awasome movies Trailers. I created this webiste using react and
              Api for images and videos Info
            </p>

            <div className="hero-btns">
              <button className="btn">
                <img src={hero_play} alt="" />
                Play
              </button>
              <button className="btn dark-btn">
                <img src={hero_info} alt="" />
                More Info
                <div className="hero-dropdown">
                  <p style={{ width: "100%" }}>
                    Hello Everyone I created this Website for my Faguniya
                  </p>
                </div>
              </button>
            </div>
            <TitleCards></TitleCards>
          </div>
          <div className="moreCards">
            <TitleCards
              title={"Continue for Jeevan"}
              category={"top_rated"}
            ></TitleCards>
            <TitleCards
              title={"Popular on Netflix"}
              category={"popular"}
            ></TitleCards>
            <TitleCards title={"Upcoming"} category={"upcoming"}></TitleCards>
            <TitleCards title={"Blockbaster"} category={"popular"}></TitleCards>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Hero;
