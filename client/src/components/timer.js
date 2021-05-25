import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      minutes: 0,
      seconds: 5
    }
    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.toggleisActive = this.toggleisActive.bind(this);
    this.tick = this.tick.bind(this);
  }
  
  toggleisActive() {
    const isActive = this.state.isActive;
    this.setState({ isActive: !isActive });
  }

  startTimer() {
    const seconds = this.state.seconds;
    const minutes = this.state.minutes;
    const isActive = this.state.isActive;
    if (!isActive && (minutes != 0 || seconds != 0)) {
      this.timer = setInterval(this.tick, 1000);
      this.toggleisActive();
    } else {
        clearInterval(this.timer);
        this.toggleisActive();
    }
  }
  
  tick() {
    const seconds = this.state.seconds - 1;
    const minutes = this.state.minutes;
    this.setState({ seconds: seconds })
    if (seconds < 0 && minutes != 0) {
      this.setState({ minutes: minutes - 1 })
      this.setState({ seconds: 59 })
    } else if (seconds == 0 && minutes == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const isActive = this.state.isActive;
    let minutes = this.state.minutes.toString();
    let seconds = this.state.seconds.toString();
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return (
      <div className="timer">
        <p>{minutes}:{seconds}</p>
        <button onClick={this.startTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    );
  }
}

export default Timer