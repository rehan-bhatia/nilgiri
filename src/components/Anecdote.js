import React from "react";

//can be made into a function to take anecdote from external file

const Anecdote = ({title, author, date, text1, text2, quote, image}) => {
  return(
    <div className="bg-white" style={{"width":"50vw", "margin":"auto"}}>
      <div class="ph4 ph5-m ph6-l bb bt bw2" style={{"margin-top":"30px"}} >
        <div class="measure f3 center mv5 black-70" >
          <h2 class="fw6 f3 avenir" >{title}</h2>
          <h3 class="fw6 f5 avenir">{author}, {date}</h3>
          <p class="lh-copy measure f4 pt3 black-70 baskerville">{text1}</p>
        </div>
        <img alt="anec pic" src="http://mrmrs.github.io/photos/005.jpg" class="db" style={{"width":"100%","margin-left":"auto", "margin-right":"auto"}}/>
        <blockquote class="mh0 ph0 w-100 pr0 mt5">
          <p class="f2 w-100 mv0 tc lh-title baskerville">
            {quote}
          </p>
        </blockquote>
        <div class="measure f3 center mv5 black-70">
          <p class="lh-copy measure f4 pt3 black-70 baskerville">
            {text2}
          </p>
        </div>
      </div>
    </div>
    );
}

export default Anecdote;
  
