import React from 'react';
import axios from 'axios';
import BoxView from './box';

class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      freq: 'daily',
      hours: '',
      goalhours: ''
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    const addform = <AddForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} hours={this.state.hours} />;
    return(
      <>
        <div className="main-wrapper">
          <BoxView title="Add new habit" width="full" view={ addform } />
        </div>
        {/* <Graph /> */}
      </>
    );
  }
}

function AddForm(props) {
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  return(
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label><br />
      <input type="text" id="name" name="name" value={props.name} onChange={handleChange} /><br />
      <label for="frequency">Frequency:</label><br />
      <select id="frequency" name="freq" onChange={handleChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select><br />
      <label for="hours">Hours per session:</label><br />
      <input type="number" name="hours" min="1" max="24" value={props.hours} onChange={handleChange} /><br />
      <label for="goalhours">End goal in hours:</label><br />
      <input type="number" name="goalhours" min="1" value={props.goalhours} onChange={handleChange} />
      <br /><br />
      <input type="submit" value="Add" />
      {/*   

      Name
      Startdate
      Goal 
        Frequency: [d,w,m]
        HoursPerSession
        EndDate
        TotalHours

      */}
    </form>
  );

}

export default AddView;