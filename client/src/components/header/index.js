import React, { Fragment } from 'react'
import '../style/header.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function EditBtn(props) {
  return(
    <div className="editbtn">
      {props.name}
    </div>
  );
}

function MenuBtn(props) {
  return(
    <div className="menubtn">
      {props.name}
    </div>
  );
}

function Title(props) {
  return(
    <div className="title">
      { props.name }
    </div>
  );
}

function Navbar() {
  return(
    <div className="header-wrapper">
      <div className="header">
        <div className="header-left">
          <Title name={ <Link to='/'>Coding</Link> } />
          <MenuBtn name="Track"/>
          <MenuBtn name="Goal"/>
        </div>
        <div className="header-right">
          <EditBtn name="Edit"/>
          <EditBtn name={ <Link to='/add'>Add</Link> }/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;