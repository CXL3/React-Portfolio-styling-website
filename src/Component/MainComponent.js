
import Directory from './DirectoryComponent';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STYLES } from '../shared/stylesMainData';
import StyleDetailInfo from './StyleDetailInfo';

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
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">Dress slimmer</NavbarBrand>
            </div>
        </Navbar>
        <Directory styles={this.state.styles } onClick={styleId => this.onStylesSelect(styleId)}/>
        <StyleDetailInfo style={this.state.styles.filter(style=> style.id === this.state.selectedStyle)[0]} />
      </div>
   
    );
  }
}

export default Main;
