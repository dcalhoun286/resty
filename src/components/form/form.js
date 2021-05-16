import React from 'react';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';

import './form.scss';

class Form extends React.Component {

  // eslint-disable-next-line
  constructor(props) {

    super(props);

    this.state = {

      url: '',

      req: '',

      reqHeaders: {},

      reqBody: {}
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
  async handleSubmit(event) {
    
    event.preventDefault();

    try {

      let data = {
        url: this.state.url,
        req: this.state.req
      };
  
      let returned = await axios.get(data.url);
      // let resultsData = returned.data;
      let headersData = returned.headers;
      let bodyData = returned.data;

      console.log('HEADERS', headersData);
      console.log('BODY', bodyData);
      console.log('POKEMON DATA', returned);
  
      this.setState({
        url: this.state.url,
        req: this.state.req,
        reqHeaders: headersData,
        reqBody: bodyData
      });

    } catch (err) {
      console.error(err);
    }

  }

  render() {

    // let results = !this.state.results ? null :
    //   <article>
    //     <p>{this.state.req}</p>
    //     <p>{this.state.url}</p>
    //   </article>

    console.log('these are the headers', this.state.reqHeaders);
    console.log('this is the body', this.state.reqBody);

    return (
      <>
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

          <input type="submit" value="GO!" />
        </form>
        <ul id="display">
          <li>
            <JSONPretty id="json-pretty" data={this.state.reqHeaders}></JSONPretty>
          </li>
          <li>
            <JSONPretty id="json-pretty" data={this.state.reqBody}></JSONPretty>
          </li>
        </ul>
      </>
    )
  }
}

export default Form;
