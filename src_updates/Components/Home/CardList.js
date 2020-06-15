import React from "react";
import Card from './Card.js';
import "./GenStyle.css";

const CardList = ({title, who}) => {
  const ref = React.useRef()
  return (
    <div>
      <div className="bl bw2 b--orange divflex" innerRef={ref}>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
        <Card title={title} who={who}/>
      </div>
    </div>
  )
}

export default CardList;
