import Login from "./components/Login/Login";
import Hero from "./components/HomePage/hero";
import { Route, Routes, useNavigate } from "react-router-dom";
import Player from "./components/VideoPlayer/player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {
  const navi = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navi('/netflix-clone')
      } else {
        console.log("logged Out");
        navi('/login')
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/netflix-clone" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
