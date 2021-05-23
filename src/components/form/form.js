import React from 'react';

import './form.scss';

class Form extends React.Component {

  // eslint-disable-next-line
  constructor(props) {

    super(props);

    this.state = {

      reqUrl: '',

      reqMethod: '',

      // reqHeaders: {},

      // reqBody: {}
    };

    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleChangeReqMethod = this.handleChangeReqMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // event handler for onChange event listener
  handleChangeURL(event) {

    event.preventDefault();
    // console.log('URL event target value is ', event.target.value);
    this.setState({...this.state, reqUrl: event.target.value});

  }

  // event handler for onClick event listener
  handleChangeReqMethod(event) {

    // event.preventDefault();
    // console.log('req method changed to: ', event.target.value);
    this.setState({...this.state, reqMethod: event.target.value});

  }

  // event handler for onSubmit event listener
  async handleSubmit(event) {
    
    event.preventDefault();

    this.props.handler(this.state);

  }

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChangeURL} type="text" name="url" placeholder="Type your API URL here" value={this.state.reqUrl} required/>
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
      </>
    )
  }
}

export default Form;
