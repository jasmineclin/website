import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import dresserImg from "./assets/dresser.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content-area">
        <MainContent />
        <InfoSection
          title="About Blender"
          text="Step into immersive 3D worlds I've crafted using Blender with every asset designed from scratch with imagination, passion, and precision."
          image={dresserImg}
        />
        <InfoSection
          title="About CS Projects"
          text="From mobile apps to wearable tech dashboards, my computer science projects bring data, design, and real-world impact together through clean code and thoughtful user experiences."
          image=""
          reverse
        />
        <InfoSection
          title="Contact Me"
          text=" Have a project in mind or just want to connect? Reach out—I’d love to hear from you!"
          image=""
        />
        <Footer />
      </main>
    </div>
  );
};

export default App;
