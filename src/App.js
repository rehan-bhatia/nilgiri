import React from 'react';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home/Home.js';
import AnecPage from './Components/Anecdotes/AnecPage.js';
import Stu from "./Components/StudentBody_test/Stu.js";
import Gallery from './Components/Gallery/Gallery.js';
import Main from './Components/Awards/Main.js';
import 'tachyons';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      route: 'home',
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    window.scrollTo(0, 0);
  }

  render() {
    let output;
    if (this.state.route==="home") {
      output = <Home onRouteChange={this.onRouteChange}/>
    } else if (this.state.route==="anec") {
      output=<AnecPage/>
    } else if (this.state.route==="stu") {
      output=<Stu />
    } else if (this.state.route==="awards") {
      output=<Main/>
    } else if (this.state.route==="gallery") {
      output=<Gallery/>
    }

    return (
      <div>
        <Nav onRouteChange={this.onRouteChange} />
        {output}
        <Footer/>
      </div>
    );
  }
  
}

export default App;
