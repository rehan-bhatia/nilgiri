import React from "react";
import Award from './Award.js';


const AwardList = () => {
  const ref = React.useRef()
  return (
    <div >
      <div className="tc ui centered cards" innerRef={ref} style={{"margin-right":"auto", "margin-left":"auto"}}>
        <Award name="Event" team="Team Members name" rank={1}/>
        <Award name="Event" team="Team Members name" rank={2}/>
        <Award name="Event" team="Team Members name" rank={3}/>
        <Award name="Event" team="Team Members name" rank={1}/>
        <Award name="Event" team="Team Members name" rank={2}/>
        <Award name="Event" team="Team Members name" rank={3}/>
      </div>
    </div>
  )
}

export default AwardList;
