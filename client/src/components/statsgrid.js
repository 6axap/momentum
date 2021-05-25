import React from 'react';
import Timer from './timer'
import '../style/App.css';

function StatsGrid() {
  return(
    <div className="main">
      <div className="stats">
        <BoxView title="hours"/>
        <TimerView title="timer"/>
      </div>
      {/* <Activity /> */}
    </div>
  );
}

function BoxView(props) {
  return(
    <div className="boxview">
      <h2>{props.title}</h2>
      <div className="box">
        <p>
          this week <strong>34</strong>
        </p>
        <p>
          last week <strong>23</strong>
        </p>
        <p>
          alltime <strong>230</strong>
        </p>
      </div>
    </div>
  );
}

function TimerView(props) {
  return(
    <div className="boxview">
      <h2>{props.title}</h2>
      <div className="box">
        <Timer />
      </div>
    </div>
  );
}

function Activity() {
  return(
    <div className="activity">
      <h1>Activity</h1>
      <Grid />
    </div>
  );
}

function Grid() {
  var y = 16
  return(
    <div>
      <svg width="828" height="128">
        <GridCell y={y} />
      </svg>
    </div>
  );
}

function GridCell(props) {
  return(
      <rect x="0" y={props.y} width="12" height="12" className="grid-day"></rect>
  );
}

export default StatsGrid