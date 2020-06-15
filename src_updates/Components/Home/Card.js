import React from "react";

const Card = ({title, who}) => {
  return (
    <div class="hover-bg-light-yellow grow bg-white center mw5 ba b--black-10 mv4" style={{"height":"320px", "min-width":"300px", "margin":"10px", "margin-top":"20px"}}>
      <div class="pv2 ph3">
         <h1 onClick={event =>  window.location.href='https://www.google.com'} class="2rem ttu tracked pointer">{title}</h1>
      </div>
      <div class="pa3">
        <p>{who}</p>
        <p>Date, Time</p>
        <small class="dark-gray db pv2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.</small>
      </div>
    </div> 
    );
}

export default Card;
