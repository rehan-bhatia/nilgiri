import React from "react";

import Profile from "../components/Profile";
import "../components/StuBody.css"

const Page = ({input}) => {
	return (
		<div>
			<div style={{"margin-top":"100px"}}>
			  <div class="tc cf">
			  	<Profile input={input}/>
			  	<Profile input={input}/>
			  	<Profile input={input}/>
			  	<Profile input={input}/>
			  	<Profile input={input}/>
			  	<Profile input={input}/>
			  	<Profile input={input}/>
			  </div>
			</div>
		</div>
	);
}	

export default Page;