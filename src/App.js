import react, { useEffect } from "react";
// import webScriper from "../webScripter";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoDisplay from "./components/VideoDisplay";
import db from "./firebase";
import { useGlobalState } from "./globalState";
// import { addData } from "./firebase";
// import webScriper from "./webScripter";

function App() {
  const [{ posts }, dispatch] = useGlobalState();
  useEffect(() => {
    db?.collection("posts")?.onSnapshot((snapshot) =>
      dispatch({
        type: "SET_POSTS",
        posts: snapshot?.docs.map((doc) => doc?.data()),
      })
    );
  }, []);
  console.log(posts);
  return (
    <div className="app">
      <div className="app__container">
        <Navbar />
        <div className="app__dispaly">
          <Sidebar />
          <VideoDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
