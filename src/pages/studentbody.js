import React from "react";
import Page from "../components/DefPage.js";
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

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
          <h2 style={{"margin-top":"80px"}}> Hostel Secys </h2>
          <Page input="1"/>
        </div>
      )
    } else if (this.state.subroute==="reps") {
      output = (
        <div className="tc">
          <h2 style={{"margin-top":"80px"}}> Representatives </h2>
          <Page input="2"/>
        </div>
      )
    } else if (this.state.subroute==="sports") {
      output = (
        <div className="tc">
          <h2 style={{"margin-top":"80px"}}> Sports Captains & VCs </h2>
          <Page input="3"/>
        </div>
      )
    }

    return (
      <div>
        <Nav/>
        <div style={{"margin-top":"120px"}}>
          <div class="ph3 tc">
            <h1 class="f2 fw6 ttu tracked">STUDENT BODY</h1>
            <p class="f5 link hover-bg-dark-gray ph3 pv2 mb2 dib white" style={{background: (this.state.subroute=="hostel") ? "#02075D" : "black"}} onClick={()=>this.onSubChange('hostel')}>Hostel Secys</p>
            <p class="f5 link hover-bg-dark-gray ph3 pv2 mb2 dib white" style={{background: (this.state.subroute=="reps") ? "#02075D" : "black"}} onClick={()=>this.onSubChange('reps')}>Representatives</p>
            <p class="f5 link hover-bg-dark-gray ph3 pv2 mb2 dib white" style={{background: (this.state.subroute=="sports") ? "#02075D" : "black"}} onClick={()=>this.onSubChange('sports')}>Sports Captains & VCs</p>
          </div>
          {output}
        </div>
        <Footer/>
      </div>
      );
  }
}

export default Stu;