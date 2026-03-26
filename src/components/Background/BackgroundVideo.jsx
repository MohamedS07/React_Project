import React from "react";
import "./BackgroundVideo.css";
import stockVideo from "../../assets/Stock_Video.mp4";

const BackgroundVideo = ({ children }) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video">
        <source src={stockVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundVideo;