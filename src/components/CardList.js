import React from "react";
import Card from './Card.js';
import "./GenStyle.css";

const CardList = () => {
  const ref = React.useRef()
  const bsplink = <a href="https://www.facebook.com/bspiitd">Click Here</a>
  return (
    <div>
      <div className="bl bw2 b--orange divflex" innerRef={ref}>
        <Card title='Student Elections' who='Student Affairs' date="13th Sept Onwards" text={`Student elections for several positions across SAC, BSW, BRCA, BSA, BHM, Hostel positions etc. are scheduled. Find manifestos of students at BSP, IITD FB page.`} link="https://www.facebook.com/bspiitd"/>
        <Card title='Feedback & Suggestions' who='Nilgiri Hostel' text="For any suggestions, feedback or complaints, please fill the following Google Form and we will address the issue as soon as possible" link="www.google.com"/>
      </div>
    </div>
  )
}

export default CardList;
