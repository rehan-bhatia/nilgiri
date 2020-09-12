import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CardList from '../components/CardList.js';
import ImageList from '../components/ImageList.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import {navigate} from "gatsby";
import "../components/animate.css"
import "../components/GenStyle.css";
import "tachyons";

class Home extends React.Component {
	render() {
		return(
			<div>
				<Nav/>
				<div class="sans-serif">
				  <div class="cover bg-left bg-center-l" style={{"background-image": "url(https://i.ibb.co/88mWBbS/index.png)", "height":"100vh", opacity:"0.8"}}>
				    <div class="tc-l ph3 pa6">
					    <div style={{"padding-top":"25vh"}} class="tc-l">
					    	<h2 className="animated bounceIn delay-1s f1 f1-l fw5 black mb0 pl5 lh-title">Welcome to Nilgiri</h2>
					        <h2 className="animated fadeIn delay-2s fw4 f2 black-80 mt2 pl5 mb4 white">The Best Hostel in IITD</h2>
					    </div>
				    </div>
				  </div>
				  <ScrollAnimation animateIn="fadeIn" duration="3" style={{"display":"block"}}>
					  <div className="grid-holder tc" style={{ "padding-top":"40px", width: "60vw", "margin-top":"30px"}}>
					  	<h2 className="f2"> The Place to be at IITD </h2>
					  	<h2 className="f4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
	      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	      vero eos et accusam et justo duo dolores et ea rebum.</h2>
					  	<ImageList onRouteChange={this.props.onRouteChange} />
					  </div>
				  </ScrollAnimation>
				  <div className="grid2">
					  <ScrollAnimation animateIn="fadeInLeft" duration="2" style={{width: "30vw"}}>
						  <div style={{"padding-top":"40px", width: "40vw", "margin-top":"80px", "margin-left":"50px", "margin-right":"20px", "margin-bottom":"80px"}}>
						  	<h2 className="f2"> The Student Body </h2>
						  	<h2 className="f4">Like every other hostel, there are 5 major student bodies in Nilgiri - BSW, BRCA, BHM, BSA and SAC. Apart from the representatives and secretaries, we also have the HWC and MC, which work together to resolve standard issues and make Nilgiri a better place to live for all.</h2>
		     				 <p class="grow no-underline pointer br-pill ph3 pv2 mb2 dib white bg-dark-blue mt3" style={{"font-size":"18px"}} onClick={()=>navigate("/studentbody")}>Meet the Nilbulls</p>
						  </div>
					  </ScrollAnimation>
					  <ScrollAnimation animateIn="fadeInRight" duration="3">
						  <img src="https://i.ibb.co/bKdm1xn/stub.png" alt="student body" style={{"height":"auto", "width":"45vw", "transform": "rotateZ(5deg)", "margin-bottom":"80px", "margin-left":"20vw", "margin-top":"100px"}}/>
					  </ScrollAnimation>
				  </div>
				  <div>
					  <div className="sideline">
						<p className="cooltext">What's New</p>
						<p className="w-60 white desc">The latest events, announcements and news from the hostel & around the campus!</p>
					  </div> 
					  <CardList/>
				  </div>
				</div>
				<Footer/>
			</div>
			);
	}

}

export default Home;