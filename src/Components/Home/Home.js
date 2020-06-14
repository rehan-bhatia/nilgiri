import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CardList from './CardList.js';
import ImageList from './ImageList.js'
import '../Fonts/Righteous-Regular.ttf';
import "./animate.css"
import "./GenStyle.css";

class Home extends React.Component {
	render() {
		return(
			<div class="sans-serif">
			  <div class="cover bg-left bg-center-l" style={{"background-image": "url(http://mrmrs.github.io/photos/u/011.jpg)", "height":"100vh"}}>
			    <div class="tc-l ph3 pa6">
				    <div style={{"padding-top":"40vh"}} class="tc-l ph3 pa6">
				    	<h1 className="animated bounceIn delay-1s f2 f1-l fw2 black mb0 lh-title">Welcome to Nilgiri</h1>
				        <h2 className="animated fadeIn delay-2s fw1 f3 black-80 mt3 mb4">The Best Hostel in IITD (here bg image mein some Nil/IITD Photo)</h2>
				    </div>
			    </div>
			  </div>
			  <ScrollAnimation animateIn="fadeIn" duration="3" style={{"display":"block"}}>
				  <div className="grid-holder tc" style={{ "padding-top":"40px", width: "60vw", "margin-top":"30px"}}>
				  	<h1 className="f1"> The Place to be at IITD </h1>
				  	<h1 className="f2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.</h1>
				  	<ImageList onRouteChange={this.props.onRouteChange} />
				  </div>
			  </ScrollAnimation>
			  <div className="grid2">
				  <ScrollAnimation animateIn="fadeInLeft" duration="2" style={{width: "30vw"}}>
					  <div style={{"padding-top":"40px", width: "40vw", "margin-top":"80px", "margin-left":"50px", "margin-right":"20px", "margin-bottom":"80px"}}>
					  	<h1 className="f1"> The Student Body </h1>
					  	<h1 className="f2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
	      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	      vero eos et accusam et justo duo dolores et ea rebum.</h1>
	     				 <p class="grow no-underline pointer br-pill ph3 pv2 mb2 dib white bg-dark-blue mt3" style={{"font-size":"18px"}} onClick={()=>this.props.onRouteChange('stu')}>Meet the Nilbulls</p>
					  </div>
				  </ScrollAnimation>
				  <ScrollAnimation animateIn="fadeInRight" duration="3">
					  <img src="http://mrmrs.github.io/photos/u/011.jpg" alt="student body" style={{"height":"auto", "width":"45vw", "transform": "rotateZ(5deg)", "margin-bottom":"80px", "margin-left":"20vw", "margin-top":"80px"}}/>
				  </ScrollAnimation>
			  </div>
			  <div>
				  <div className="sideline">
					<p className="cooltext">What's New</p>
					<p className="white desc">Short Text if any</p>
				  </div> 
				  <CardList title="Event Name" who="Club"/>
			  </div>
			</div>
			);
	}

}

export default Home;