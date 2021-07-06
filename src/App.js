import Header from './Component/Header';
import Footer from './Component/Footer';
import Body from './Component/Body';
import Directory from './Component/DirectoryComponent';
import React, { Component } from 'react';
import { STYLES } from './shared/stylesMainData';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      styles: STYLES
     }
  }
  render() { 
    return (
      <div>
        <Header />
        <Directory styles={this.state.styles } />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
