import facebook from "../../assets/facebook_icon.png";
import insta from "../../assets/instagram_icon.png";
import twitter from "../../assets/twitter_icon.png";
import youtube from "../../assets/youtube_icon.png";
import content from "./content";
import "./footerpage.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-icons">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="context">
          {content.map((content, index) => {
            return (
              <ul>
                <li key={index}>{content.name}</li>
              </ul>
            );
          })}
        </div>
        <div className="copyright">
          <p>@copyright Jeevan Gaudel</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
