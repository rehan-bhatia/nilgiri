import React from "react";
import Profile from "./Profile";
import "./StuBody.css"

const Page = ({input}) => {
	return (
		<div style={{"margin-top":"100px"}}>
		  <div class="tc cf ml5">
		  	<Profile input={input}/>
		  	<Profile input={input}/>
		  	<Profile input={input}/>
		  	<Profile input={input}/>
		  	<Profile input={input}/>
		  	<Profile input={input}/>
		  	<Profile input={input}/>
		  </div>
		</div>
	);
}	

export default Page;