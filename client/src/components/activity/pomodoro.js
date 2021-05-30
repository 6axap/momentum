import React from 'react';
import axios from 'axios';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isBreakTime: false,
      minutes: 0,
      seconds: 2,
      totalTime: 0,
      rounds: [],
      tickFrequency: 1,
      preferences: {
        rounds: 2,
        roundLength: 10,
        pauseLength: 5,
        longPauseLength: 15,
        longPauseAfterRound: 3
      }
    }
    this.timer = null;
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.toggleBreakTime = this.toggleBreakTime.bind(this);
    this.setNewTimer = this.setNewTimer.bind(this);
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    const roundLength = this.state.preferences.roundLength;
    this.setState({ minutes: roundLength })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const rounds = this.state.rounds;
    const totalTime = this.state.totalTime;
    const data = { rounds, totalTime };
    if (this.state.rounds !== prevState.rounds) {
      axios({
        method: 'post',
        url: '/api/add',
        data: data
      });
    }
  }

  fetchData() {
  }

  toggleIsActive() {
    this.setState((state, props) => ({
      isActive: !state.isActive
    }));
  }

  toggleBreakTime() {
    this.setState((state, props) => ({
      isBreakTime: !state.isBreakTime
    }));
  }

  setNewTimer() {
    const pauseLength = this.state.preferences.pauseLength;
    const roundLength = this.state.preferences.roundLength;
    const isBreakTime = this.state.isBreakTime;
    if (isBreakTime) {
      this.timeStampEnd();
      this.setState({ minutes: pauseLength })
    } else {
      this.setState({ minutes: roundLength })
    }
  }

  timeStampStart() {
    const isBreakTime = this.state.isBreakTime;
    if (isBreakTime) {
      return
    }
    const rounds = this.state.rounds.slice();
    const lastRound = rounds[rounds.length - 1];
    if (rounds.length === 0 || lastRound.end != null) {
      rounds.push({ start: new Date(), end: null })
      this.setState({
        rounds: rounds
    })
    }
  }

  timeStampEnd() {
    const rounds = this.state.rounds.slice();
    let lastRound = rounds[rounds.length - 1];
    lastRound.end = new Date();
    this.setState({ rounds: rounds });
  }

  toggleTimer() {
    const seconds = this.state.seconds;
    const minutes = this.state.minutes;
    const isActive = this.state.isActive;
    const tickFrequency = this.state.tickFrequency;
    // StartTimer
    // timer is inactive AND time remaining
    if (!isActive && (minutes !== 0 || seconds !== 0)) {
      this.timer = setInterval(this.tick, tickFrequency);
      this.timeStampStart();
    } 
    // StopTimer
    else {
      clearInterval(this.timer);
    }
    this.toggleIsActive();
  }
  
  tick() {
    this.setState((state, props) => ({
      seconds: state.seconds - 1,
    }));

    const seconds = this.state.seconds;
    const minutes = this.state.minutes;

    if (!this.state.isBreakTime) {
      this.setState((state, props) => ({
        totalTime: state.totalTime + 1
      }));
    }
    if (seconds < 0 && minutes !== 0) {
      this.setState((state, props) => ({
        minutes: state.minutes - 1
      }));
      this.setState({ seconds: 59 })
    } else if (seconds === 0 && minutes === 0) {
        clearInterval(this.timer);
        this.toggleIsActive();
        this.toggleBreakTime();
        this.setNewTimer();
    }
  }

/*   editTimer() {
    const seconds = this.state.seconds;
    const minutes = this.state.minutes;
  } */

  editTimerDisplay() {
    return(
      <div>
        <input
          type="tel"
          maxlength="2"
          pattern="\d*"
          className="timer_input min"
          placeholder="mm">
        </input>
        <span style={{fontSize: "3rem"}}>:</span>
        <input
          type="tel"
          maxlength="2"
          pattern="\d*"
          className="timer_input sec"
          placeholder="ss">
        </input>
      </div>
    )
  }

  displayRound() {
    const round = this.state.rounds.length;
    // const rounds = this.state.preferences.rounds;
    return(
      <p>- {round ? round : 1} -</p>
    );
  }
  
  render() {
    const isActive = this.state.isActive;
    const isBreakTime = this.state.isBreakTime;
    let minutes = this.state.minutes.toString();
    let seconds = this.state.seconds.toString();
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    let display = minutes + ':' + seconds;

    return (
      <div className="timer">
        { this.displayRound() }
        <p onClick={this.editTimer} className="timerdisplay">{display}</p>
        {/* this.editTimerDisplay() */}

        <button onClick={this.toggleTimer} 
          className={ isBreakTime ? 'timerbtn paused' : 'timerbtn' }>
          { isActive ? 'Pause' : 'Start' }
        </button>
      </div>
    );
  }
}

export default Pomodoro
