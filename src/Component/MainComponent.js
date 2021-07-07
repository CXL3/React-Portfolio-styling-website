
import Directory from './DirectoryComponent';
import React, { Component } from 'react';
import { STYLES } from '../shared/stylesMainData';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      styles: STYLES,
      
    };
  }
  onStylesSelect(styleId) {
    this.setState({selectedStyle: styleId});
  }
  render() { 
    const HomePage = () => {
      return (
          <Directory />
      );
    };

    return (
      
      <div>
        <Header />
        {/* change it into React Router,keeping the previous code as notes
        <Directory styles={this.state.styles } onClick={styleId => this.onStylesSelect(styleId)}/>
        <StyleDetailInfo style={this.state.styles.filter(style=> style.id === this.state.selectedStyle)[0]} /> */}
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.styles} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
   
    );
  }
}

export default Main;
