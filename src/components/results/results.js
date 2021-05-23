import React from 'react';
import ReactJson from 'react-json-view';

import './results.scss';

class ResultsData extends React.Component {

  render() {
    console.log('DISPLAY', this.props.display);
    let jsonItems = !this.props.display ? null : (
      <>
        <section id="display">
          <h2>Headers</h2>
          <ReactJson id="json-pretty1" src={this.props.display.h}/>
          <h2>Results</h2>
          <ReactJson id="json-pretty2" src={this.props.display.d}/>
        </section>

      </>
    )

    return (jsonItems);

  }
}

export default ResultsData;
