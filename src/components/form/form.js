import React from 'react';
import './form.scss';

class Form extends React.Component {

  // eslint-disable-next-line
  constructor(props) {

    super(props);

    this.state = {

      url: '',

      req: '',

      results: null,
    };

    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleChangeReqMethod = this.handleChangeReqMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // event handler for onChange event listener
  handleChangeURL(event) {

    event.preventDefault();
    console.log('URL event target value is ', event.target.value);
    this.setState({...this.state, url: event.target.value});

  }

  // event handler for onClick event listener
  handleChangeReqMethod(event) {

    event.preventDefault();
    console.log('req method changed to: ', event.target.value);
    this.setState({...this.state, req: event.target.value});

  }

  // event handler for onSubmit event listener
  async handleSubmit(event) {

    event.preventDefault();

    this.setState({...this.state, results: true })
  }

  render() {

    // let results = !this.state.results ? null :
    //   <article>
    //     <p>{this.state.req}</p>
    //     <p>{this.state.url}</p>
    //   </article>

    console.log(this.state);

    return (
      <form onSubmit={this.handleSubmit}>

        <div>
          <input onChange={this.handleChangeURL} type="text" name="url" placeholder="Type your API URL here" value={this.state.url} required/>
        </div>

        <label htmlFor="methods">Please select a HTTP request method: </label>
        <select onChange={this.handleChangeReqMethod} name="methods" id="reqs" defaultValue="DEFAULT" required>
          <option value="DEFAULT" disabled selected hidden>Choose a method</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <button type="submit">GO!</button>

      </form>
    )
  }
}

export default Form;
