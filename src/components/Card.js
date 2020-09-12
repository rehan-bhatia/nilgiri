import React from "react";

const Card = ({title, who, date, text, link}) => {
  return (
    <div class="hover-bg-light-yellow grow bg-white center mw5 ba b--black-10 mv4" style={{"height":"320px", "min-width":"300px", "margin":"10px", "margin-top":"20px"}}>
      <div class="pt2 mb0 ph3">
         <h2 onClick={event =>  window.location.href='https://www.google.com'} class="2rem mb2 mt2 ttu tracked pointer">{title}</h2>
      </div>
      <div class="ph3">
        <p>{who}</p>
        <p>{date}</p>
        <small class="dark-gray db pv2">{text}</small>
        <small class="blue underline hover-dark-blue pointer"><a href={link}>Click Here</a></small>
      </div>
    </div> 
    );
}

export default Card;
