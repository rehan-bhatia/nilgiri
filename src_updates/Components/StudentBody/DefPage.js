import React from "react";
import Profile from "./Profile";

const Page = ({data}) => {
	const profiles = data.map((user,i)=> {
		return <Profile url={user.url} name={user.name} position={user.pos}/>
	});
	return (
		<div style={{"margin-top":"100px"}}>
		  <div class="tc cf pa2 ml5">
		  	{profiles}
		  </div>
		</div>
	);
}	

export default Page;