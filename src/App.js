import React from 'react';
import './app-reset.scss';
import axios from 'axios';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import ResultsData from './components/results/results.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      resultsData: []
    }

    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData (formOptions) {

    const axiosResponse = await axios({
      method: formOptions.reqMethod || 'get',
      url: formOptions.reqUrl,
    });

    // console.log('FORM OPTIONS', formOptions);
    // console.log('AXIOS RESPONSE', response);

    this.setState({...this.state, resultsData: [axiosResponse]});
  }

  render() {
    // console.log('state of results', this.state);
    return (
      <>
        <Header />
        <Form handler={this.fetchData} />
        <ResultsData display={this.state.resultsData}/>
        <Footer />
      </>
    );
  }
}

export default App;
