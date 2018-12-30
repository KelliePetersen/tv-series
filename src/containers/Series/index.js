import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    return <div>
      <Intro message="Use this search engine to find your favorite TV shows." />
      <div>
        <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === "" && <p>
          Please enter series name into the search bar
        </p>}
      {!isFetching && series.length === 0 && seriesName.trim() !== "" && <p>
          No TV Shows with this name have been found.
        </p>}
      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={this.state.series} />}
    </div>;
  }
}

export default Series