// eslint-disable-next-line
function Graph() {
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

export default Graph;