import React from 'react';
import BoxView from '../activity/box';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const form = <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} hours={this.state.hours} />;
    return(
      <>
        <div className="main-wrapper">
          <BoxView title="Sign Up" width="full" view={ form } />
        </div>
        {/* <Graph /> */}
      </>
    );
  }
}

function Form(props) {
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  return(
    <form id='signupform' onSubmit={handleSubmit}>
      <label for="email">Email:</label><br />
      <input type="text" id="email" name="email" value={props.email} onChange={handleChange} required /><br />
      <label for="password">Password:</label><br />
      <input type="password" id="password" name="password" value={props.password} onChange={handleChange} required /><br />
      <label for="password">Confirm Password:</label><br />
      <input type="password" id="password" name="password" value={props.password} onChange={handleChange} required /><br />
      <br /><br />
      <input type="submit" value="Sign Up" />
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

export default SignUpForm;
