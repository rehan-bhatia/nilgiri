import React from "react";
import Anecdote from "../components/Anecdote.js";
import ScrollAnimation from 'react-animate-on-scroll';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

const AnecPage = () => {
	return(
		<div>
			<Nav/>
			<div style={{"margin-top": "50px", "margin-bottom":"30px"}}>
				<div class="vh-50 cover bg-center" style={{"background-image": "url(https://i.ibb.co/2Yzv1qt/DSC0014.jpg"}}></div>
				<div class="flex items-center justify-center ph4 pv2 mv0 bg-lightest-blue navy side">
		    		<a href="https://docs.google.com/forms/d/e/1FAIpQLSe_rux8e230ynYt759CixbCs--bqhswaCU-_frWnMUOdAETYw/viewform" class="lh-title ml3 pv0 mv0 f6 dark-blue">Want to contribute anecdotes? Click here.</a>
				</div>
				<div class="pv4 mt0 f4 f2-ns measure center ph3">
			        <h2 class="fw6 f2 fl w-100 black-70 mt0 mb3 avenir">Anecdotes</h2>
			        <p class="db lh-copy black-70serif fw1 mv0 f3 w-100 measure baskerville">
			          Life at Nilgiri is many things - fun, exciting, memorable, comfortable and overall a very interesting experience. But boring is not one of these things. Life here is always bustling with something or the other happening. Don't believe us? Have a look at some of our hostel's anecdotes!
			        </p>
			    </div>
			    <ScrollAnimation animateIn="fadeIn" duration="3" style={{"display":"block"}}>
					<Anecdote title="Uh oh! This page is empty." author="Share your story" date="be featured on this page!" text1="You can contribute anecdotes to this page. Just fill the Google form" quote="Share now! Link below" text2="https://docs.google.com/forms/d/e/1FAIpQLSe_rux8e230ynYt759CixbCs--bqhswaCU-_frWnMUOdAETYw/viewform"/>
				</ScrollAnimation>
			</div>
			<Footer/>
		</div>
		);
}

export default AnecPage;