import React from "react";
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import Top from "../components/Top.js";
import AwardList from "../components/AwardList.js"

const Main = () => {
	return(
		<div>
			<Nav/>
			<Top/>
			<AwardList/>
			<Footer/>
		</div>
		);
}

export default Main;