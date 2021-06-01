import React from 'react';

class HabitsList extends React.Component {
  render() {
    return(
      <div className="table">
        <DateRow />
        <ItemRow name="Coding" />
        <ItemRow name="Write" />
        <ItemRow name="Exercise" />
      </div>
    );
  }
}
class DateRow extends React.Component {
  render() {
    return (
      <div className="itemrow daterow">
        <div></div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
    );
  }
}

class ItemRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="itemrow">
        <div className="row-title">{this.props.name}</div>
        <div className="check">●</div>
        <div className="check">●</div>
        <div className="check">●</div>
        <div className="check">●</div>
        <div className="check">●</div>
        <div className="check">●</div>
        <div className="check">●</div>
      </div>
    );
  }
}

export default HabitsList;