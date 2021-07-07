
import Directory from './DirectoryComponent';
import React, { Component } from 'react';
import { STYLES } from '../shared/stylesMainData';
import StyleDetailInfo from './StyleDetailInfo';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      styles: STYLES,
      selectedStyle: null
    };
  }
  onStylesSelect(styleId) {
    this.setState({selectedStyle: styleId});
  }
  render() { 
    return (
      <div>
        <Header />
        <Directory styles={this.state.styles } onClick={styleId => this.onStylesSelect(styleId)}/>
        <StyleDetailInfo style={this.state.styles.filter(style=> style.id === this.state.selectedStyle)[0]} />
        <Footer />
      </div>
   
    );
  }
}

export default Main;
