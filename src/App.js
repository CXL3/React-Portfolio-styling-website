import Header from './Component/Header';
import Footer from './Component/Footer';
import Body from './Component/Body';
import Directory from './Component/DirectoryComponent';
import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Header />
        <Directory />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
