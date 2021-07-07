
import Directory from './DirectoryComponent';
import React, { Component } from 'react';
import { STYLES } from '../shared/stylesMainData';
import Header from './Header';

import Contact from './ContactComponent';
import Home from './HomeComponent';
import StyleDetailInfo from './StyleDetailInfo';

import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      styles: STYLES,
      selectedStyle: null,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS     
    };
  }
  onStylesSelect(styleId) {
    this.setState({selectedStyle: styleId});
  }
  render() { 
    const HomePage = () => {
      return (
          <Home 

          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.state.partners.filter(partner => partner.featured)[0]}
          />
      );
    };

    const StyleWithId = ({match}) => {
      return (
        <StyleDetailInfo
          style={this.state.styles.filter(style => style.id === +match.params.styleId)[0]}
          comments={this.state.comments.filter(comment => comment.styleId === +match.params.styleId)}
        />
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
          <Route exact path='/directory' render={() => <Directory styles={this.state.styles} />} />
          <Route path='/directory/:styleId' component={StyleWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
