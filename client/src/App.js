import { Component } from 'react';
import Header from './components/header'
import ActivityMain from './components/activity'
import AddView from './components/activity/add'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header />

        <Switch>
          <Route path='/' exact component={ActivityMain} />
          <Route path='/add' component={AddView} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
