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
  handleSubmit(event) {

    event.preventDefault();
    this.setState({ ...this.state, results: true });

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
        <input type="text" name="url" placeholder="Type your API URL here" value={this.state.url} onChange={this.handleChangeURL}></input>
        <label>
          <input type="radio" id="get" name="req" value="GET" onClick={this.handleChangeReqMethod} />
          <span>GET</span>
        </label>
        <label>
          <input type="radio" id="post" name="req" value="POST" onClick={this.handleChangeReqMethod} />
          <span>POST</span>
        </label>
        <label>
          <input type="radio" id="put" name="req" value="PUT" onClick={this.handleChangeReqMethod} />
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" id="delete" name="req" value="DELETE" onClick={this.handleChangeReqMethod} />
          <span>DELETE</span>
        </label>
  
        <input type="submit" value="GO!"></input>
      </form>
    )
  }
}

export default Form;
