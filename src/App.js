import React from 'react';
import './app-reset.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    );
  }
}

export default App;
