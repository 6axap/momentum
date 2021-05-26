import React, { useState, useEffect } from 'react';
import BoxView from './box'
import Timer from './timer'
// eslint-disable-next-line
import Activity from './activity'
import '../style/App.css';

function StatsGrid() {
  // eslint-disable-next-line
  const [data, setData] = useState(0);

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
        <BoxView title="Timer" view={ <Timer/> } />
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

export default StatsGrid