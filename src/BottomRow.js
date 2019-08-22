import React,{useState} from  "react";
import  App from "./App.css";




const BottomRow = () => {

const [quarterChange, setQuarterChange] = useState(1);
const [downChange, setDownChange] = useState(1);
const [yardChange, setYardChange] = useState(1);
const [yardsToGo, setYardsToGo] = useState(10);
const anotherQuarter = event =>{
  setQuarterChange(quarterChange +1);
}
const quarterDownReset = event => {
  setQuarterChange(1);
  setDownChange(1);
  setYardChange(1);
  setYardsToGo(10);
}

const anotherDown = event =>{
  setDownChange(downChange + 1)
}

const changeYard = event =>{
  setYardChange(yardChange + 1)
}
const changeYardsToGo = event=>{
  setYardsToGo(yardsToGo -1);
}


  return (
    
      
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downChange}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yardsToGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yardChange}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterChange}</div>
        
      </div>
      <div className="scoreBoardButtons">
      <button className ="changeQuarterButton"onClick={anotherQuarter}>Change Quarter</button>
      <button className="changeDownButton" onClick={anotherDown}>Change Down</button>
      <button className="changeYardButton" onClick={changeYard}>Change Ball On</button>
      <button className="changeYardsToGo" onClick={changeYardsToGo}>Change yards to Go</button>
      <button className="resetQuarterButton"onClick={quarterDownReset}>Reset</button>
      </div>
      </div>
      
     
      
  );
};

export default BottomRow;
