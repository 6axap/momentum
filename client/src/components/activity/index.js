// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import BoxView from './box'
import Pomodoro from './pomodoro'
import HabitsList from './main'
// eslint-disable-next-line
import Graph from './graph'
import '../style/App.css';

function ActivityMain() {
  // eslint-disable-next-line
  const [data, setData] = useState(0);
  // eslint-disable-next-line
  const [pomodoro, setPomodoro] = useState({
    isActive: false,
    isEditing: false,
    isOnPause: false,
    minutes: 0,
    seconds: 0,
    round: 0,
    preferences: {
      rounds: 2,
      roundLength: 10,
      pauseLength: 5,
      longPauseLength: 15,
      longPauseAfterRound: 3,
    }
  });

  return(
    <>
      <div className="main-wrapper">
        <BoxView title="Habits" view={ <HabitsList /> } width="full" />
        <BoxView title="Timer" view={ <Pomodoro/> } width="half" />
        <BoxView title="Hours" view={ StatsList() } width="half" />
      </div>
      {/* <Graph /> */}
    </>
  );
}

// eslint-disable-next-line
function StatsList(props) {
  return(
    <>
      <p>
        N/A
      </p>
    </>
  );
}

export default ActivityMain;