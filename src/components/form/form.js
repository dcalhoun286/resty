import React from 'react';
import './form.scss';

class Form extends React.Component {

  // eslint-disable-next-line
  constructor(props) {

    super(props);

    this.state = {

      url: '',

      req: '',

      results: [],
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

    // event.preventDefault();
    console.log('req method changed to: ', event.target.value);
    this.setState({...this.state, req: event.target.value});

  }

  // event handler for onSubmit event listener
  handleSubmit(event) {

    event.preventDefault();

    let data = {
      url: this.state.url,
      req: this.state.req
    };

    this.setState({results: [...this.state.results, data] })
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
        </div><br />

        <label>
          <input onClick={this.handleChangeReqMethod} type="radio" name="req" value="GET" required/>
          <span>GET</span>
        </label>

        <label>
          <input onClick={this.handleChangeReqMethod} type="radio" name="req" value="POST" />
          <span>POST</span>
        </label>

        <label>
          <input onClick={this.handleChangeReqMethod} type="radio" name="req" value="PUT" />
          <span>PUT</span>
        </label>

        <label>
          <input onClick={this.handleChangeReqMethod} type="radio" name="req" value="DELETE" />
          <span>DELETE</span>
        </label><br /><br />

        {/* <label htmlFor="methods">Please select a HTTP request method: </label> */}
        {/* <select onChange={this.handleChangeReqMethod} name="methods" id="reqs" defaultValue="DEFAULT" required>
          <option value="DEFAULT" disabled selected hidden>Choose a method</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select> */}
        <input type="submit" value="GO!" />
      </form>
      // <section>
      //   {this.state.results.map(result => {
      //   <p>{result.req} {result.url}</p>
      // })}
      // </section>
    )
  }
}

export default Form;
