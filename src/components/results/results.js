import React from 'react';
import JSONPretty from 'react-json-pretty';

class ResultsData extends React.Component {

  render() {

    let jsonItems = !this.props.display ? null : (
      <>
        <ul id="display">
          <li>
            <JSONPretty id="json-pretty" data={
              this.props.display.map( (item, idx) => <p data-testid={`item-${idx}`} key={idx}>{item.headers}</p>)
            }></JSONPretty>
          </li>
          <li>
            <JSONPretty id="json-pretty" data={
              this.props.display.map( (item, idx) => <p data-testid={`item-${idx}`} key={idx}>{item.results}</p>)
            }></JSONPretty>
          </li>
        </ul>
      </>
    )

    return (jsonItems);

  }
}

export default ResultsData;
