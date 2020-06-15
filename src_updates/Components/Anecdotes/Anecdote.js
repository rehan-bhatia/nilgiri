import React from "react";
import {
  BrowserView,
  MobileView,
} from "react-device-detect"
//can be made into a function to take anecdote from external file

const Anecdote = () => {
  return(
    <div>
    <BrowserView>
        <div className="bg-white" style={{"width":"50vw", "margin":"auto"}}>
          <div class="ph4 ph5-m ph6-l bb bt bw2" style={{"margin-top":"30px"}} >
            <div class="measure f3 center mv5 black-70" >
              <h1 class="fw6 f3 avenir" >Title of Anecdote</h1>
              <h3 class="fw6 f4 avenir">Author, Date</h3>
              <p class="lh-copy measure f3 f3-ns black-70 baskerville">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. (not complete anecdote)
              </p>
            </div>
            <img alt="anec pic" src="http://mrmrs.github.io/photos/005.jpg" class="db w-80" style={{"margin-left":"auto", "margin-right":"auto"}}/>
            <blockquote class="mh0 pr0 mt5">
              <p class="f2 f1-l fw1 mv0 tc lh-title baskerville">
                “Some funny/important line or quote from anecdote (optional)”
              </p>
            </blockquote>
            <div class="measure f4 f3-ns center mv5 black-70">
              <p class="lh-copy measure f3 f3-ns black-70 baskerville">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum.(Remaining anecdote comes here)
              </p>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="bg-white" style={{"width":"80vw", "margin":"auto"}}>
          <div class="ph4 ph5-m ph6-l bb bt bw2" style={{"margin-top":"30px"}} >
            <div class="measure f3 center mv5 black-70" >
              <h1 class="fw6 f3 avenir" >Title of Anecdote</h1>
              <h3 class="fw6 f4 avenir">Author, Date</h3>
              <p class="lh-copy measure f3 f3-ns black-70 baskerville">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. (not complete anecdote)
              </p>
            </div>
            <img alt="anec pic" src="http://mrmrs.github.io/photos/005.jpg" class="db w-80" style={{"margin-left":"auto", "margin-right":"auto"}}/>
            <blockquote class="mh0 pr0 mt5">
              <p class="f2 f1-l fw1 mv0 tc lh-title baskerville">
                “Some funny/important line or quote from anecdote (optional)”
              </p>
            </blockquote>
            <div class="measure f4 f3-ns center mv5 black-70">
              <p class="lh-copy measure f3 f3-ns black-70 baskerville">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum.(Remaining anecdote comes here)
              </p>
            </div>
          </div>
        </div>
      </MobileView>
    </div>
    );
}

export default Anecdote;
  
