import react from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoDisplay from "./components/VideoDisplay";

function App() {
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
