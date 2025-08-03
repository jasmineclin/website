import React from "react";
import "./InfoSection.css";

type InfoSectionProps = {
  title: string;
  text: string;
  image?: string; // made optional
  reverse?: boolean;
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, text, image, reverse }) => {
  return (
    <section className={`info-section ${reverse ? "reverse" : ""}`}>
      {image ? (
        <img src={image} alt={title} className="info-image" />
      ) : (
        <div className="image-placeholder">Image Placeholder</div>
      )}
      <div className="info-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default InfoSection;
