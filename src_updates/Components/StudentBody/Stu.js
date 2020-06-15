import React from "react";
import Page from "./DefPage.js";

class Stu extends React.Component {
  constructor() {
    super()
    this.state={
      subroute="hostel"
    }
  }

  onSubChange = (route) => {
    this.setState({subroute: route});
  }

  let output;

  if (this.state.subroute==="hostel") {
    output = <Page data="hostel_data"/>
  } else if (this.state.subroute==="reps") {
    output = <Page data="reps_data"/>
  } else if (this.state.subroute==="sports") {
    output = <Page data="sports_data"/>
  }

  render () {
    return (
      <div>
        <div class="ph3 tc">
          <h1 class="f6 fw6 ttu tracked">STUDENT BODY</h1>
          <p class="f3 link hover-bg-dark-gray ph3 pv2 mb2 dib white bg-black" onClick={()=>this.onSubChange('hostel')}>Hostel Secys</p>
          <p class="f3 link hover-bg-dark-gray ph3 pv2 mb2 dib white bg-black" onClick={()=>this.onSubChange('reps')}>Cultural Reps</p>
          <p class="f3 link hover-bg-dark-gray ph3 pv2 mb2 dib white bg-black" onClick={()=>this.onSubChange('sports')}>Sports Captains & VCs</p>
        </div>
        {output}
      </div>
      );
  }
}

export default Stu;