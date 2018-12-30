import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';

class App extends Component {
  state = {
    series: []
  }
  componentDidMount() {
    const series = ["Vikings", "Game of Thrones"];
    setTimeout(() => {
      this.setState({ series });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Use this search engine to find your favorite TV shows." />
        This database currently has {this.state.series.length} TV shows. Impressive, I know.
      </div>
    );
  }
}

export default App;
