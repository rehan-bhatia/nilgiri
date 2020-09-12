import React from "react"
import { navigate } from "gatsby"

const Nav = ({onRouteChange}) => {
	const onClick = (route) => {
		navigate(route)
	}
	return(
		<nav style={{fontFamily: "Avenir"}} class="navbar db dt-l w-100 border-box bg-black pa3 ph5-l pv0">
		  <p class="dib dtc-l v-mid white w-100 w-25-l tc tl-l  mb0-l mt0 mb2"><h3 class="nav mt0">Nilgiri: Hostel Website</h3></p>
		  <div class="db dtc-l pa2v-mid w-100 w-75-l tc tr-l pt2"><p onClick={()=>onClick("/")} class="nav mt link white dib mr3 mr4-l hover-light-blue">Home</p><p onClick={()=>onClick("/anecdotes")} class="nav mt link white dib mr3 mr4-l hover-light-red">Anecdotes</p><p onClick={()=>onClick("/studentbody")} class="nav mt link white dib mr3 mr4-l hover-light-green">Student Body</p><p onClick={()=>onClick("/awards")} class="nav mt link white dib mr3 mr4-l hover-yellow">Awards</p><p onClick={()=>onClick("/gallery")} class="nav mt link white dib mr3 mr4-l hover-pink">Gallery</p></div>
		</nav>
	);
}

export default Nav;