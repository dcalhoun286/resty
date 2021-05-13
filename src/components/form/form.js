import React from 'react';
import './form.scss';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Type your API URL here"></input>
        <input type="radio" id="get" name="req" value="GET"></input>
        <label for="get">GET</label>
        <input type="radio" id="post" name="req" value="POST"></input>
        <label for="post">POST</label>
        <input type="radio" id="put" name="req" value="PUT"></input>
        <label for="put">PUT</label>
        <input type="radio" id="delete" name="req" value="DELETE"></input>
        <label for="delete">DELETE</label>
        <input type="submit" value="GO!"></input>
      </form>
    )
  }
}

export default Form;
