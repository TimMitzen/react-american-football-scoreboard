//TODO: STEP 1 - Import the useState hook.
import React,  { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, homeScored] = useState(0);
  const [awayScore, awayScored] = useState(0);
  const [quarterChange, quarterChanged] = useState(1);
 const homeTouchdown = event =>{
   homeScored(homeScore +7);
 }
 const homeFieldGoal = event =>{
   homeScored(homeScore +3);
 }
 const awayTouchdown = event => {
    awayScored(awayScore +7);
 }
 const awayFieldGoal = event => {
   awayScored(awayScore +3);
 }
 const anotherQuarter = event =>{
   quarterChanged(quarterChange +1);
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
          <button onClick={() => homeScored(0)}>Reset Home Score</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={awayFieldGoal}>Away Field Goal</button>
          <button onClick={() => awayScored(0)}>Reset Away Score</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
