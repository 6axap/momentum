import { Component } from 'react';
import Header from './components/header'
import ActivityMain from './components/activity'
import SignUp from './components/user/signup'
import Login from './components/user/login'
import AddForm from './components/activity/add'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Header />

        <Switch>
          <Route path='/' exact component={ActivityMain} />
          <Route path='/add' component={AddForm} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
