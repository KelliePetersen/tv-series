import React from 'react';

//Function Component - JS Functions which return React element
const Intro = props => <p className="App-intro">{props.message}</p>;

/*
Longhand way:
const Intro = (props) => (
  <p className="App-intro">
    Intro
  </p>
)
*/

export default Intro;