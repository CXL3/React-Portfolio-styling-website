import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
