import React from 'react';
import './app-reset.scss';
import axios from 'axios';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      results: {}
    }

    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData (formOptions) {

    const response = await axios({
      method: formOptions.req || 'get',
      url: formOptions.url,
    });

    console.log('FORM OPTIONS', formOptions);
    console.log('AXIOS RESPONSE', response);

    this.setState({...this.state, results: response});
  }

  render() {
    console.log('state of results', this.state);
    return (
      <>
        <Header />
        <Form handler={this.fetchData} />
        <Results display={this.state.results}/>
        <Footer />
      </>
    );
  }
}

export default App;
