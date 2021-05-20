import React from 'react';
import JSONPretty from 'react-json-pretty';

class Results extends React.Component {

  render() {

    return (
      <>
        <ul id="display">
          <li>
            <JSONPretty id="json-pretty" data={this.props.display.results}></JSONPretty>
          </li>
          <li>
            <JSONPretty id="json-pretty" data={this.props.display.results}></JSONPretty>
          </li>
        </ul>
      </>
    )

  }
}

export default Results;
