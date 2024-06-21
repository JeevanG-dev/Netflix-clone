import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import dropdown from "../../assets/caret_icon.svg";
import notification from "./notification";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";
function Navbar() {
  const navRef = useRef();
  //used useEfect to create a effect when scrolled the window
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 140) {
        //navRef is a referece that we add to nav class
        navRef.current.classList.add("dark-nav");
      } else {
        navRef.current.classList.remove("dark-nav");
      }
    });
  }, []);

  return (
    <>

      <nav ref={navRef} className="nav">
        <div className="leftNav">
          <img src={logo} alt="" className="logoNav" />

          <ul className="ulNav">
            <li>Home</li>
            <li>Tv Shows </li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="rightNav">
          <div className="search">
            <img src={search} alt="" />
          </div>
          <div className="userNav">Jeevan</div>
          <div className="bellIcon">
            <img src={bell} alt="" />
            <div className="bellNotification">
              {notification.map((noti, index) => {
                return <p key={index}>{noti.name}</p>;
              })}
            </div>
          </div>

          <div className="profile">
            <img className="profile-img" src={profile} alt="" />

            <img
              src={dropdown}
              alt=""
              style={{ margin: "0 0 0 6px" }}
              className="arrow"
            />
            <div className="dropdown">
              <p
                onClick={() => {
                  logout();
                }}
              >
                Sign out of Netflix
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
