import React from "react";

const Profile = ({name, position, url}) => {
	return(
		<div class="fl w-50 w-25-m w-20-l pa2">
		    <img src={url} alt={name} class="dim br-100 pa1 ba b--black-10" style={{"height":"300px","width":"300px"}}/>	     	      
		    <dl class="mt2 f6 lh-copy">
	          <dt class="clip">Title</dt>
			  <dd class="f3 ml0 b black truncate w-100">{name}</dd>
			  <dt class="clip">Artist</dt>
			  <dd class="f3 ml0 dark-gray truncate w-100">{position}</dd>
			</dl>
		</div>
			);
}

export default Profile;