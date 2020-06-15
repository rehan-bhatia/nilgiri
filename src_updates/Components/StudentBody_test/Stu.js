import React from "react";
import Page from "./DefPage.js";

class Stu extends React.Component {
  constructor() {
    super()
    this.state={
      subroute:"hostel"
    }
  }

  onSubChange = (route) => {
    this.setState({subroute: route});
  }

  
  render () {
    let output;

    if (this.state.subroute==="hostel") {
      output = (
        <div className="tc">
          <h1 style={{"margin-top":"30px"}}> Hostel Secys </h1>
          <Page input="1"/>
        </div>
      )
    } else if (this.state.subroute==="reps") {
      output = (
        <div className="tc">
          <h1 style={{"margin-top":"30px"}}> BRCA Reps </h1>
          <Page input="2"/>
        </div>
      )
    } else if (this.state.subroute==="sports") {
      output = (
        <div className="tc">
          <h1 style={{"margin-top":"30px"}}> Sports Captains & VCs </h1>
          <Page input="3"/>
        </div>
      )
    }

    return (
      <div style={{"margin-top":"150px"}}>
        <div class="ph3 tc">
          <h1 class="f1 fw6 ttu tracked">STUDENT BODY</h1>
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