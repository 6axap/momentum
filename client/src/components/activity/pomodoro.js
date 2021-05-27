import React from 'react';
import axios from 'axios';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        longPauseAfterRound: 3
      }
    }
    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.toggleIsOnPause = this.toggleIsOnPause.bind(this);
    this.setRoundOrPause = this.setRoundOrPause.bind(this);
    this.tick = this.tick.bind(this);
  }
  
  
  componentDidMount() {
    const roundLength = this.state.preferences.roundLength;
    this.setState({ minutes: roundLength })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.round !== prevState.round) {
      this.fetchData(this.state.round)
    }
  }

  toggleIsActive() {
    this.setState((state, props) => ({
      isActive: !state.isActive
    }));
  }

  toggleIsOnPause() {
    this.setState((state, props) => ({
      isOnPause: !state.isOnPause
    }));
  }

  setRoundOrPause() {
    const round = this.state.round;
    const rounds = this.state.preferences.rounds;
    const pauseLength = this.state.preferences.pauseLength;
    const roundLength = this.state.preferences.roundLength;
    if (round >= rounds) {
      return
    }
    this.setState((state, props) => ({
      round: state.round + 1
    }));
    this.toggleIsOnPause();
    if (this.state.isOnPause) {
      this.setState({ minutes: pauseLength })
    } else {
      this.setState({ minutes: roundLength })
    }
  }

  startTimer() {
    const seconds = this.state.seconds;
    const minutes = this.state.minutes;
    const isActive = this.state.isActive;
    if (!isActive && (minutes !== 0 || seconds !== 0)) {
      this.timer = setInterval(this.tick, 1);
      this.toggleIsActive();
    } else {
        clearInterval(this.timer);
        this.toggleIsActive();
    }
  }
  
  tick() {
    const seconds = this.state.seconds - 1;
    const minutes = this.state.minutes;
    this.setState((state, props) => ({
      seconds: state.seconds - 1
    }));
    if (seconds < 0 && minutes !== 0) {
      this.setState((state, props) => ({
        minutes: state.minutes - 1
      }));
      this.setState({ seconds: 59 })
    } else if (seconds === 0 && minutes === 0) {
        clearInterval(this.timer);
        this.toggleIsActive();
        this.setRoundOrPause();
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
    const round = this.state.round;
    const rounds = this.state.preferences.rounds;
    return(
      <p>{round}/{rounds}</p>
    );
  }

  
  render() {
    const isActive = this.state.isActive;
    const isOnPause = this.state.isOnPause;
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

        <button onClick={this.startTimer} 
          className={ isOnPause ? 'timerbtn paused' : 'timerbtn' }>
          { isActive ? 'Pause' : 'Start' }
        </button>
      </div>
    );
  }
}

export default Pomodoro
