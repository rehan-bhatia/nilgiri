import React from "react";
import Anecdote from "./Anecdote.js";

const AnecPage = () => {
	return(
		<div style={{"margin-bottom":"30px"}}>
			<div class="vh-75 cover bg-center" style={{"background-image": "url(http://mrmrs.github.io/photos/001.jpg)"}}></div>
			<div class="flex items-center justify-center pa4 bg-lightest-blue navy side">
	    		<a href="https://www.google.com" class="lh-title ml3 dark-blue">Want to constribute to anecdotes? Click here.</a>
			</div>
			<div class="pv5 f4 f2-ns measure center pa3">
		        <h1 class="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">Anecdotes</h1>
		        <p class="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
		          A short description. Lorem ipsum dolor sit amet, consectetur adipisicing
		          elit, sed do eiusmod tempor incididunt ut labore etc. al dolore magna
		          aliqua. Ut enim ad.
		        </p>
		    </div>
			<Anecdote/>
			<Anecdote/>
			<Anecdote/>
		</div>
		);
}

export default AnecPage;