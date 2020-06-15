import React from "react";
import Award from './Award.js';
import {
  BrowserView,
  MobileView,
} from "react-device-detect"

const AwardList = () => {
  const ref = React.useRef()
  return (
    <div >
      <BrowserView>
        <div className="tc ui centered cards" innerRef={ref} style={{"margin-right":"auto", "margin-left":"auto"}}>
          <Award name="Event" team="Team Members name" rank={1}/>
          <Award name="Event" team="Team Members name" rank={2}/>
          <Award name="Event" team="Team Members name" rank={3}/>
          <Award name="Event" team="Team Members name" rank={1}/>
          <Award name="Event" team="Team Members name" rank={2}/>
          <Award name="Event" team="Team Members name" rank={3}/>
        </div>
      </BrowserView>
      <MobileView>
        <div className="tc ml4" innerRef={ref} >
          <Award name="Event" team="Team Members name" rank={1}/>
          <Award name="Event" team="Team Members name" rank={2}/>
          <Award name="Event" team="Team Members name" rank={3}/>
          <Award name="Event" team="Team Members name" rank={1}/>
          <Award name="Event" team="Team Members name" rank={2}/>
          <Award name="Event" team="Team Members name" rank={3}/>
        </div>
      </MobileView>
    </div>
  )
}

export default AwardList;
