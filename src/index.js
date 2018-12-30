import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();


/*
Without JSX: 
const oldGreeting = React.createElement('h1', {}, 'Hello world');

With JSX. Create-react-app is compiling JSX elements to React elements with Babel.
const greeting = <h1>Hello World</h1>;
*/

/* APPLICATION MADE USING https://www.youtube.com/watch?v=6Ied4aZxUzc */