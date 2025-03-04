//TODO: STEP 1 - Import the useState hook.
import React,  { useState } from "react";
import ReactDom from "react-dom"
import BottomRow from "./BottomRow";


function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);//sets up the timmer
 const homeTouchdown = event =>{
   setHomeScore(homeScore +7);
 }
 const homeFieldGoal = event =>{
   setHomeScore(homeScore +3);
 }
 const awayTouchdown = event => {
    setAwayScore(awayScore +7);
 }
 const awayFieldGoal = event => {
   setAwayScore(awayScore +3);
 }
const reset = event =>{
  setHomeScore(0);
  setAwayScore(0);
}



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal} >Home Field Goal</button>
          
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={awayFieldGoal}>Away Field Goal</button>
          <button className="resetScore"onClick={reset}>Reset Score</button>
        </div>
        {/* <div className="timerButtons">
          <button className="startTimer">Start Game</button>
          <button className="stopTimer">Pause Game</button>
          <button className="resetTimer">Reset Game</button>
        </div> */}
        
      </section>
    </div>
  );
}


export default App;
