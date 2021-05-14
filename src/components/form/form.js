import React from 'react';
import './form.scss';

class Form extends React.Component {

  // eslint-disable-next-line
  constructor(props) {

    super(props);

    this.state = {
      
      // properties here are the default state of the app and what will change based on user input

      url: '',

      reqMethod: ''

    };

    // set up a handler for changes to form fields and a handler for the submit button
    // each property in state needs its own event handler
    // this.method = this.method.bind(this)

    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleChangeReqMethod = this.handleChangeReqMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChangeReqMethod(event) {
    event.preventDefault();
    console.log('req method changed to: ', event.target.value);
    this.setState({reqMethod: event.target.value});
    // on click
    // update the state with the web request that the user selected
  }

  handleChangeURL(event) {
    event.preventDefault();
    console.log('URL event target value is ', event.target.value);
    this.setState({url: event.target.value});
    // on change
    // update the state with the API the user entered
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // on click
    // this will make the web request
  }

  render() {
    return (
      <form action={this.state.url} method={this.state.reqMethod}>
        <input type="text" placeholder="Type your API URL here" value={this.state.url} onChange={this.handleChangeURL}></input>
        <label>
          GET:
          <input type="radio" id="get" name="req" value="GET" onClick={this.handleChangeReqMethod}></input>
        </label>
        <label>
          POST:
          <input type="radio" id="post" name="req" value="POST" onClick={this.handleChangeReqMethod}></input>
        </label>
        <label>
          PUT:
          <input type="radio" id="put" name="req" value="PUT" onClick={this.handleChangeReqMethod}></input>
        </label>
        <label>
          DELETE:
          <input type="radio" id="delete" name="req" value="DELETE" onClick={this.handleChangeReqMethod}></input>
        </label>
  
        <input type="submit" value="GO!"></input>
      </form>
    )
  }
}

export default Form;
