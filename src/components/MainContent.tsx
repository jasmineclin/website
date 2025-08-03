import React from "react";
import "./MainContent.css";
import topSection from "../assets/topSection.svg";

const MainContent: React.FC = () => {
  return (
    <section className="main-content">
       <img src={topSection} alt="topSectionImage" className="top-image" />
    </section>
  );
};

export default MainContent;
