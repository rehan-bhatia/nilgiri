import React from "react";
import Award from './Award.js';


const AwardList = () => {
  const ref = React.useRef()
  return (
    <div >
      <div className="flexing" innerRef={ref} style={{"margin-right":"auto", "margin-left":"auto"}}>
        <Award name="Interhostel Waterpolo" team="Sports" rank={1}/>
        <Award name="Interhostel Lawn Tennis" team="Sports" rank={2}/>
        <Award name="Interhostel Volleyball" team="Sports" rank={1}/>
        <Award name="Stage Play (Drama)" team="Drama Club" rank={2}/>
        <Award name="Monoact (Drama)" team="Drama Club" rank={1}/>
        <Award name="Three Muses" team="Lit Club" rank={1}/>
        <Award name="JAM" team="Lit Club" rank={1}/>
        <Award name="Interhostel Debate" team="Debating Club" rank={3}/>
        <Award name="Interhostel Competition" team="Music Club" rank={1}/>
        <Award name="Freshers' Interhostel" team="Quizzing Club" rank={1}/>
      </div>
    </div>
  )
}

export default AwardList;
