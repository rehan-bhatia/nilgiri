import React from "react";
import ImageCard from './ImageCard.js';
import "./GenStyle.css";

const ImageList = ({ onRouteChange }) => {
  const ref = React.useRef()
  return (
    <div >
      <div className="tc image-grid" innerRef={ref}>
        <ImageCard onRouteChange={onRouteChange} dest="anec" title="Anecdotes" desc="Relive some of our good (or maybe risky) experiences"/>
        <ImageCard onRouteChange={onRouteChange} dest="awards" title="Awards" desc="View the many trophies and awards won by our hostel"/>
        <ImageCard onRouteChange={onRouteChange} dest="gallery" title="Gallery" desc="Get a peek inside the hostel life of Nilbulls"/>
      </div>
    </div>
  )
}

export default ImageList;
