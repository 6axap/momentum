import React, { useState, useEffect } from 'react';
import BoxView from './box'
import Pomodoro from './pomodoro'
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

  useEffect(() => {
    fetchAPI('/api')
  });

  const fetchAPI = (path) => {
    fetch(path)
    .then(res => res.json())
    .then(data => setData( data ))
  }

  return(
    <div className="main">
      <div className="stats">
        <BoxView title="Timer" view={ <Pomodoro/> } />
        <BoxView title="Hours" view={ StatsList() }/>
        {/* <BoxView title="Hours" view={ StatsList() } /> */}
      </div>
      {/* <Activity /> */}
    </div>
  );
}

// eslint-disable-next-line
function StatsList(props) {
  return(
    <>
      <p>
        NVM
      </p>
    </>
  );
}

export default ActivityMain