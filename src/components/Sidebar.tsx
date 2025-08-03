import React from "react";
import "./Sidebar.css";
import logoImg from "../assets/logo.svg";


const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <img src={logoImg} alt="Logo" className="sidebar-logo" />
      <div className="nav-buttons">
        <p className = "description">I’m Jasmine Linang, a computer science student at Lehigh University with a passion for blending creativity and technology to build inclusive, engaging digital experiences. I specialize in frontend development and data-driven applications, with hands-on experience using tools like Flask, React Native, and PostgreSQL. My background in 3D modeling with Blender fuels my creative approach to design and problem-solving, allowing me to craft intuitive user interfaces and dynamic environments. Beyond tech, I’m deeply committed to fostering supportive, diverse communities in and outside the classroom, where collaboration, representation, and innovation can thrive.</p>
      </div>
    </nav>
  );
};

export default Sidebar;
