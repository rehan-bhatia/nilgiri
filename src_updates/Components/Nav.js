import React from "react"

const Nav = ({onRouteChange}) => {
	const onClick = (route) => {
		onRouteChange(route)
	}
	return(
		<nav class="navbar db dt-l w-100 border-box bg-black pa3 ph5-l">
		  <p class="dib dtc-l v-mid white w-100 w-25-l tc tl-l mb2 mb0-l"><h3 class="nav">Nilgiri: Hostel Website</h3></p>
		  <div class="db dtc-l pa2v-mid w-100 w-75-l tc tr-l"><p onClick={()=>onClick("home")} class="nav mt link white dib mr3 mr4-l hover-light-blue">Home</p><p onClick={()=>onClick("anec")} class="nav mt link white dib mr3 mr4-l hover-light-red">Anecdotes</p><p onClick={()=>onClick("stu")} class="nav mt link white dib mr3 mr4-l hover-light-green">Student Body</p><p onClick={()=>onClick("awards")} class="nav mt link white dib mr3 mr4-l hover-yellow">Awards</p><p onClick={()=>onClick("gallery")} class="nav mt link white dib mr3 mr4-l hover-pink">Gallery</p></div>
		</nav>
	);
}

export default Nav;