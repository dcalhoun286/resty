import React from 'react';
import './app-reset.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <div>some words here</div>
        <Footer />
      </>
    );
  }
}

export default App;
